import React from 'react';
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
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#00AADB" backgroundColor="#000">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/RoutineCheck" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-check">Routin CheckUp</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment-alt">Feedback Messages</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ManageProfile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FeedbackPh" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="comment-alt">Send Feedback </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Logout" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="sign-out-alt">Logout </CDBSidebarMenuItem>
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
