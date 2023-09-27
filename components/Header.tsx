// components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Udemy Clone</h1>
        </div>
        <div>
          {/* Add navigation links or user authentication here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
