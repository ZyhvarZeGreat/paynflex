import React from "react";

const Dashboard_Home = () => {
  return (
    <div className="container font-inter flex flex-col  mx-auto px-4">
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-4 h-1/2 mb-4">
        {/* Main Content Area - 3/4 width */}
        <div className="col-span-9 h-[286px] flex bg-white rounded-lg shadow ">
          {/* Revenue Stats - 1/4 width */}
          <div className="w-1/4 h-full   border-r justify-center border-r-gray-300 flex flex-col gap-4">
            <div className="bg-white border-b  flex items-start justify-center flex-col  border-b-gray-200  h-full ">
              <div className="flex items-center px-4 justify-between">
                <span className="text-gray-600">Revenue</span>
                <div className="flex items-center text-green-500">
                  <span className="text-sm">+12.5%</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5l7 7-1.41 1.41L13 8.83V19h-2V8.83l-4.59 4.58L5 12l7-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">₦1,234,567</p>
            </div>

            <div className="bg-white border-b   flex items-start justify-center flex-col  border-b-gray-200 h-full ">
              <div className="flex items-center px-4 justify-between">
                <span className="text-gray-600">Revenue</span>
                <div className="flex items-center text-green-500">
                  <span className="text-sm">+8.2%</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5l7 7-1.41 1.41L13 8.83V19h-2V8.83l-4.59 4.58L5 12l7-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">₦987,654</p>
            </div>

            <div className="bg-white border-b   flex items-start justify-center flex-col  border-b-gray-200 h-full ">
              <div className="flex items-center px-4 justify-between">
                <span className="text-gray-600">Users</span>
                <div className="flex items-center text-green-500">
                  <span className="text-sm">+15.3%</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5l7 7-1.41 1.41L13 8.83V19h-2V8.83l-4.59 4.58L5 12l7-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">₦567,890</p>
            </div>
          </div>
        </div>

        {/* Sidebar Area - 3 columns */}
        <div className="col-span-3 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <p>Secondary content goes here</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-4 h-1/2">
        {/* Three equal columns */}
        <div className="col-span-4 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-3">Section 1</h3>
          <p>Content for first section</p>
        </div>

        <div className="col-span-4 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-3">Section 2</h3>
          <p>Content for second section</p>
        </div>

        <div className="col-span-4 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-3">Section 3</h3>
          <p>Content for third section</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Home;
