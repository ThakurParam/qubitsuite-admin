import { AddIcCallOutlined, DeleteOutline } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

export const Tabless = () => {
  const [allLanguages, setAllLanguages] = useState([]);
  const [languages, setLanguages] = useState("");
  const [languageLevel, setLanguageLevel] = useState("");
  const handleAddAllLanguages = () => {
    setAllLanguages((oldArr) => [
      ...oldArr,
      { language: languages, languageLevel: languageLevel },
    ]);
    setLanguages("");
    setLanguageLevel("");
  };
  const handleDeleteLanguages = (index) => {
    setAllLanguages((prevArray) => {
      // Create a new array excluding the item at the specified index
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };
  return (
    <div>
      <Button variant="contained" onClick={handleAddAllLanguages}>
        <AddIcCallOutlined />
      </Button>
      {allLanguages && allLanguages.length > 0 ? (
        <>
          <TableContainer>
            <Table sx={{ height: "10px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Language</TableCell>
                  <TableCell>Language Level</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allLanguages.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.language}</TableCell>
                    <TableCell>{item.languageLevel}</TableCell>
                    <TableCell>
                      <DeleteOutline
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleDeleteLanguages(index)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
