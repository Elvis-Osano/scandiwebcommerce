import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <div className="bottom-1 border-t-2 border-slate-100 bg-white pt-3  w-full">
        <p className="text-center">Scandiweb Test Assignment</p>
      </div>
    </React.Fragment>
  );
};

export default Layout;
