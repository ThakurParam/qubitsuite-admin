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

export const AccountBilling = () => {
  const [accord, setAccord] = useState([]);
  const [currentAccord, setCurrentAccord] = useState({
    heading: "",
    paragraph: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (field, value) => {
    setCurrentAccord((prevAccord) => ({
      ...prevAccord,
      [field]: value,
    }));
  };

  const handleAddAccord = () => {
    if (currentAccord.heading.trim() !== "") {
      if (editIndex !== null) {
        setAccord((prevAccord) =>
          prevAccord.map((accord, index) =>
            index === editIndex ? currentAccord : accord
          )
        );
        setEditIndex(null);
      } else {
        setAccord((prevAccord) => [...prevAccord, currentAccord]);
      }
      setCurrentAccord({ heading: "", paragraph: "" });
    }
  };

  const handleEditAccord = (index) => {
    setEditIndex(index);
    setCurrentAccord(accord[index]);
  };

  const handleDeleteAccord = (index) => {
    setAccord((prevAccord) => prevAccord.filter((_, i) => i !== index));
    setEditIndex(null);
  };
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
              <Box>
                <Box sx={{ mt: 8 }}>
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
                            label="Place your text here..."
                            variant="outlined"
                            fullWidth
                            multiline
                            value={currentAccord.heading}
                            onChange={(e) =>
                              handleInputChange("heading", e.target.value)
                            }
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
                            label="Para here..."
                            variant="outlined"
                            fullWidth
                            multiline
                            value={currentAccord.paragraph}
                            onChange={(e) =>
                              handleInputChange("paragraph", e.target.value)
                            }
                            style={{ marginTop: "10px" }}
                          />
                        </div>
                      </Box>
                      <Box sx={{ mt: 3, textAlign: "end" }}>
                        <Button
                          onClick={handleAddAccord}
                          variant="contained"
                          sx={{ bgcolor: "#E7591E", borderRadius: "20px" }}
                        >
                          {editIndex !== null ? (
                            <DoneIcon sx={{ fontSize: 40 }} />
                          ) : (
                            <AddIcon sx={{ fontSize: 40 }} />
                          )}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {accord.length > 0 && (
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
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {accord.map((accord, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ fontWeight: 700, color: "red" }}>
                                {accord.heading}
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: 700, color: "orange" }}
                              >
                                {accord.paragraph}
                              </TableCell>
                              <TableCell>
                                <IconButton
                                  onClick={() => handleEditAccord(index)}
                                >
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  onClick={() => handleDeleteAccord(index)}
                                >
                                  <DeleteIcon />
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
          </Box>
        </Box>
      </Layout>
    </>
  );
};
