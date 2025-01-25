import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const LeaderboardTable = ({ data }) => {
    return (
        <Table className="table">
            <TableHead>
                <TableRow>
                    <TableCell className="table-head-cell">Rank</TableCell>
                    <TableCell className="table-head-cell">Name</TableCell>
                    <TableCell className="table-head-cell">Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((entry, index) => (
                    <TableRow key={`${entry.accountName}-${index}`}>
                        <TableCell className="table-body-cell">{index + 1}</TableCell>
                        <TableCell className="table-body-cell">{entry.accountName}</TableCell>
                        <TableCell className="table-body-cell">{entry.points}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default LeaderboardTable;
