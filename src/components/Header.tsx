import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">Kanban Board</h1>
        {/* Potentially add user specific actions or theme toggles here */}
      </div>
    </header>
  );
};

export default Header;
