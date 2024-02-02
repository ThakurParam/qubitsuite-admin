import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const MobileDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const drawerItems = [
    { text: "Banner", icon: <ArrowRightIcon />, path: "/banner" },
    { text: "Collab", icon: <ArrowRightIcon />, path: "/collabs" },
    {
      text: "Account-Billing",
      icon: <ArrowRightIcon />,
      path: "/account-billing",
    },
    { text: "Hrm", icon: <ArrowRightIcon />, path: "/hrm" },
    { text: "Hrm-2", icon: <ArrowRightIcon />, path: "/hrm-2" },
    { text: "Laravel", icon: <ArrowRightIcon />, path: "/laravel" },
    { text: "FashionBox ", icon: <ArrowRightIcon />, path: "/fashion-box" },
    { text: "BuiltTech", icon: <ArrowRightIcon />, path: "/built-tech" },
  ];
  return (
    <>
      <IconButton onClick={toggleDrawer} sx={{ display: { md: "none" } }}>
        <MenuIcon sx={{ color: "white", fontSize: 40 }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ display: { md: "none", lg: "none" } }}
      >
        <List>
          {drawerItems.map((item, index) => (
            <ListItem button key={item.text} component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
