import {
  Box,
  Button,
  Grid,
  ListSubheader,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Layout } from "../Pages/Layout";
import axios from "axios";

export const Laravel = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [image, setimage] = useState("");
  const handleLaravelUpdate = async () => {
    if (!heading || !subHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-laravel/65c3298ea4eeaf0b3464ac14";
      let payload = {
        laravelHeading: heading,
        laravelSubheading: subHeading,
        laravelUrl: image,
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
        "https://qbitsuit-trainee.onrender.com/get-laravel/"
      );
      setData(response.data);
      setHeading(response.data?.laravelHeading || "");
      setSubHeading(response.data?.laravelSubheading || "");
      setimage(response.data?.laravelUrl);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
    // setHeading(response.data?.laravelHeading || "");
  }, []);
  console.log(data);
  return (
    <>
      <Layout>
        <Box sx={{ p: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
              Laravel
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Laravel Heading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Laravel Screen Image
                  </Typography>
                  <input
                    type="file"
                    style={{ width: "100%", height: "30px", marginTop: "15px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Laravel Subheading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={subHeading}
                      onChange={(e) => setSubHeading(e.target.value)}
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
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
              onClick={handleLaravelUpdate}
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
