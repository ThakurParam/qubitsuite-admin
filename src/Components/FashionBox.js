import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const FashionBox = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
            Fashion Box
          </Typography>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                >
                  Fashion Box Heading
                </Typography>
                <div style={{ marginTop: "15px" }}>
                  <TextField
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
                  Fashion Box Subheading
                </Typography>
                <div style={{ marginTop: "15px" }}>
                  <TextField
                    label="Heading"
                    variant="outlined"
                    fullWidth
                    multiline
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
                >
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
                  >
                    Update
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
            Cases
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
            {" "}
            Case 1
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Case Image
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
                    Case Subheading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
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
                    Case Heading{" "}
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
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
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
            {" "}
            Case 2
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Case Image
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
                    Case Subheading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
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
                    Case Heading{" "}
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
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
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
            {" "}
            Case 3
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Case Image
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
                    Case Subheading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
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
                    Case Heading{" "}
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
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
      </Box>
    </>
  );
};
