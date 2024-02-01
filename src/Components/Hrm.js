import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const Hrm = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
            Hrm 1{" "}
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                >
                  Hrm Heading
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
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                >
                  Hrm Image
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
                  Hrm Subheading
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
          <Typography sx={{ fontSize: 25, fontWeight: 600, color: "purple" }}>
            Hrm Accord
          </Typography>
        </Box>
        <Box sx={{ mt: 7 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                >
                  Accordian 1 Heading{" "}
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
                  Accordian 1 Paragraph
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
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                >
                  Accordian 2 Heading{" "}
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
                  Accordian 2 Paragraph
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
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                >
                  Accordian 3 Heading{" "}
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
                  Accordian 3 Paragraph
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
      </Box>
    </>
  );
};
