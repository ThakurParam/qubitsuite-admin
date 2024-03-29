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

export const Collabs = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [checkPointHeading, setcheckPointHeading] = useState("");
  const [checkPointParagraph, setcheckPointParagraph] = useState("");
  const [checkPointUrl, setcheckPointUrl] = useState("");
  // api integration start from here /////////
  const handleCollabUpdate = async () => {
    if (!heading || !paragraph || !subHeading) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-collabs/65d48b957a3131267418fdc5";
      let payload = {
        collabHeading: heading,
        collabSubheading: subHeading,
        collabParagraph: paragraph,
      };

      try {
        const response = await axios.patch(endpoint, payload);
        console.log("Data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const handleCheckpointUpdate = async () => {
    if (!checkPointHeading || !checkPointParagraph) {
      alert("please fill the details ");
    } else {
      const endpoint =
        "https://qbitsuit-backend.onrender.com/update-collabs-checkPoints/65d48f05ff425d61894c1557";
      let payload = {
        checkPointHeading: checkPointHeading,
        checkPointParagraph: checkPointParagraph,
        checkPointUrl: checkPointUrl,
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
  const [check, setCheck] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-collab/"
      );
      setData(response.data);
      setHeading(response.data?.collabHeading);
      setSubHeading(response.data?.collabSubheading);
      setParagraph(response.data?.collabParagraph);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const checkdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-collab-checkPoints/"
      );
      setCheck(response.data);

      setcheckPointHeading(response.data?.checkPointHeading);
      setcheckPointParagraph(response.data?.checkPointParagraph);
      setcheckPointUrl(response.data?.checkPointUrl);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(check);
  useEffect(() => {
    fetchdata();
    checkdata();
  }, []);
  console.log(data);
  // Table type content here//////////////////////////
  const [checkpoints, setCheckpoints] = useState([]);
  const [currentCheckpoint, setCurrentCheckpoint] = useState({
    checkPointHeading: "",
    checkPointParagraph: "",
    checkPointUrl: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (field, value) => {
    setCurrentCheckpoint((prevCheckpoint) => ({
      ...prevCheckpoint,
      [field]: value,
    }));
  };

  const handleAddCheckpoint = () => {
    if (currentCheckpoint.checkPointHeading.trim() !== "") {
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
      setCurrentCheckpoint({
        checkPointHeading: "",
        checkPointParagraph: "",
        checkPointUrl: "",
      });
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

  useEffect(() => {
    console.log("Collabs component mounted");
  }, []);
  return (
    <>
      <Layout>
        <Box sx={{ mt: 2, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ pl: 2 }}>
                <Typography
                  sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}
                >
                  Collab Heading
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
              <Box sx={{ pl: 2 }}>
                <Typography
                  sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}
                >
                  Collab Subheading
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
            </Grid>
          </Grid>
          <Box sx={{ pl: 2 }}>
            <Typography sx={{ fontSize: 25, fontWeight: 600, color: "gray" }}>
              Collab Paragraph
            </Typography>
            <div style={{ marginTop: "15px" }}>
              <TextField
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
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
              onClick={handleCollabUpdate}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
              >
                Update
              </Typography>
            </Button>
          </Box>
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
                    value={currentCheckpoint.checkPointHeading}
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
                    value={currentCheckpoint.checkPointParagraph}
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

          {check.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: 800, fontSize: 18, color: "purple" }}
                      >
                        Heading
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 800, fontSize: 18, color: "purple" }}
                      >
                        Paragraph
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 800, fontSize: 18, color: "purple" }}
                      >
                        Image
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 800, fontSize: 18, color: "purple" }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {check.map((checkpoint, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ fontWeight: 700, color: "red" }}>
                          {checkpoint.checkPointHeading}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "orange" }}>
                          {checkpoint.checkPointParagraph}
                        </TableCell>
                        <TableCell>
                          {checkpoint.checkPointUrl && (
                            <Avatar
                              alt="Image"
                              src={checkpoint.checkPointUrl}
                            />
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
            onClick={handleCheckpointUpdate}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 2 }}
            >
              Update
            </Typography>
          </Button>
        </Box>
      </Layout>
    </>
  );
};
