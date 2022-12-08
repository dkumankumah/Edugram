import {Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useColorMode} from '@chakra-ui/react';
import React from "react";

// export function DataTable<Data extends object>({
//                                                    data,
//                                                    columns
//                                                }: DataTableProps<Data>) {
//     const [sorting, setSorting] = React.useState<SortingState>([]);
//     const table = useReactTable({
//         columns,
//         data,
//         getCoreRowModel: getCoreRowModel(),
//         onSortingChange: setSorting,
//         getSortedRowModel: getSortedRowModel(),
//         state: {
//             sorting
//         }
//     });
const useRowSelection = () => {
    const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
    const toggleRow = (index: number) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((x) => x !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    return { selectedRows, toggleRow };
};

const TicketTable: React.FC<{ tickets: any[] }> = ({tickets}) => {
    const {selectedRows, toggleRow} = useRowSelection();
    const {colorMode} = useColorMode();


    return (
        // <DataTable
        //     columns={[{
        //         Header: 'Select',
        //         accessor: 'select',
        //         Cell: ({row}: { row: { index: number } }) => (
        //             <Checkbox size="sm" isChecked={selectedRows.includes(row.index)}
        //                       onChange={() => toggleRow(row.index)}/>),
        //         width: '50px'
        //     }, {Header: 'Created By', accessor: 'createdBy'}, {
        //         Header: 'Subject',
        //         accessor: 'subject'
        //     }, {Header: 'Status', accessor: 'status'}, {
        //         Header: 'Duration of Ticket',
        //         accessor: 'durationOfTicket'
        //     }, {Header: 'Date Created', accessor: 'dateCreated'}]}
        //     data={tickets.map((ticket) => ({
        //         select: '',
        //         createdBy: ticket.createdBy,
        //         subject: ticket.subject,
        //         status: ticket.status,
        //         durationOfTicket: `${ticket.dateOfSubmission} - ${ticket.dateOfEnding}`,
        //         dateCreated: ticket.dateOfSubmission.toDateString()
        //     }))}
        //     highlightFirstColumn
        //     highlightHoverRow
        //     highlightRowOnHover
        //
        // />

        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
};

export default TicketTable
