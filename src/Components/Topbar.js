import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Searchbar } from "../Assets/Searchbar";
import { Layout } from "../Pages/Layout";
import { MobileDrawer } from "../Assets/MobileDrawer";
export const Topbar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{ zIndex: 9, height: 90, bgcolor: "#2B3131" }}
        >
          <Toolbar sx={{ bgcolor: "white", height: 90, bgcolor: "#2B3131" }}>
            <MobileDrawer />
            <div
              style={{ flexGrow: 1, textAlign: "end", marginRight: "1%" }}
            ></div>
            <div style={{ textAlign: "end", marginRight: "50px" }}>
              <Searchbar />
            </div>
            {/* <NotificationsPanel /> */}
            <div>
              <Avatar
                alt="User Avatar"
                src="/path/to/avatar.jpg"
                sx={{ cursor: "pointer", height: "60px", width: "60px" }}
                size={64}
                onClick={() => handleTabClick("avatar")}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
