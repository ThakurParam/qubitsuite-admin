import React, { useState } from "react";
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

export const Colablist = () => {
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
                value={currentCheckpoint.heading}
                onChange={(e) => handleInputChange("heading", e.target.value)}
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
                label="Paragraph"
                variant="outlined"
                fullWidth
                multiline
                value={currentCheckpoint.paragraph}
                onChange={(e) => handleInputChange("paragraph", e.target.value)}
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
            handleInputChange("image", URL.createObjectURL(e.target.files[0]))
          }
          style={{ width: "100%", height: "30px", marginTop: "15px" }}
        />
      </Box>

      <Button onClick={handleAddCheckpoint} variant="contained" color="primary">
        {editIndex !== null ? "Update Checkpoint" : "Add Checkpoint"}
      </Button>

      {checkpoints.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            Checkpoint Table
          </Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Heading</TableCell>
                  <TableCell>Paragraph</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {checkpoints.map((checkpoint, index) => (
                  <TableRow key={index}>
                    <TableCell>{checkpoint.heading}</TableCell>
                    <TableCell>{checkpoint.paragraph}</TableCell>
                    <TableCell>
                      {checkpoint.image && (
                        <Avatar alt="Image" src={checkpoint.image} />
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditCheckpoint(index)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteCheckpoint(index)}>
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
  );
};
