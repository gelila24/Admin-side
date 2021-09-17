import React from 'react';


import './sidebar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', overflow: 'scroll initial', position: 'sticky', borderstyle: "outset", }}
    >
      <CDBSidebar textColor="lightBlue" backgroundColor="#000">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink className="sideitem" exact to="/home/:id" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Viewusers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">View Pharmacies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ManagePharmacy" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="clipboard-check">Manage Pharmacy</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/RoutineCheck" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-check">Routin CheckUp</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FeedbackMessage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment-alt">Feedback Messages</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
