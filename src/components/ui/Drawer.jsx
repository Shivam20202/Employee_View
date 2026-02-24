import React, { useEffect } from 'react';

const Drawer = ({ isOpen, onClose, children }) => {
  // Close drawer when Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={onClose}
          role="presentation"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 h-screen bg-[#3d3936] transition-transform duration-300 z-50 md:hidden w-4/5 sm:w-[280px] flex flex-col rounded-3xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button - in header */}
        <div className="flex justify-end p-4 border-b border-white border-opacity-10 flex-shrink-0">
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors duration-200"
            aria-label="Close drawer"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer content with flex-1 to fill remaining space */}
        <div className="overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
