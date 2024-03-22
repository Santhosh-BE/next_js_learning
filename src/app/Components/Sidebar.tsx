import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-60 px-4 py-6 overflow-y-hidden bg-white">
      <ul className="space-y-8 font-medium mt-8 pb-12 overflow-y-auto h-full">
        Sidebar
        <li key={"key"}>hai</li>
        <li key={"key"}>hai</li>
        <li key={"key"}>hai</li>
      </ul>
    </div>
  );
};

export default Sidebar;
