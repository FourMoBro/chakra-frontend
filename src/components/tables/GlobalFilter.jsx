import React, { useState } from 'react'
import { Container, Input, Text } from "@chakra-ui/react"
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = (props) => {

    const { filter, setFilter } = props
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
      }, 1000)
    return (
        <Container>
            <Text as="u">Search:{' '}</Text>
            <Input placeholder="Search all columns" value={value || ''} 
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }} />
        </Container>
    )
}
