import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CollabsTable = () => {
  const [collabsData, setCollabsData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [editedCollab, setEditedCollab] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("your_api_endpoint_here");
        setCollabsData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index) => {
    setEditingRow(index);
    setEditedCollab(collabsData[index]);
  };

  const handleSave = async () => {
    try {
      await axios.patch(
        `your_api_endpoint_here/${editedCollab.id}`,
        editedCollab
      );
      // Update the data in the local state
      const updatedData = [...collabsData];
      updatedData[editingRow] = editedCollab;
      setCollabsData(updatedData);
      setEditingRow(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`your_api_endpoint_here/${id}`);
      // Filter out the deleted item from the local state
      const updatedData = collabsData.filter((collab) => collab.id !== id);
      setCollabsData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedCollab((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <Typography variant="h4">Collabs Table</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Heading</TableCell>
            <TableCell>Subheading</TableCell>
            <TableCell>Paragraph</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collabsData.map((collab, index) => (
            <TableRow key={collab.id}>
              <TableCell>
                {editingRow === index ? (
                  <TextField
                    value={editedCollab.heading}
                    onChange={(e) =>
                      handleInputChange("heading", e.target.value)
                    }
                  />
                ) : (
                  collab.heading
                )}
              </TableCell>
              <TableCell>
                {editingRow === index ? (
                  <TextField
                    value={editedCollab.subheading}
                    onChange={(e) =>
                      handleInputChange("subheading", e.target.value)
                    }
                  />
                ) : (
                  collab.subheading
                )}
              </TableCell>
              <TableCell>
                {editingRow === index ? (
                  <TextField
                    value={editedCollab.paragraph}
                    onChange={(e) =>
                      handleInputChange("paragraph", e.target.value)
                    }
                  />
                ) : (
                  collab.paragraph
                )}
              </TableCell>
              <TableCell>
                {editingRow === index ? (
                  <>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={() => setEditingRow(null)}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <IconButton onClick={() => handleEdit(index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(collab.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CollabsTable;
