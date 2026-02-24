import React, { useState, useEffect } from 'react';

const Header = ({ title = 'People' }) => {
  const [currentTime, setCurrentTime] = useState('02:03:02');

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now?.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white rounded-[16px] md:rounded-[20px] px-3 md:px-4 py-3 md:py-4 flex items-center justify-between w-full gap-2 md:gap-4">
      {/* Left Section - Page Title */}
      <div className="flex items-center min-w-0">
        <h1 
          className="text-base md:text-lg font-medium leading-[24px] md:leading-[28px] text-[#3d3936] truncate"
          style={{ fontFamily: 'Brother 1816' }}
        >
          {title}
        </h1>
      </div>

      {/* Right Section - Time and User Info */}
      <div className="flex items-center gap-1 md:gap-2 flex-wrap md:flex-nowrap justify-end">
        {/* Timezone Badge - Hidden on small mobile */}
        <div className="hidden sm:flex items-center px-2 md:px-[10px] py-[10px] border border-[#e5e5e4] rounded-[24px]">
          <span 
            className="text-xs md:text-sm font-medium leading-[22px] text-black"
            style={{ fontFamily: 'Brother 1816' }}
          >
            MST
          </span>
        </div>

        {/* Time Section - Responsive */}
        <div className="hidden md:flex items-center gap-4 border border-[#e5e5e4] rounded-[24px] px-3 py-2">
          <div className="flex items-center gap-2">
            <img 
              src="/images/img_plus_2_gray_800.svg" 
              alt="Clock" 
              className="w-6 h-6"
            />
            <span 
              className="text-lg font-medium leading-[28px] text-[#3d3936]"
              style={{ fontFamily: 'Brother 1816' }}
            >
              {currentTime}
            </span>
          </div>

          <button 
            className="bg-[#f7f7f7] rounded-[20px] p-2 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Time settings"
          >
            <img 
              src="/images/img_plus_4.svg" 
              alt="Settings" 
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Notification Button */}
        <button 
          className="border border-[#e5e5e4] rounded-[24px] p-2 md:p-3 hover:bg-gray-50 transition-colors duration-200"
          aria-label="Notifications"
        >
          <img 
            src="/images/img_stroke_icons_gray_800.svg" 
            alt="Notifications" 
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </button>

        {/* User Avatar */}
        <button 
          className="rounded-[24px] overflow-hidden hover:ring-2 hover:ring-gray-300 transition-all duration-200"
          aria-label="User profile"
        >
          <img 
            src="/images/img_ellipse_323.png" 
            alt="User Avatar" 
            className="w-10 h-10 md:w-12 md:h-12 object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;