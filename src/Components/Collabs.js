import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";

export const Collabs = () => {
  useEffect(() => {
    console.log("Collabs component mounted");
    // Add additional logs as needed
  }, []);
  return (
    <>
      <Box sx={{ mt: 2, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
                Collab Heading
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
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
                Collab Subheading
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
        <Box sx={{ pl: 2 }}>
          <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
            Collab Paragraph
          </Typography>
          <div style={{ marginTop: "15px" }}>
            <TextField label="Heading" variant="outlined" fullWidth multiline />
          </div>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          Collab Checkpoints
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
                Checkpoint Heading
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
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
                Checkpoint Paragraph
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

        <Box sx={{ pl: 2, p: 2 }}>
          <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
            Checkpoint Image
          </Typography>
          <input
            type="file"
            style={{ width: "100%", height: "30px", marginTop: "15px" }}
          />
        </Box>
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
          <Typography sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}>
            Update
          </Typography>
        </Button>
      </Box>
    </>
  );
};
