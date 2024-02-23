import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import siteimage from "../Images/quibtsuite.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useLocation, useNavigate } from "react-router-dom";

export const Leftsidebar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);
  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);
  // };
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Drawer
          variant="permanent"
          sx={{
            zIndex: 99,
            width: 260,
            display: { md: "block", xs: "none" },
            // flexShrink: 0,
            fontSize: "20px",

            "& .MuiDrawer-paper": {
              pt: 2,
              // p: 1,
              width: 260,
              boxSizing: "border-box",
            },
          }}
        >
          <div>
            <img
              style={{
                width: "auto",
                height: "auto",
                // display: "none",
                margin: "25px",
              }}
              src={siteimage}
            ></img>
          </div>
          <List sx={{ mt: 2 }}>
            <ListItem
              button
              key="banner"
              // onClick={() => handleTabClick("banner")}
              sx={{
                borderLeft:
                  pathname === "/banner"
                    ? "8px solid #EF5E1D"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/banner" ? "#EF5E1D" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/banner")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/banner" ? "#EF5E1D" : "gray",
                    fontSize: "21px",
                  }}
                >
                  Banner
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="collabs"
              // onClick={() => handleTabClick("collabs")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/collabs"
                    ? "8px solid #3E201E"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/collabs" ? "#3E201E" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/collabs")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/collabs" ? "#3E201E" : "gray",
                    fontSize: "21px",
                  }}
                >
                  Collabs
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="accountbilling"
              // onClick={() => handleTabClick("accountbilling")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/account-billing"
                    ? "8px solid #387BA6"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/account-billing" ? "#387BA6" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/account-billing")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/account-billing" ? "#387BA6" : "gray",
                    fontSize: "21px",
                  }}
                >
                  AccountBilling
                </Typography>
              </ListItemText>
            </ListItem>
            {/* <ListItem
              button
              key="hrm"
              // onClick={() => handleTabClick("hrm")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/hrm"
                    ? "8px solid #DF422F"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/hrm" ? "#DF422F" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/hrm")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/hrm" ? "#DF422F" : "gray",
                    fontSize: "21px",
                  }}
                >
                  Hrm
                </Typography>
              </ListItemText>
            </ListItem> */}
            <ListItem
              button
              key="hrm2nd"
              // onClick={() => handleTabClick("hrm2nd")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/hrm-2"
                    ? "8px solid #EA551B"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/hrm-2" ? "#EA551B" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/hrm-2")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/hrm-2" ? "#EA551B" : "gray",
                    fontSize: "21px",
                  }}
                >
                  Hrm 2nd
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="laravel"
              // onClick={() => handleTabClick("laravel")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/laravel"
                    ? "8px solid #EA551B"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/laravel" ? "#EA551B" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/laravel")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/laravel" ? "#EA551B" : "gray",
                    fontSize: "21px",
                  }}
                >
                  Laravel
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="fashionbox"
              // onClick={() => handleTabClick("fashionbox")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/fashion-box"
                    ? "8px solid #EA551B"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/fashion-box" ? "#EA551B" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/fashion-box")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/fashion-box" ? "#EA551B" : "gray",
                    fontSize: "21px",
                  }}
                >
                  FashionBox
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="builttech"
              // onClick={() => handleTabClick("builttech")}
              sx={{
                mt: 1,
                borderLeft:
                  pathname === "/built-tech"
                    ? "8px solid #EA551B"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ArrowRightIcon
                  sx={{
                    color: pathname === "/built-tech" ? "#EA551B" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/built-tech")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: pathname === "/built-tech" ? "#EA551B" : "gray",
                    fontSize: "21px",
                  }}
                >
                  BuiltTech
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};
