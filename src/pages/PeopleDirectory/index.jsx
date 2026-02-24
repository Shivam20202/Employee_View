import React, { useState, useMemo } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import SearchView from '../../components/ui/SearchView';
import Dropdown from '../../components/ui/Dropdown';

const PeopleDirectory = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const peopleData = [
    {
      id: 1,
      name: "Ethan Lee",
      position: "IT Specialist",
      avatar: "/images/img_ellipse_324.png",
      badge: "/images/img_badges.svg"
    },
    {
      id: 2,
      name: "Emily Baker",
      position: "Marketing Manager",
      avatar: "/images/img_ellipse_324_132x132.png",
      badge: "/images/img_badges_gray_800.svg"
    },
    {
      id: 3,
      name: "Micheal Shaun",
      position: "Sales Director",
      avatar: "/images/img_ellipse_324_1.png",
      badge: "/images/img_badges_gray_800_48x48.svg"
    },
    {
      id: 4,
      name: "Liam Carter",
      position: "Product Designer",
      avatar: "/images/img_ellipse_324_2.png",
      badge: "/images/img_badges_white_a700.svg"
    },
    {
      id: 5,
      name: "Grace Kim",
      position: "Customer Lead",
      avatar: "/images/img_ellipse_324_3.png",
      badge: "/images/img_badges_white_a700_48x48.svg"
    },
    {
      id: 6,
      name: "Noah Williams",
      position: "Finance Head",
      avatar: "/images/img_ellipse_324_4.png",
      badge: "/images/img_badges_48x48.svg"
    },
    {
      id: 7,
      name: "Isabella Rossi",
      position: "Operations Manager",
      avatar: "/images/img_ellipse_324_5.png",
      badge: "/images/img_badges_1.svg"
    },
    {
      id: 8,
      name: "Ava Thompson",
      position: "HR Executive",
      avatar: "/images/img_ellipse_324_6.png",
      badge: "/images/img_badges_2.svg"
    },
    {
      id: 9,
      name: "Sarah Johnson",
      position: "UI/UX Designer",
      avatar: "/images/img_ellipse_324_1.png",
      badge: "/images/img_badges_white_a700_48x48.svg"
    },

    {
      id: 10,
      name: "David Chen",
      position: "Backend Developer",
      avatar: "/images/img_ellipse_324_2.png",
      badge: "/images/img_badges_48x48.svg"
    },

    {
      id: 11,
      name: "Jessica Martinez",
      position: "Product Manager",
      avatar: "/images/img_ellipse_324_3.png",
      badge: "/images/img_badges_1.svg"
    },
    {
      id: 12,
      name: "Michael Wang",
      position: "DevOps Engineer",
      avatar: "/images/img_ellipse_324_4.png",
      badge: "/images/img_badges_gray_800.svg"
    },
    {
      id: 13,
      name: "Emma Anderson",
      position: "QA Engineer",
      avatar: "/images/img_ellipse_324_5.png",
      badge: "/images/img_badges_gray_800_48x48.svg"
    },

    {
      id: 14,
      name: "James Harris",
      position: "Frontend Developer",
      avatar: "/images/img_ellipse_324_132x132.png",
      badge: "/images/img_badges.svg"
    },
    {
      id: 15,
      name: "Olivia Davis",
      position: "Business Analyst",
      avatar: "/images/img_ellipse_324.png",
      badge: "/images/img_badges_white_a700.svg"
    },
    {
      id: 16,
      name: "Christopher Brown",
      position: "Security Specialist",
      avatar: "/images/img_ellipse_324_1.png",
      badge: "/images/img_badges_2.svg"
    }
  ];

  // Filter people based on search query
  const filteredPeople = useMemo(() => {
    return peopleData.filter(person =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Paginate the filtered people
  const paginatedPeople = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredPeople.slice(startIndex, endIndex);
  }, [filteredPeople, currentPage, rowsPerPage]);

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (option) => {
    setRowsPerPage(parseInt(option.value) || 10);
    setCurrentPage(1);
  };

  return (
    <>
      <main className="w-full bg-[#f7f7f7] flex justify-start items-start flex-1 min-h-screen">
        <div className="w-full flex gap-3 md:gap-4 justify-start items-start p-2 md:p-4">
          {/* Sidebar */}
          <Sidebar 
            isMobileDrawerOpen={isMobileDrawerOpen} 
            setIsMobileDrawerOpen={setIsMobileDrawerOpen} 
          />

          {/* Main Content */}
          <div className="flex flex-col gap-4 justify-start items-center flex-1 w-full min-h-screen">
            {/* Mobile Menu Button and Header */}
            <div className="flex items-center gap-4 w-full md:hidden">
              <button
                onClick={() => setIsMobileDrawerOpen(true)}
                className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 bg-white"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6 text-[#3d3936]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Header */}
            <Header title="People" />

            {/* Content Area */}
            <div className="bg-white rounded-[20px] w-full flex flex-col gap-6 justify-start items-center p-0 flex-1 min-h-[calc(100vh-16rem)]">
              {/* Search and Filters Section */}
              <section className="w-full px-4 md:px-6 pt-6 pb-0">
                <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:gap-4 md:justify-between md:gap-4 lg:justify-between">
                  {/* Search */}
                  <div className="w-full sm:flex-1 sm:max-w-2xl md:flex-1 md:max-w-xl">
                    <SearchView 
                      layout_width="100%"
                      layout_gap="16px"
                      padding="12px"
                      position="relative"
                      variant="outlined"
                      size="medium"
                      value={searchQuery}
                      onChange={handleSearch}
                      onFocus={() => {}}
                      onBlur={() => {}}
                      className="w-full"
                    />
                  </div>

                  {/* Action Buttons - Horizontal on all screens */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto md:w-auto">
                    {/* Left Buttons Group - Sort & Filter */}
                    <div className="flex items-center gap-2">
                      <button 
                        className="border border-[#e5e5e4] rounded-[14px] p-2 sm:p-2 md:p-3 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 group shrink-0 md:min-w-12 md:min-h-12 flex items-center justify-center"
                        aria-label="Sort"
                        title="Sort"
                      >
                        <img 
                          src="/images/img_action_button.svg" 
                          alt="Sort" 
                          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                        />
                      </button>
                      
                      <button 
                        className="border border-[#e5e5e4] rounded-[14px] p-2 sm:p-2 md:p-3 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 group shrink-0 md:min-w-12 md:min-h-12 flex items-center justify-center"
                        aria-label="Filter"
                        title="Filter"
                      >
                        <img 
                          src="/images/img_stroke_icons_gray_800_48x48.svg" 
                          alt="Filter" 
                          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                        />
                      </button>
                    </div>

                    {/* Right Buttons Group - Add and View Options */}
                    <div className="flex items-center gap-2">
                      {/* Add Button */}
                      <button 
                        className="bg-[#3d3936] rounded-[14px] p-2 sm:p-2 md:p-3 hover:bg-gray-700 active:bg-gray-800 transition-colors duration-200 group shrink-0 md:min-w-12 md:min-h-12 flex items-center justify-center"
                        aria-label="Add employee"
                        title="Add employee"
                      >
                        <img 
                          src="/images/img_action_button_white_a700.svg" 
                          alt="Add" 
                          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                        />
                      </button>

                      {/* More Options - Grid/List View & Export */}
                      <div className="flex items-center border border-[#e5e5e4] rounded-[14px] overflow-hidden shrink-0">
                        <button 
                          className="bg-[#3d3936] p-2 sm:p-2 md:p-3 hover:bg-gray-700 active:bg-gray-800 transition-colors duration-200 group md:min-w-12 md:min-h-12 flex items-center justify-center"
                          aria-label="Grid view"
                          title="Grid view"
                        >
                          <img 
                            src="/images/img_component_9.svg" 
                            alt="Grid" 
                            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                          />
                        </button>
                        
                        <button 
                          className="p-2 sm:p-2 md:p-3 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 group border-l border-[#e5e5e4] md:min-w-12 md:min-h-12 flex items-center justify-center"
                          aria-label="Export"
                          title="Export"
                        >
                          <img 
                            src="/images/img_plus_2_gray_800_24x24.svg" 
                            alt="Export" 
                            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                          />
                        </button>
                        
                        <button 
                          className="p-2 sm:p-2 md:p-3 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 group border-l border-[#e5e5e4] md:min-w-12 md:min-h-12 flex items-center justify-center"
                          aria-label="More options"
                          title="More options"
                        >
                          <img 
                            src="/images/img_stroke_icons_gray_800_24x24.svg" 
                            alt="More" 
                            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* People Grid */}
              <section className="w-full px-4 md:px-6 pb-6">
                {filteredPeople.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full">
                    {paginatedPeople?.map((person) => (
                      <div
                        key={person?.id}
                        className="border border-[#e5e5e4] rounded-[24px] p-6 flex flex-col gap-[18px] justify-start items-center hover:shadow-md transition-shadow duration-200"
                      >
                        {/* Avatar with Badge */}
                        <div className="relative flex justify-center items-center w-[132px] h-[132px]">
                          <img
                            src={person?.avatar}
                            alt={`${person?.name} profile`}
                            className="w-[132px] h-[132px] rounded-full object-cover"
                          />
                          <img
                            src={person?.badge}
                            alt="Status badge"
                            className="absolute bottom-0 right-0 w-12 h-12"
                          />
                        </div>

                        {/* Person Info */}
                        <div className="flex flex-col justify-start items-center w-full">
                          <h3 
                            className="text-base font-medium leading-[25px] text-[#3d3936] text-center mb-2"
                            style={{ fontFamily: 'Brother 1816' }}
                          >
                            {person?.name}
                          </h3>
                          
                          <div className="flex flex-col gap-[6px] justify-start items-center w-full">
                            <p 
                              className="text-sm font-normal leading-[21px] text-[#947550] text-center"
                              style={{ fontFamily: 'Brother 1816' }}
                            >
                              {person?.position}
                            </p>
                            
                            <img
                              src="/images/img_indicator.svg"
                              alt="Status indicator"
                              className="w-12 h-[10px]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full py-12 text-center">
                    <p 
                      className="text-lg font-normal leading-[28px] text-[#3d3936]"
                      style={{ fontFamily: 'Brother 1816' }}
                    >
                      No people found matching "{searchQuery}"
                    </p>
                  </div>
                )}
              </section>

              {/* Pagination */}
              {filteredPeople.length > 0 && (
                <section className="w-full px-4 md:px-6 pb-6 sticky bottom-0 bg-white z-20 border-t border-[#e5e5e4] mt-auto">
                  <div className="bg-white p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center gap-4 w-full border-t border-[#e5e5e4]">
                    {/* Left Section - Rows per page selector and Pagination */}
                    <div className="flex justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                      <div className="flex justify-start items-center gap-2">
                        <span 
                          className="text-xs md:text-sm font-medium leading-[22px] text-[#3d3936] whitespace-nowrap"
                          style={{ fontFamily: 'Brother 1816' }}
                        >
                          Rows per page:
                        </span>
                        <div className="w-[70px] md:w-[80px]">
                          <Dropdown 
                            layout_width="100%" 
                            layout_gap="8px"
                            padding="6px 8px"
                            position="relative"
                            variant="outlined"
                            size="medium"
                            value={rowsPerPage.toString()}
                            onChange={handleRowsPerPageChange}
                            options={[
                              { value: '12', label: '12' },
                              { value: '25', label: '25' },
                              { value: '50', label: '50' },
                              { value: '100', label: '100' }
                            ]}
                            className=""
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-start items-center gap-2">
                        <span 
                          className="text-xs md:text-sm font-normal leading-[22px] text-[#3d3936] whitespace-nowrap"
                          style={{ fontFamily: 'Brother 1816' }}
                        >
                          {Math.max(0, (currentPage - 1) * rowsPerPage + 1)}-{Math.min(currentPage * rowsPerPage, filteredPeople.length)} of {filteredPeople.length}
                        </span>
                        
                        <div className="flex justify-start items-center gap-2">
                          <button 
                            className="p-2 md:p-2.5 hover:bg-gray-100 active:bg-gray-200 rounded-md transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white group"
                            aria-label="Previous page"
                            disabled={currentPage === 1}
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                            type="button"
                          >
                            <img 
                              src="/images/img_stroke_icons_16x16.svg" 
                              alt="Previous" 
                              className="w-4 h-4 group-not-disabled:group-hover:scale-125 transition-transform"
                            />
                          </button>
                          
                          <button 
                            className="p-2 md:p-2.5 hover:bg-gray-100 active:bg-gray-200 rounded-md transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white group"
                            aria-label="Next page"
                            disabled={currentPage * rowsPerPage >= filteredPeople.length}
                            onClick={() => currentPage * rowsPerPage < filteredPeople.length && setCurrentPage(currentPage + 1)}
                            type="button"
                          >
                            <img 
                              src="/images/img_arrow_right.svg" 
                              alt="Next" 
                              className="w-4 h-4 group-not-disabled:group-hover:scale-125 transition-transform"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PeopleDirectory;