import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Layout } from "../Pages/Layout";
import axios from "axios";

export const Builttech = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [cardheading, setCardheading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {
    if (!heading || !subHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-builtTech/65c32a52a4eeaf0b3464ac20";
      let payload = {
        builtHeading: heading,
        builtSubheading: subHeading,
      };
      try {
        const response = await axios.patch(endpoint, payload);
        console.log("Data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const handleCasesUpdate = async () => {
    if (!cardheading || !paragraph || !image) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-builtTech-Cards/65c60c25151b46ec3da01dbd";
      let payload = {
        cardheading: cardheading,
        cardParagraph: paragraph,
        cardUrl: image,
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
        "https://qbitsuit-trainee.onrender.com/get-builtech/"
      );
      setData(response.data);
      setHeading(response.data?.builtHeading);
      setSubHeading(response.data?.builtSubheading);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [cardData, setcardData] = useState([]);
  const carddata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-builtTechCards/"
      );
      setcardData(response.data);
      setCardheading(response.data?.cardheading);
      setParagraph(response.data?.cardParagraph);
      setImage(response.data?.cardUrl);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
    carddata();
  }, []);
  console.log(data);
  return (
    <>
      <Layout>
        <Box sx={{ p: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
              Built Tech
            </Typography>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Heading
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
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Subheading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={subHeading}
                      onChange={(e) => setSubHeading(e.target.value)}
                      label="Sub heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "end", p: 2 }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "green",
                  color: "white",
                  p: 1,
                  pl: 3,
                  pr: 3,
                }}
                onClick={handleUpdate}
              >
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
                >
                  Update
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
              Cards
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: "black" }}>
              Card 1
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Logo
                  </Typography>
                  <input
                    type="file"
                    style={{ width: "100%", height: "30px", marginTop: "15px" }}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Paragraph
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={paragraph}
                      onChange={(e) => setParagraph(e.target.value)}
                      label="Para here .."
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Heading
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
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "end", p: 2 }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "green",
                  color: "white",
                  p: 1,
                  pl: 3,
                  pr: 3,
                }}
                onClick={handleCasesUpdate}
              >
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
                >
                  Update
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: "black" }}>
              Card 2
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Logo
                  </Typography>
                  <input
                    type="file"
                    style={{ width: "100%", height: "30px", marginTop: "15px" }}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Paragraph
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={paragraph}
                      onChange={(e) => setParagraph(e.target.value)}
                      label="Para here .."
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Heading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={cardheading}
                      onChange={(e) => setCardheading(e.target.value)}
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "end", p: 2 }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "green",
                  color: "white",
                  p: 1,
                  pl: 3,
                  pr: 3,
                }}
                onClick={handleCasesUpdate}
              >
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
                >
                  Update
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: "black" }}>
              Card 3
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Logo
                  </Typography>
                  <input
                    type="file"
                    style={{ width: "100%", height: "30px", marginTop: "15px" }}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Paragraph
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={paragraph}
                      onChange={(e) => setParagraph(e.target.value)}
                      label="Para here .."
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Heading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={cardheading}
                      onChange={(e) => setCardheading(e.target.value)}
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "end", p: 2 }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "green",
                  color: "white",
                  p: 1,
                  pl: 3,
                  pr: 3,
                }}
                onClick={handleCasesUpdate}
              >
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
                >
                  Update
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
