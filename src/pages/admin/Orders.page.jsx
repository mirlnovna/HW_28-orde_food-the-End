import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../store/order/order.thunk'

const Orders = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrder())
    }, [])
    const { allOrders } = useSelector((state) => state.orders)
    return (
        <StyledTableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell align="center">Amount</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allOrders.map((item) =>
                        item.items.map((meal) => (
                            <TableRow
                                key={meal.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{meal.title}</TableCell>
                                <TableCell>{meal.price}</TableCell>
                                <TableCell align="center">
                                    {meal.amount}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
}

export default Orders

const StyledTableContainer = styled(TableContainer)(() => ({
    marginTop: '60px',
}))

const StyledTableCell = styled(TableCell)(() => ({
    fontSize: '25px',
    fontWeight: 'bold',
}))
