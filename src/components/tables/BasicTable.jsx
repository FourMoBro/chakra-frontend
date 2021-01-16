import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import { CheckboxCol } from './CheckboxCol'

import { Button, Text,  Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({ columns, data },  useFilters, useGlobalFilter, useSortBy, usePagination, useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <CheckboxCol {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }) => <CheckboxCol {...row.getToggleRowSelectedProps()} />
                },
                ...columns
            ])
        })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        selectedFlatRows,
        state,
        setGlobalFilter,
    } = tableInstance

    const { pageIndex, pageSize, globalFilter } = state

    return (

        <>
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                <chakra.span pl="4">
                                {column.isSorted ? (
                                column.isSortedDesc ? (
                                <TriangleDownIcon aria-label="sorted descending" />
                                ) : (
                                <TriangleUpIcon aria-label="sorted ascending" />
                                )
                                ) : null}
                                </chakra.span>

                            </Th>
                            ))}                    
                    </Tr>
                    ))}                
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                })}
                            </Tr>
                        )
                    })}
                    
                </Tbody>
            </Table>

            <div>
                <chakra.span>
                    <Text>Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong> {' '}
                    </Text>
                </chakra.span>
                <chakra.span>
                    | Go to page:{' '}
                    <NumberInput defaultValue={pageIndex + 1} min={1} max={pageCount} 
                    onChange={(valueString) => {
                        const pageNumber = valueString ? Number(valueString) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </chakra.span>
                <chakra.span>
                    <Select value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}>
                        {[10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </Select>
                </chakra.span>
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}><ArrowLeftIcon /></Button>
                <Button variant="outlined" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
                <Button variant="outlined" onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><ArrowRightIcon /></Button>
            </div>
        </>
)
}
// use the selectedFlatRows to send the data back to the API endpoint
{/* <pre>
<code>
  {JSON.stringify(
    {
      selectedFlatRows: selectedFlatRows.map(row => row.original)
    },
    null,
    2
  )}
</code>
</pre> */}