import React, { useState } from 'react';
import './Sidebar.css'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to open the sidebar
  const openNav = () => {
    setIsSidebarOpen(true);
  }

  // Function to close the sidebar
  const closeNav = () => {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <div className={`${isSidebarOpen ? 'sidepanel' : 'sidepanelHidden'}`}>
        <a href="#" className={`${isSidebarOpen ? 'closebtn' : 'closebtnHidden'}`} onClick={closeNav}>&times;</a>
      </div>

      <button className={'openbtn'} onClick={openNav}>&#9776;</button>
    </>
  )
}