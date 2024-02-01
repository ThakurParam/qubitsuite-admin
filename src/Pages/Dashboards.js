import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Leftsidebar } from "../Components/Leftsidebar";
import { Topbar } from "../Components/Topbar";
import { Banner } from "../Components/Banner";
import { Collabs } from "../Components/Collabs";
import { AccountBilling } from "../Components/AccountBilling";
import { Hrm2 } from "../Components/Hrm2";
import { Laravel } from "../Components/Laravel";
import { FashionBox } from "../Components/FashionBox";
import { Builttech } from "../Components/Builttech";
import { Hrm } from "../Components/Hrm";

export const Dashboards = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  const renderContent = () => {
    switch (selectedTab) {
      case "banner":
        return <Banner />;
      case "collabs":
        return <Collabs />;
      case "accountbilling":
        return <AccountBilling />;
      case "hrm":
        return <Hrm />;
      case "hrm2nd":
        return <Hrm2 />;
      case "laravel":
        return <Laravel />;
      case "fashionbox":
        return <FashionBox />;
      case "builttech":
        return <Builttech />;
      default:
        return null;
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Leftsidebar />
        <Box
        // component="main"
        // sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
        >
          <Topbar />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {renderContent()}
              </Grid>
            </Grid>
          </Container>
        </Box> 
      </Box>
    </>
  );
};
