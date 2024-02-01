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
import { useNavigate } from "react-router-dom";

export const Leftsidebar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
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
              onClick={() => handleTabClick("banner")}
              sx={{
                borderLeft:
                  selectedTab === "banner"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <HomeIcon
                  sx={{
                    color: selectedTab === "banner" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/dashboards")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "banner" ? "blue" : "gray",
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
              onClick={() => handleTabClick("collabs")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "collabs"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <PersonIcon
                  sx={{
                    color: selectedTab === "collabs" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "collabs" ? "blue" : "gray",
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
              onClick={() => handleTabClick("accountbilling")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "accountbilling"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ListAltIcon
                  sx={{
                    color: selectedTab === "accountbilling" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText onClick={() => navigate("/account-billing")}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "accountbilling" ? "blue" : "gray",
                    fontSize: "21px",
                  }}
                >
                  AccountBilling
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="hrm"
              onClick={() => handleTabClick("hrm")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "hrm"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ListAltIcon
                  sx={{
                    color: selectedTab === "hrm" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "hrm" ? "blue" : "gray",
                    fontSize: "21px",
                  }}
                >
                  Hrm
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="hrm2nd"
              onClick={() => handleTabClick("hrm2nd")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "hrm2nd"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ListAltIcon
                  sx={{
                    color: selectedTab === "hrm2nd" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "hrm2nd" ? "blue" : "gray",
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
              onClick={() => handleTabClick("laravel")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "laravel"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ListAltIcon
                  sx={{
                    color: selectedTab === "laravel" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "laravel" ? "blue" : "gray",
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
              onClick={() => handleTabClick("fashionbox")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "fashionbox"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ListAltIcon
                  sx={{
                    color: selectedTab === "fashionbox" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "fashionbox" ? "blue" : "gray",
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
              onClick={() => handleTabClick("builttech")}
              sx={{
                mt: 1,
                borderLeft:
                  selectedTab === "builttech"
                    ? "8px solid blue"
                    : "6px solid transparent",
              }}
            >
              <ListItemIcon>
                <ListAltIcon
                  sx={{
                    color: selectedTab === "builttech" ? "blue" : "",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: selectedTab === "builttech" ? "blue" : "gray",
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
