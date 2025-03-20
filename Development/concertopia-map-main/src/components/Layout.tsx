
import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-full flex flex-col">
      <NavBar />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default Layout;
