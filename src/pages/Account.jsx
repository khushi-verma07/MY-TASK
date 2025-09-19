import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-6">
     
      <div className="w-full max-w-sm bg-white  shadow-sm overflow-hidden border-b border-dashed">
        {/* Header */}
        <div className="px-4 py-3 border-b ">
          <h2 className="text-sm font-medium text-gray-800">Account Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="p-4 bg-gray-100">
          <div className="flex items-start space-x-3">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              {/* Camera Badge */}
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                <CameraIcon className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* User Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Marry Doe</h3>
              <p className="text-xs text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-xs text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
