import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dropdownClasses = cva(
  'relative inline-block transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border bg-white',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const Dropdown = ({
  // Required parameters with defaults
  placeholder = "100",
  text_font_size = "14px",
  text_font_family = "Brother 1816",
  text_font_weight = "400",
  text_line_height = "22px",
  text_text_align = "left",
  text_color = "#3d3936",
  border_border = "1px solid #e5e5e4",
  border_border_radius = "12px",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  options = [],
  value,
  onChange,
  disabled = false,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || placeholder);
  const dropdownRef = useRef(null);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Parse border style
  const borderParts = border_border?.split(' ');
  const borderWidth = borderParts?.[0] || '1px';
  const borderStyle = borderParts?.[1] || 'solid';
  const borderColor = borderParts?.[2] || '#e5e5e4';

  // Build inline styles for required parameters
  const dropdownStyles = {
    fontSize: text_font_size,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    border: `${borderWidth} ${borderStyle} ${borderColor}`,
    borderRadius: border_border_radius,
  };

  // Default options if none provided
  const defaultOptions = [
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ];

  const dropdownOptions = options?.length > 0 ? options : defaultOptions;

  // Handle option selection
  const handleSelect = (option) => {
    setSelectedValue(option?.label);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange(option);
    }
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event?.key === 'Enter' || event?.key === ' ') {
      event?.preventDefault();
      setIsOpen(!isOpen);
    } else if (event?.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={twMerge(
        dropdownClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        style={dropdownStyles}
        className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-left bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between rounded-[12px] md:rounded-[14px]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select option, current selection: ${selectedValue}`}
      >
        <span className="block truncate text-xs md:text-sm">{selectedValue}</span>
        <svg
          className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          style={{
            borderRadius: border_border_radius,
            border: `${borderWidth} ${borderStyle} ${borderColor}`,
          }}
          role="listbox"
        >
          {dropdownOptions?.map((option, index) => (
            <button
              key={option?.value || index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-3 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150"
              style={{
                fontSize: text_font_size,
                fontFamily: text_font_family,
                fontWeight: text_font_weight,
                lineHeight: text_line_height,
                color: text_color,
              }}
              role="option"
              aria-selected={selectedValue === option?.label}
            >
              {option?.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;