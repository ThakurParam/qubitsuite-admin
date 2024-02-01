import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const Builttech = () => {
  return (
    <>
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
    </>
  );
};
