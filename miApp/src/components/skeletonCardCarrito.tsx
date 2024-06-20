// SkeletonCardCarrito.tsx
import React from 'react';

const SkeletonCardCarrito: React.FC = () => {
  return (
    <tr>
      <td className="py-6 px-4">
        <div className="flex items-center gap-6 w-max">
          <div className="h-36 w-36 bg-gray-200 animate-pulse"></div>
          <div>
            <p className="h-6 bg-gray-200 animate-pulse w-32 mb-4"></p>
            <p className="h-6 bg-gray-200 animate-pulse w-20"></p>
          </div>
        </div>
      </td>
      <td className="py-6 px-4">
        <div className="flex divide-x border w-max">
          <div className="bg-gray-200 animate-pulse w-10 h-10"></div>
          <div className="bg-gray-200 animate-pulse w-10 h-10"></div>
          <div className="bg-gray-200 animate-pulse w-10 h-10"></div>
        </div>
      </td>
      <td className="py-6 px-4">
        <div className="h-6 bg-gray-200 animate-pulse w-16"></div>
      </td>
      <td className="py-6 px-4">
        <div className="h-6 bg-gray-200 animate-pulse w-16"></div>
      </td>
    </tr>
  );
};

export default SkeletonCardCarrito;
