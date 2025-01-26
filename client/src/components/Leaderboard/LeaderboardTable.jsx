import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

const LeaderboardTable = ({ data }) => {
    return (
        <Table className="table">
            {/* Table Header */}
            <TableHead>
                <TableRow>
                    <TableCell className="table-head-cell">Rank</TableCell>
                    <TableCell className="table-head-cell">Name</TableCell>
                    <TableCell className="table-head-cell">Points</TableCell>
                </TableRow>
            </TableHead>
            {/* Table Body - Displays leaderboard entries */}
            <TableBody>
                {data.map((entry, index) => (
                    <TableRow key={`${entry.accountName}-${index}`}>
                        <TableCell className="table-body-cell">
                            {/* Display Rank */}
                            {index + 1}
                        </TableCell>
                        <TableCell className="table-body-cell">
                            {/* Display Account Name */}
                            {entry.accountName}
                        </TableCell>
                        <TableCell className="table-body-cell">
                            {/* Display Points */}
                            {entry.points}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default LeaderboardTable;
