import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const tableTheme = createTheme({
  // Define your table-specific theme here
  typography: {
    // Set standard fonts and sizes or other styles as needed
    body1: {
      fontSize: "1rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontSize: "0.875rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  palette: {
    mode: "dark",
  },
});

interface TableProps<T extends { [key: string]: any }> {
  data: T[];
  onEdit?: (item: T) => void;
  onDelete: (item: T) => void;
}

const NewsTable = <T extends { [key: string]: any }>({
  data,
  onEdit,
  onDelete,
}: TableProps<T>) => {
  const columns = data[0] ? Object.keys(data[0]) : [];

  // Function to safely parse and render HTML content
  const createMarkup = (htmlContent: string) => {
    // Ensure to sanitize htmlContent before using this function
    return { __html: htmlContent };
  };

  return (
    <ThemeProvider theme={tableTheme}>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column}>
                    {column === "content" ? (
                      <div
                        dangerouslySetInnerHTML={createMarkup(item[column])}
                      />
                    ) : column === "imageUrl" ? (
                      <img
                        src={item[column]}
                        alt="News"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    ) : (
                      <div>{item[column]}</div>
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  {onEdit && <Button onClick={() => onEdit(item)}>Edit</Button>}
                  <Button onClick={() => onDelete(item)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default NewsTable;
