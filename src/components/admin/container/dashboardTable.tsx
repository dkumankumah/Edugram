import {Checkbox, SelectAll, Table, Tbody, Th, Thead, Tr} from '@chakra-ui/react'

export default function DashboardTable() {

    return (
        <Table size='md' w='50%'>
            <Thead>
                <Tr>
                    <Th>
                        <Checkbox></Checkbox>
                    </Th>
                    <Th>Created</Th>
                    <Th>Subject</Th>
                    <Th>Date Created</Th>
                </Tr>
            </Thead>
            <Tbody>
                {/*    /!* Add rows to the table here *!/*/}
            </Tbody>

        </Table>
    );
}
