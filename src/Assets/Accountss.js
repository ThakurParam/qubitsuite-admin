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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Accountss = () => {
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
    <Box>
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Box>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}>
                Heading
              </Typography>
              <div>
                <TextField
                  label="Place your text here..."
                  variant="outlined"
                  fullWidth
                  multiline
                  value={currentAccord.heading}
                  onChange={(e) => handleInputChange("heading", e.target.value)}
                  style={{ marginTop: "10px" }}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: "gray" }}>
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
                color="primary"
              >
                {editIndex !== null ? "Update" : "Add"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {accord.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            Paragraph Table
          </Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Heading</TableCell>
                  <TableCell>Paragraph</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accord.map((accord, index) => (
                  <TableRow key={index}>
                    <TableCell>{accord.heading}</TableCell>
                    <TableCell>{accord.paragraph}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditAccord(index)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteAccord(index)}>
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
