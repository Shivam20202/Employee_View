import React, { useMemo, useState } from 'react';
import Drawer from '../ui/Drawer';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ isMobileDrawerOpen, setIsMobileDrawerOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const isActivePath = (path) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleNavigate = (path) => {
    if (!path) return;
    navigate(path);
    if (typeof setIsMobileDrawerOpen === 'function') setIsMobileDrawerOpen(false);
  };

  // Helper to render menu content for both desktop and mobile
  const renderMenuItems = (showToggleButton = true) => (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 mb-6 flex-shrink-0">
        <img 
          src="/images/img_sidebar_logo.svg" 
          alt="Logo" 
          className={`transition-all duration-300 ${isCollapsed ? 'hidden' : 'w-[100px] h-[44px]'}`}
        />
        {showToggleButton && (
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors duration-200"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </button>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-4 overflow-y-auto">
        <nav className="space-y-2">
          {menuItems?.map((item, index) => {
            const active = isActivePath(item?.path);
            return (
            <div key={index}>
              <div 
                className={`
                  relative flex items-center px-4 py-[14px] rounded-xl cursor-pointer transition-all duration-200 group
                  ${active ? 'bg-white bg-opacity-90 text-[#3d3936]' : 'text-white hover:bg-white hover:bg-opacity-10'}
                  ${item?.hasSubmenu ? 'justify-between' : ''}
                `}
                onClick={() => {
                  if (item?.hasSubmenu) toggleSubmenu();
                  handleNavigate(item?.path);
                }}
                role="menuitem"
                aria-expanded={item?.hasSubmenu ? isSubmenuOpen : undefined}
                aria-haspopup={item?.hasSubmenu ? true : undefined}
              >
                {/* Left Indicator Bar */}
                <div 
                  className={`
                    absolute left-[-15px] top-3 bottom-3 w-1 rounded-r-md transition-all duration-200
                    ${active ? 'bg-white' : 'group-hover:bg-white opacity-0 group-hover:opacity-100'}
                  `}
                />
                
                <div className="flex items-center min-w-0">
                  <img 
                    src={item?.icon} 
                    alt={item?.text} 
                    className="w-5 h-5 flex-shrink-0"
                    title={isCollapsed ? item?.text : ''}
                  />
                  <span 
                    className={`
                      text-sm font-normal leading-[21px] transition-all duration-300 truncate
                      ${active ? 'text-[#3d3936] font-medium' : 'text-white'}
                      ${isCollapsed ? 'hidden' : 'ml-3'}
                    `}
                    style={{ fontFamily: 'Brother 1816' }}
                  >
                    {item?.text}
                  </span>
                </div>
                {item?.hasSubmenu && !isCollapsed && (
                  <img 
                    src="/images/img_stroke.svg" 
                    alt="Expand" 
                    className={`w-[5px] h-[10px] transition-transform duration-200 flex-shrink-0 ${isSubmenuOpen ? 'rotate-90' : ''}`}
                  />
                )}
              </div>

              {/* Submenu */}
              {item?.hasSubmenu && isSubmenuOpen && !isCollapsed && (
                <ul className="ml-8 mt-2 space-y-1" role="menu">
                  <li role="menuitem">
                    <button
                      className="flex items-center px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-5 rounded-md w-full text-left transition-colors duration-200"
                      type="button"
                      onClick={() => handleNavigate('/project-setup/setup-projects')}
                    >
                      Setup Projects
                    </button>
                  </li>
                  <li role="menuitem">
                    <button
                      className="flex items-center px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-5 rounded-md w-full text-left transition-colors duration-200"
                      type="button"
                      onClick={() => handleNavigate('/project-setup/templates')}
                    >
                      Project Templates
                    </button>
                  </li>
                  <li role="menuitem">
                    <button
                      className="flex items-center px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-5 rounded-md w-full text-left transition-colors duration-200"
                      type="button"
                      onClick={() => handleNavigate('/project-setup/configuration')}
                    >
                      Configuration
                    </button>
                  </li>
                </ul>
              )}
            </div>
          );
          })}
        </nav>
      </div>

      {/* Settings */}
      <div className="px-4 pb-4 flex-shrink-0">
        <div 
          className="flex items-center px-4 py-[14px] rounded-2xl cursor-pointer transition-all duration-200 hover:bg-white hover:bg-opacity-5"
          style={{ border: '1px solid #ffffff19' }}
          role="menuitem"
          title={isCollapsed ? 'Settings' : ''}
          onClick={() => handleNavigate('/settings')}
        >
          <img 
            src="/images/img_stroke_icons_1.svg" 
            alt="Settings" 
            className="w-5 h-5 flex-shrink-0"
          />
          <span 
            className={`
              text-sm font-normal leading-[21px] text-white transition-all duration-300
              ${isCollapsed ? 'hidden' : 'ml-3'}
            `}
            style={{ fontFamily: 'Brother 1816' }}
          >
            Settings
          </span>
        </div>
      </div>
    </>
  );

  const menuItems = useMemo(
    () => [
      { icon: '/images/img_stroke_icons.svg', text: 'Home', path: '/home' },
      { icon: '/images/img_stroke_icons_white_a700.svg', text: 'My Info', path: '/my-info' },
      { icon: '/images/img_component_2.svg', text: 'People', path: '/people-directory' },
      { icon: '/images/img_stroke_icons_white_a700_20x20.svg', text: 'Team Management', path: '/team-management' },
      { icon: '/images/img_stroke_icons_20x20.svg', text: 'Project Setup', path: '/project-setup', hasSubmenu: true },
      { icon: '/images/img_plus_2_white_a700.svg', text: 'Hiring', path: '/hiring' },
      { icon: '/images/img_plus_2_white_a700_20x20.svg', text: 'Report', path: '/report' },
    ],
    []
  );

  const SidebarContent = ({ showToggleButton = true }) => (
    <div className="flex flex-col h-full">
      {renderMenuItems(showToggleButton)}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex bg-[#3d3936] h-[calc(100vh-2rem)] sticky top-0 transition-all duration-300 flex-col rounded-3xl mx-1 mb-4 ${isCollapsed ? 'w-20' : 'w-[280px]'}`}>
        <SidebarContent showToggleButton={true} />
      </aside>

      {/* Mobile Drawer */}
      <Drawer isOpen={isMobileDrawerOpen} onClose={() => setIsMobileDrawerOpen(false)}>
        <SidebarContent showToggleButton={false} />
      </Drawer>
    </>
  );
};

export default Sidebar;