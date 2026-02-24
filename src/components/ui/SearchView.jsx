import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchViewClasses = cva(
  'inline-flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border bg-white',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'px-3 py-2',
        medium: 'px-4 py-3.5 sm:px-4 sm:py-3 md:px-4 md:py-3',
        large: 'px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const SearchView = ({
  // Required parameters with defaults
  placeholder = "Search by Employee Name or Number",
  text_font_size = "14px",
  text_font_family = "Brother 1816",
  text_font_weight = "400",
  text_line_height = "22px",
  text_text_align = "left",
  text_color = "#3d393699",
  border_border = "1px solid #e5e5e4",
  border_border_radius = "24px",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  className,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState(value || '');

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
  const searchStyles = {
    fontSize: text_font_size,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    border: `${borderWidth} ${borderStyle} ${borderColor}`,
    borderRadius: border_border_radius,
  };

  // Handle input change
  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setSearchValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  // Handle focus
  const handleFocus = (event) => {
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };

  // Handle blur
  const handleBlur = (event) => {
    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };

  return (
    <div
      style={searchStyles}
      className={twMerge(
        searchViewClasses({ variant, size }),
        optionalClasses,
        'rounded-[18px] sm:rounded-[20px] md:rounded-[24px] bg-white gap-3 sm:gap-3 md:gap-3 !px-4 !py-2 sm:!px-4 sm:!py-3 md:!px-4 md:!py-3',
        className
      )}
    >
      <svg
        className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0 flex-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value !== undefined ? value : searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className="flex-1 bg-transparent border-0 outline-none placeholder-gray-400 placeholder:text-base sm:placeholder:text-sm md:placeholder:text-base text-base sm:text-sm md:text-base min-w-0"
        style={{
          fontSize: text_font_size,
          fontFamily: text_font_family,
          fontWeight: text_font_weight,
          lineHeight: text_line_height,
          textAlign: text_text_align,
          color: text_color,
        }}
        {...props}
      />
    </div>
  );
};

export default SearchView;