import React from "react";
import { Topbar } from "../Components/Topbar";
import { Box, Container, Grid } from "@mui/material";
import { Leftsidebar } from "../Components/Leftsidebar";
import { Collabs } from "../Components/Collabs";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Left Sidebar */}
        <Leftsidebar />

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {/* Topbar */}
          <Topbar />

          {/* Main Content */}
          <Box
            sx={{ flexGrow: 1, p: 3, pt: 12, bgcolor: "background.default" }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
