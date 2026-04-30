import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-orange-100"></div>
        <div className="w-16 h-16 rounded-full border-4 border-t-orange-500 animate-spin absolute top-0 left-0"></div>
      </div>
      <p className="text-gray-400 font-medium animate-pulse">Loading...</p>
    </div>
    );
};

export default loading;