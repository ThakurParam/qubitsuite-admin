import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export const Apitable = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newEntry, setNewEntry] = useState({
    accordianHeading: "",
    accordianParagraph: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-accordian/"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSave = () => {
    // Your logic to save edited data
    setEditIndex(null);
  };

  const handleAddNew = () => {
    setData([...data, newEntry]);
    setNewEntry({ accordianHeading: "", accordianParagraph: "" });
  };

  return (
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
          {data.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                {index === editIndex ? (
                  <TextField
                    value={entry.accordianHeading}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].accordianHeading = e.target.value;
                      setData(newData);
                    }}
                  />
                ) : (
                  entry.accordianHeading
                )}
              </TableCell>
              <TableCell>
                {index === editIndex ? (
                  <TextField
                    value={entry.accordianParagraph}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].accordianParagraph = e.target.value;
                      setData(newData);
                    }}
                  />
                ) : (
                  entry.accordianParagraph
                )}
              </TableCell>
              <TableCell>
                {index === editIndex ? (
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
          ))}
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
  );
};
