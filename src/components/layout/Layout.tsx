import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showHeader = false }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && (
        <div>
          {/* We can keep the old header for other pages if needed */}
        </div>
      )}
      <main>{children}</main>
    </div>
  );
};
