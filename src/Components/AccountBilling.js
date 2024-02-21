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
  TableContainer,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Layout } from "../Pages/Layout";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";

export const AccountBilling = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [accountHeading, setAccountHeading] = useState("");
  const [accountSubHeading, setAccountSubHeading] = useState("");
  const [image, setImage] = useState("");
  const handleModuleUpdate = async () => {
    if (!heading || !subHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-module/65c99e4d76b733b1d537d706";
      let payload = {
        moduleHeading: heading,
        moduleSubheading: subHeading,
      };
      try {
        const response = await axios.patch(endpoint, payload);
        console.log("Data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const handleAccountUpdate = async () => {
    if (!accountHeading || !accountSubHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-accountbilling-account/65ca111064d6a1c300ccd6c1";
      let payload = {
        accountHeading: accountHeading,
        accountSubheading: accountSubHeading,
        accountImageUrl: image,
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
  const [cord, setCord] = useState({});
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-account/"
      );
      setData(response.data);
      setAccountHeading(response.data?.accountHeading);
      setAccountSubHeading(response.data?.accountSubheading);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const accorddata = async () => {
    try {
      const res = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-accordian/"
      );

      setCord(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cord);
  const [mdata, setmData] = useState([]);
  const moduledata = async () => {
    try {
      const res = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-module/"
      );
      setmData(res.data);
      setHeading(res.data?.moduleHeading);
      setSubHeading(res.data?.moduleSubheading);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
    accorddata();
    moduledata();
  }, []);
  // const [accord, setAccord] = useState([]);
  // const [currentAccord, setCurrentAccord] = useState({
  //   accordianHeading: "",
  //   accordianParagraph: "",
  // });
  // const [editIndex, setEditIndex] = useState(null);

  // const handleInputChange = (field, value) => {
  //   setCurrentAccord((prevAccord) => ({
  //     ...prevAccord,
  //     [field]: value,
  //   }));
  // };

  // const handleAddAccord = () => {
  //   if (currentAccord.heading.trim() !== "") {
  //     if (editIndex !== null) {
  //       setAccord((prevAccord) =>
  //         prevAccord.map((accord, index) =>
  //           index === editIndex ? currentAccord : accord
  //         )
  //       );
  //       setEditIndex(null);
  //     } else {
  //       setAccord((prevAccord) => [...prevAccord, currentAccord]);
  //     }
  //     setCurrentAccord({ heading: "", paragraph: "" });
  //   }
  // };

  // const handleEditAccord = (index) => {
  //   setEditIndex(index);
  //   setCurrentAccord(accord[index]);
  // };

  // const handleDeleteAccord = (index) => {
  //   setAccord((prevAccord) => prevAccord.filter((_, i) => i !== index));
  //   setEditIndex(null);
  // };

  const [editIndex, setEditIndex] = useState(null);
  const [newEntry, setNewEntry] = useState({
    accordianHeading: "",
    accordianParagraph: "",
  });

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSave = () => {
    setEditIndex(null);
  };

  const handleAddNew = () => {
    setData([...data, newEntry]);
    setNewEntry({ accordianHeading: "", accordianParagraph: "" });
  };
  console.log(data);
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
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
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
                      value={subHeading}
                      onChange={(e) => setSubHeading(e.target.value)}
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
                    onClick={handleModuleUpdate}
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
                        value={accountHeading}
                        onChange={(e) => setAccountHeading(e.target.value)}
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
                        value={accountSubHeading}
                        onChange={(e) => setAccountSubHeading(e.target.value)}
                        label="Heading"
                        variant="outlined"
                        fullWidth
                        multiline
                        style={{ marginTop: "10px" }}
                      />
                    </div>
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
              onClick={handleAccountUpdate}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
              >
                Update
              </Typography>
            </Button>
          </Box>
          <Box>
            <Box sx={{ textAlign: "center", color: "purple", mt: 5 }}>
              <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
                Accordian
              </Typography>
            </Box>
            <Box sx={{ mt: 8 }}>
              {/* <Box> */}
              {/* <Box sx={{ mt: 8 }}>
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
                </Box> */}
              {/* {cord.length > 0 && (
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
                          <TableRow>
                            <TableCell sx={{ fontWeight: 700, color: "red" }}>
                              {cord.accordianHeading}
                            </TableCell>
                            <TableCell
                              sx={{ fontWeight: 700, color: "orange" }}
                            >
                              {cord.accordianParagraph}
                            </TableCell>
                            {/* <TableCell>
                              <IconButton
                              // onClick={() => handleEditAccord(index)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                              // onClick={() => handleDeleteAccord(index)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell> */}
              {/* </TableRow>
                        </TableBody>
                      </Table>
                    </Paper>
                  </Box>
                )} */}

              {/* // </Box> */}
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Heading</TableCell>
                      <TableCell>Paragraph</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {data.map((entry, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {editIndex === index ? (
                            <TextField
                              value={cord.accordianHeading}
                              onChange={(e) => {
                                const newData = [...data];
                                newData[index].accordianHeading =
                                  e.target.value;
                                setData(newData);
                              }}
                            />
                          ) : (
                            entry.accordianHeading
                          )}
                        </TableCell>
                        <TableCell>
                          {editIndex === index ? (
                            <TextField
                              value={cord.accordianParagraph}
                              onChange={(e) => {
                                const newData = [...data];
                                newData[index].accordianParagraph =
                                  e.target.value;
                                setData(newData);
                              }}
                            />
                          ) : (
                            entry.accordianParagraph
                          )}
                        </TableCell>
                        <TableCell>
                          {editIndex === index ? (
                            <IconButton onClick={handleSave}>Save</IconButton>
                          ) : (
                            <>
                              <IconButton onClick={() => handleEdit(index)}>
                                <EditIcon />
                              </IconButton>
                              <IconButton onClick={() => handleDelete(index)}>
                                <DeleteIcon />
                              </IconButton>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))} */}
                    <TableRow>
                      <TableCell>
                        <TextField
                          value={newEntry.accordianHeading}
                          onChange={(e) =>
                            setNewEntry({
                              ...newEntry,
                              accordianHeading: e.target.value,
                            })
                          }
                          placeholder="New Heading"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newEntry.accordianParagraph}
                          onChange={(e) =>
                            setNewEntry({
                              ...newEntry,
                              accordianParagraph: e.target.value,
                            })
                          }
                          placeholder="New Paragraph"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={handleAddNew}>
                          <AddIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
