import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Layout } from "../Pages/Layout";

export const AccountBilling = () => {
  return (
    <>
      <Layout>
        <Box sx={{ pl: 2, p: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 25, fontWeight: 600, color: "purple" }}>
              Module{" "}
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                  >
                    Module Heading
                  </Typography>
                  <div>
                    <TextField
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                  >
                    Module Subheading
                  </Typography>
                  <div>
                    <TextField
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                      style={{ marginTop: "10px" }}
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
          <Box>
            <Box sx={{ color: "purple", textAlign: "center" }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
                Account
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Account Heading
                    </Typography>
                    <div>
                      <TextField
                        label="Heading"
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Account Subheading
                    </Typography>
                    <div>
                      <TextField
                        label="Heading"
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
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
              <Box>
                <Typography
                  sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                >
                  Account Image
                </Typography>
                <input
                  type="file"
                  style={{ width: "100%", height: "30px", marginTop: "15px" }}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ textAlign: "center", color: "purple", mt: 5 }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
                Accordian
              </Typography>
            </Box>
            <Box sx={{ mt: 8 }}>
              <Box sx={{}}>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  Accord 1
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Heading
                    </Typography>
                    <div>
                      <TextField
                        label="place your text here ..."
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Paragraph
                    </Typography>
                    <div>
                      <TextField
                        label="para here ..."
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
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
            <Box sx={{ mt: 8 }}>
              <Box sx={{}}>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  Accord 2
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Heading
                    </Typography>
                    <div>
                      <TextField
                        label="place your text here ..."
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Paragraph
                    </Typography>
                    <div>
                      <TextField
                        label="para here ..."
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
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
            <Box sx={{ mt: 8 }}>
              <Box sx={{}}>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  Accord 3
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Heading
                    </Typography>
                    <div>
                      <TextField
                        label="place your text here ..."
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}
                    >
                      Paragraph
                    </Typography>
                    <div>
                      <TextField
                        label="para here ..."
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
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
          </Box>
        </Box>
      </Layout>
    </>
  );
};
