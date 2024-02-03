import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
const tableTheme = createTheme({
    // Define your table-specific theme here
    typography: {
        // Set standard fonts and sizes or other styles as needed
        body1: {
            fontSize: '1rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
        body2: {
            fontSize: '0.875rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
    },
});
interface TableProps<T extends { [key: string]: any }> {
    data: T[];
    onEdit?: (item: T) => void;
    onDelete: (item: T) => void;
}
const GenericTable = <T extends { [key: string]: any }>({ data, onEdit, onDelete }: TableProps<T>) => {
    const columns = data[0] ? Object.keys(data[0]) : [];

    return (
        <ThemeProvider theme={tableTheme}>
            <TableContainer sx={{maxHeight:600}} component={Paper}>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column}>{column}</TableCell>
                            ))}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow  key={index}>
                                {columns.map((column) => (
                                    <TableCell key={column}><Typography variant={'body1'} fontSize={'12px'}>{item[column]}</Typography></TableCell>
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

export default GenericTable;
