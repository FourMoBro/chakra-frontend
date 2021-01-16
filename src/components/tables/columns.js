import { color } from "@chakra-ui/react";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter        
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Email',
        accessor: 'email',
        Filter: ColumnFilter
    },
    {
        Header: 'Plant',
        accessor: 'plants',
        Filter: ColumnFilter
    },
    {
        Header: 'Date',
        accessor: 'date',
        Filter: ColumnFilter
    }
]