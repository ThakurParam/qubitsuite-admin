import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Paper,
  Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Layout } from "../Pages/Layout";
import DoneIcon from "@mui/icons-material/Done";

export const FashionBox = () => {
  const [checkpoints, setCheckpoints] = useState([]);
  const [currentCheckpoint, setCurrentCheckpoint] = useState({
    heading: "",
    paragraph: "",
    image: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (field, value) => {
    setCurrentCheckpoint((prevCheckpoint) => ({
      ...prevCheckpoint,
      [field]: value,
    }));
  };

  const handleAddCheckpoint = () => {
    if (currentCheckpoint.heading.trim() !== "") {
      if (editIndex !== null) {
        setCheckpoints((prevCheckpoints) =>
          prevCheckpoints.map((checkpoint, index) =>
            index === editIndex ? currentCheckpoint : checkpoint
          )
        );
        setEditIndex(null);
      } else {
        setCheckpoints((prevCheckpoints) => [
          ...prevCheckpoints,
          currentCheckpoint,
        ]);
      }
      setCurrentCheckpoint({ heading: "", paragraph: "", image: "" });
    }
  };

  const handleEditCheckpoint = (index) => {
    setEditIndex(index);
    setCurrentCheckpoint(checkpoints[index]);
  };

  const handleDeleteCheckpoint = (index) => {
    setCheckpoints((prevCheckpoints) =>
      prevCheckpoints.filter((_, i) => i !== index)
    );
    setEditIndex(null);
  };
  return (
    <>
      <Layout>
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
          <Box sx={{ p: 2 }}>
            <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
              Collab Checkpoints
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ pl: 2 }}>
                  <Typography
                    sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}
                  >
                    Checkpoint Heading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      label="Heading"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={currentCheckpoint.heading}
                      onChange={(e) =>
                        handleInputChange("heading", e.target.value)
                      }
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ pl: 2 }}>
                  <Typography
                    sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}
                  >
                    Checkpoint Paragraph
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      label="Paragraph"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={currentCheckpoint.paragraph}
                      onChange={(e) =>
                        handleInputChange("paragraph", e.target.value)
                      }
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
                onChange={(e) =>
                  handleInputChange(
                    "image",
                    URL.createObjectURL(e.target.files[0])
                  )
                }
                style={{ width: "100%", height: "30px", marginTop: "15px" }}
              />
            </Box>
            <Box sx={{ textAlign: "start", mt: 5 }}>
              <Button
                onClick={handleAddCheckpoint}
                variant="contained"
                // color="white"
                sx={{ bgcolor: "#E7591E", borderRadius: "20px" }}
              >
                {editIndex !== null ? (
                  <DoneIcon sx={{ fontSize: 40 }} />
                ) : (
                  <AddIcon sx={{ fontSize: 40 }} />
                )}
              </Button>
            </Box>

            {checkpoints.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontWeight: 800,
                            fontSize: 18,
                            color: "purple",
                          }}
                        >
                          Heading
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 800,
                            fontSize: 18,
                            color: "purple",
                          }}
                        >
                          Paragraph
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 800,
                            fontSize: 18,
                            color: "purple",
                          }}
                        >
                          Image
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 800,
                            fontSize: 18,
                            color: "purple",
                          }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {checkpoints.map((checkpoint, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ fontWeight: 700, color: "red" }}>
                            {checkpoint.heading}
                          </TableCell>
                          <TableCell sx={{ fontWeight: 700, color: "orange" }}>
                            {checkpoint.paragraph}
                          </TableCell>
                          <TableCell>
                            {checkpoint.image && (
                              <Avatar alt="Image" src={checkpoint.image} />
                            )}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handleEditCheckpoint(index)}
                            >
                              <EditIcon sx={{ color: "green" }} />
                            </IconButton>
                            <IconButton
                              onClick={() => handleDeleteCheckpoint(index)}
                            >
                              <DeleteIcon sx={{ color: "red" }} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Box>
            )}
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
        </Box>
      </Layout>
    </>
  );
};
