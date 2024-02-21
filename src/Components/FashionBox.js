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

export const FashionBox = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [caseHeading, setCaseHeading] = useState("");
  const [caseParagraph, setCaseParagraph] = useState("");

  const handleFashionUpdate = async () => {
    if (!heading || !subHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-trainee.onrender.com/update-fashionbox/65c329cea4eeaf0b3464ac18";
      let payload = {
        fashionBoxHeading: heading,
        fashionBoxSubheading: subHeading,
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
    console.log(currentFashionBox);
    if (!caseHeading || !caseParagraph) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-fashionbox-cases/65c32a0ca4eeaf0b3464ac1c";
      let payload = {
        heading: caseHeading,
        paragraph: caseParagraph,
      };
      try {
        const response = await axios.patch(endpoint, currentFashionBox);
        console.log("Data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const [data, setData] = useState([]);
  const [cases, setCases] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://qbitsuit-trainee.onrender.com/get-fashionBox/"
        );
        setData(response.data);
        setHeading(response.data?.fashionBoxHeading);
        setSubHeading(response.data?.fashionBoxSubheading);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  useEffect(() => {
    const casedata = async () => {
      try {
        const response = await axios.get(
          "https://qbitsuit-trainee.onrender.com/get-fashionBox-cases/"
        );

        setCases(response.data);
        setCaseHeading(response.data?.heading);
        setCaseParagraph(response.data?.paragraph);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    casedata();
  }, []);

  const [fashionBox, setFashionBox] = useState([]);
  const [currentFashionBox, setCurrentFashionBox] = useState({
    heading: "",
    paragraph: "",
    image: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (field, value) => {
    setCurrentFashionBox((prevFashionBox) => ({
      ...prevFashionBox,
      [field]: value,
    }));
  };

  const handleAddFashionBox = () => {
    if (currentFashionBox.heading.trim() !== "") {
      if (editIndex !== null) {
        setFashionBox((prevFashionBox) =>
          prevFashionBox.map((fashionBox, index) =>
            index === editIndex ? currentFashionBox : fashionBox
          )
        );
        setEditIndex(null);
      } else {
        setFashionBox((prevFashionBox) => [
          ...prevFashionBox,
          currentFashionBox,
        ]);
      }
      setCurrentFashionBox({ heading: "", paragraph: "", image: "" });
    }
  };

  const handleEditFashionBox = (index) => {
    setEditIndex(index);
    setCurrentFashionBox(fashionBox[index]);
  };

  const handleDeleteFashionBox = (index) => {
    setFashionBox((prevFashionBox) =>
      prevFashionBox.filter((_, i) => i !== index)
    );
    setEditIndex(null);
  };
  // console.log(cases);
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
                    Fashion Box Subheading
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
                    onClick={handleFashionUpdate}
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

          <Box sx={{}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ pl: 2 }}>
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
                      value={currentFashionBox.heading}
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
                    sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}
                  >
                    Paragraph
                  </Typography>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      label="Paragraph"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={currentFashionBox.paragraph}
                      onChange={(e) =>
                        handleInputChange("paragraph", e.target.value)
                      }
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ pl: 2, p: 2 }}>
              <Typography sx={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
                logo
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
                onClick={handleAddFashionBox}
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

            {cases.length > 0 && (
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
                      {cases.map((fashionBox, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ fontWeight: 700, color: "red" }}>
                            {fashionBox.heading}
                          </TableCell>
                          <TableCell sx={{ fontWeight: 700, color: "orange" }}>
                            {fashionBox.paragraph}
                          </TableCell>
                          <TableCell>
                            {fashionBox.image && (
                              <Avatar alt="Image" src={fashionBox.image} />
                            )}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handleEditFashionBox(index)}
                            >
                              <EditIcon sx={{ color: "green" }} />
                            </IconButton>
                            <IconButton
                              onClick={() => handleDeleteFashionBox(index)}
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
      </Layout>
    </>
  );
};
