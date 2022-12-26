import {Checkbox, SelectAll, Table, Tbody, Th, Thead, Tr} from '@chakra-ui/react'
import {useState} from "react";
import {Stack} from "@chakra-ui/layout";

export default function DashboardTable() {
    const [checkedItems, setCheckedItems] = useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    return (

        <Stack >

            <Table size='md' w='50%'>
                <Thead>
                    <Tr>
                        <Th>
                            <Checkbox
                                // isChecked={allChecked}
                                colorScheme='facebook'
                                iconColor='blue.400'
                                iconSize='10rem'></Checkbox>
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
        </Stack>
    );

}


