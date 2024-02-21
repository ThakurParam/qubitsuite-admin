import { Height } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Layout } from "../Pages/Layout";
import axios from "axios";

export const Banner = () => {
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");

  const handleBannerUpdate = async () => {
    if (!heading || !paragraph) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-trainee.onrender.com/update-banner/65c601a444fed81f0b1eb85a";
      let payload = {
        bannerHeading: heading,
        bannerParagraph: paragraph,
        imageUrls: image,
      };
      try {
        const response = await axios.patch(endpoint, payload);
        console.log("Data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-banner/"
      );
      setData(response.data);
      setHeading(response.data?.bannerHeading || "");
      setParagraph(response.data?.bannerParagraph || "");
      setImage(response.data?.imageUrls);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);
  console.log(data?.bannerHeading);
  console.log(data?.bannerparagraph);
  return (
    <>
      <Layout>
        {" "}
        <Box sx={{ mt: 2 }}>
          <Box sx={{ textAlign: "center", fontWeight: 600 }}>
            <Typography sx={{ fontSize: 30, color: "purple", fontWeight: 600 }}>
              Banner{" "}
            </Typography>
          </Box>
          <Box sx={{ pl: 2 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: "gray" }}>
              Logo
            </Typography>
            <Typography
              sx={{ fontSize: 10, fontWeight: 600, opacity: 0.3, mt: -1 }}
            >
              Click here to change the logo of your Websites
            </Typography>
            <input
              type="file"
              style={{ width: "100%", height: "30px", marginTop: "15px" }}
            />
          </Box>
          {/* <Box>
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>Banner</Typography>
          <Typography></Typography>
        </Box> */}
          <Box sx={{ pl: 2, mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 20, fontWeight: 600, color: "gray" }}
                  >
                    Banner Heading
                  </Typography>

                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                      label="Heading"
                      variant="outlined"
                      placeholder=" type your banner heading here "
                      fullWidth
                      multiline
                      // You can add more props or handle events as needed
                    />
                  </div>
                </Box>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ pl: 2 }}>
                  <Typography
                    sx={{ fontSize: 20, fontWeight: 600, color: "gray" }}
                  >
                    Banner Image
                  </Typography>
                  <input
                    type="file"
                    style={{ width: "100%", height: "30px", marginTop: "15px" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 4, pl: 2 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 600, color: "gray" }}>
              Banner Paragraph
            </Typography>
            <div style={{ marginTop: "15px" }}>
              <TextField
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                label="Paragraph"
                variant="outlined"
                placeholder=" type you para here "
                fullWidth
                multiline
                // You can add more props or handle events as needed
              />
            </div>
          </Box>
          <Box sx={{ mt: 3, textAlign: "end" }}>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "green",
                color: "white",
                p: 1,
                pl: 3,
                pr: 3,
              }}
              onClick={handleBannerUpdate}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
              >
                Update
              </Typography>
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
