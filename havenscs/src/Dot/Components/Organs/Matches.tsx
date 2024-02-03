
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import testLogo1 from "../../../Assets/testLogo1.png";
type MatchData = {
  date: string;
  teamLogo1: string;
  teamName1: string;
  score: string;
  teamLogo2: string;
  teamName2: string;
  tournamentLogo: string;
  tournamentName: string;
};

const createData = (
  date: string,
  teamLogo1: string,
  teamName1: string,
  score: string,
  teamLogo2: string,
  teamName2: string,
  tournamentLogo: string,
  tournamentName: string
): MatchData => {
  return {
    date,
    teamLogo1,
    teamName1,
    score,
    teamLogo2,
    teamName2,
    tournamentLogo,
    tournamentName,
  };
};

// Sample data, replace with your actual data
const rows = [
  createData(
    "15 OCT. 2023",
    testLogo1,
    "NAVI",
    "1:3",
    testLogo1,
    "Native Gaming R...",
    testLogo1,
    "HWC 2023"
  ),
  createData(
    "15 OCT. 2023",
    testLogo1,
    "NAVI",
    "1:3",
    testLogo1,
    "Native Gaming R...",
    testLogo1,
    "HWC 2023"
  ),createData(
    "15 OCT. 2023",
    testLogo1,
    "NAVI",
    "1:3",
    testLogo1,
    "Native Gaming R...",
    testLogo1,
    "HWC 2023"
  ),
  // Add more rows as needed
];

const Matches = () => {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#FFD700' }}>
      <Table sx={{ minWidth: 650, bgcolor: '#ccac00' }} aria-label="match history table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Team 1 Logo</TableCell>
            <TableCell>Team 1 Name</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Team 2 Logo</TableCell>
            <TableCell>Team 2 Name</TableCell>
            <TableCell>Tour. Logo</TableCell>
            <TableCell>Tournament Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <img src={row.teamLogo1} alt={`${row.teamName1} logo`} style={{ height: '50px' }} />
              </TableCell>
              <TableCell>{row.teamName1}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>
                <img src={row.teamLogo2} alt={`${row.teamName2} logo`} style={{ height: '50px' }} />
              </TableCell>
              <TableCell>{row.teamName2}</TableCell>
              <TableCell>
                <img src={row.tournamentLogo} alt={`${row.tournamentName} logo`} style={{ height: '50px' }} />
              </TableCell>
              <TableCell>{row.tournamentName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Matches;
