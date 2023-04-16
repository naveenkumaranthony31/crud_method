import SideBar from './sidebar';
import TopBar from './topbar';
import { Routes, Route, Outlet } from "react-router-dom";

function Portal(){
    return(
        <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar></TopBar>
          <Outlet />
          </div>
      </div>
    </div>
    )
}
export default Portal;   