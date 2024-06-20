import React from 'react';

const SkeletonCardCoches: React.FC = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded-md">
      <div className="block relative h-48 rounded overflow-hidden bg-gray-200 animate-pulse"></div>
      <div className="mt-4">
        <div className="h-6 bg-gray-200 animate-pulse w-32 mb-2"></div>
        <div className="h-6 bg-gray-200 animate-pulse w-20 mb-4"></div>
        <div className="h-6 bg-gray-200 animate-pulse w-16"></div>
      </div>
    </div>
  );
};

export default SkeletonCardCoches;
