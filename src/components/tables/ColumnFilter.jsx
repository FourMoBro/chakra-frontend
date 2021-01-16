import React from 'react'
import { Input, Text } from "@chakra-ui/react"

export const ColumnFilter = (props) => {
    const { column } = props
    const { filterValue, setFilter } = column
    return (
        <span>
            {/* <Text as="mark">Search:{' '}</Text> */}
            <Input size="xs" placeholder="Search this column" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}