import React from 'react';

const BookIcon = ({ size = 4, color = 'text-gray-700', className = '' }) => {
  return (
    <svg
      className={`w-${size} h-${size} ${color} ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 14m7 0v4"
      />
    </svg>
  );
};

export default BookIcon;
