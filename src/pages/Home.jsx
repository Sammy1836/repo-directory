import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeOuter">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Home;