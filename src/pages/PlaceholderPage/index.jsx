import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';

const PlaceholderPage = ({ title }) => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  return (
    <main className="w-full bg-[#f7f7f7] flex justify-start items-start flex-1 min-h-screen">
      <div className="w-full flex gap-3 md:gap-4 justify-start items-start p-2 md:p-4">
        <Sidebar isMobileDrawerOpen={isMobileDrawerOpen} setIsMobileDrawerOpen={setIsMobileDrawerOpen} />

        <div className="flex flex-col gap-4 justify-start items-center flex-1 w-full min-h-screen">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 w-full md:hidden">
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 bg-white"
              aria-label="Open menu"
              type="button"
            >
              <svg className="w-6 h-6 text-[#3d3936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <Header title={title} />

          <div className="bg-white rounded-[20px] w-full flex flex-col gap-6 justify-start items-center p-6 flex-1 min-h-[calc(100vh-16rem)]">
            <div className="w-full max-w-3xl">
              <h2 className="text-xl font-medium text-[#3d3936]" style={{ fontFamily: 'Brother 1816' }}>
                {title}
              </h2>
              <p className="mt-2 text-sm text-[#3d3936cc]" style={{ fontFamily: 'Brother 1816' }}>
                This is a dummy page for the “{title}” sidebar section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlaceholderPage;

