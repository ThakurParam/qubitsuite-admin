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
import axios from "axios";

export const Hrm2 = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setsubHeading] = useState("");
  const [aheading, setaheading] = useState("");
  const [paragraph, setparagraph] = useState("");
  const handleAcordupdate = async () => {
    if (!aheading || !paragraph) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-trainee.onrender.com/update-hrm2-accordian/65c99ddf76b733b1d537d702";
      let payload = {
        accordianHeading: aheading,
        accordianParagraph: paragraph,
      };
      try {
        const response = await axios.patch(endpoint, payload);
        console.log("Data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const handlehrmUpdate = async () => {
    if (!heading || !subHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-trainee.onrender.com/update-hrm2/65c328b8a4eeaf0b3464ac0a";
      let payload = {
        hrm2Heading: heading,
        hrm2Subheading: subHeading,
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
        "https://qbitsuit-trainee.onrender.com/get-hrm2/"
      );
      setData(response.data);
      setHeading(response.data?.hrm2Heading);
      setsubHeading(response.data?.hrm2Subheading);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const [hrm, setHrm] = useState([]);
  const [currentHrm, setCurrentHrm] = useState({
    heading: "",
    paragraph: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (field, value) => {
    setCurrentHrm((prevHrm) => ({
      ...prevHrm,
      [field]: value,
    }));
  };

  const handleAddHrm = () => {
    if (currentHrm.heading.trim() !== "") {
      if (editIndex !== null) {
        setHrm((prevHrm) =>
          prevHrm.map((hrm, index) => (index === editIndex ? currentHrm : hrm))
        );
        setEditIndex(null);
      } else {
        setHrm((prevHrm) => [...prevHrm, currentHrm]);
      }
      setCurrentHrm({ heading: "", paragraph: "" });
    }
  };

  const handleEditHrm = (index) => {
    setEditIndex(index);
    setCurrentHrm(hrm[index]);
  };

  const handleDeleteHrm = (index) => {
    setHrm((prevHrm) => prevHrm.filter((_, i) => i !== index));
    setEditIndex(null);
  };
  return (
    <>
      <Layout>
        <Box sx={{ p: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 35, fontWeight: 600, color: "purple" }}>
              Hrm 2{" "}
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Hrm 2 Heading
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
                <Box sx={{ mt: 2 }}>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Hrm 2 Image
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
                    Hrm 2 Subheading
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      value={subHeading}
                      onChange={(e) => setsubHeading(e.target.value)}
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
                    onClick={handlehrmUpdate}
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
              Hrm 2 Accord
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
                          value={currentHrm.heading}
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
                          value={currentHrm.paragraph}
                          onChange={(e) =>
                            handleInputChange("paragraph", e.target.value)
                          }
                          style={{ marginTop: "10px" }}
                        />
                      </div>
                    </Box>
                    <Box sx={{ mt: 3, textAlign: "end" }}>
                      <Button
                        onClick={handleAddHrm}
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

              {hrm.length > 0 && (
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
                        {hrm.map((hrm, index) => (
                          <TableRow key={index}>
                            <TableCell sx={{ fontWeight: 700, color: "red" }}>
                              {hrm.heading}
                            </TableCell>
                            <TableCell
                              sx={{ fontWeight: 700, color: "orange" }}
                            >
                              {hrm.paragraph}
                            </TableCell>
                            <TableCell>
                              <IconButton onClick={() => handleEditHrm(index)}>
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                onClick={() => handleDeleteHrm(index)}
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
                onClick={handleAcordupdate}
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
