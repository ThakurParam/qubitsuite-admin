import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Searchbar } from "../Assets/Searchbar";
export const Topbar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ zIndex: 9, height: 90 }}>
          <Toolbar sx={{ bgcolor: "white", height: 90 }}>
            {/* <mobileDrawer />
            <IconButton
              color="inherit"
              onClick={handleMobileDrawerOpen}
              sx={{
                mr: 2,
                display: {
                  md: "none",
                  xs: "block",
                  textAlign: "center",
                  color: "black ",
                },
              }}
            >
              <MenuIcon />
            </IconButton> */}
            <div
              style={{ flexGrow: 1, textAlign: "end", marginRight: "1%" }}
            ></div>
            <div style={{ textAlign: "end" }}>
              <Searchbar />
            </div>
            {/* <NotificationsPanel /> */}
            <div>
              <Avatar
                alt="User Avatar"
                src="/path/to/avatar.jpg"
                sx={{ cursor: "pointer", height: "70px", width: "70px" }}
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
