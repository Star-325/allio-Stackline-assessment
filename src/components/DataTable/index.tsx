import React, { useEffect, useState } from 'react'
import { TableBack } from './styles'
import { connect } from 'react-redux'
import { getRetailData } from '../../actions'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'

interface Props {
  getSalesData: () => void,
  retailData: any[]
}

const DataTable: React.FC<Props> = ({ getSalesData, retailData }) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  useEffect(() => {
    getSalesData()
  }, [getSalesData])

  return (
    <TableBack>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>WEEK ENDING</TableCell>
              <TableCell align="right">RETAIL SALES</TableCell>
              <TableCell align="right">WHOLESALESALES</TableCell>
              <TableCell align="right">UNITS SOLD</TableCell>
              <TableCell align="right">RETAILER MARGIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {retailData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.weekEnding}
                  </TableCell>
                  <TableCell align="right">{`$${row.retailSales.toLocaleString()}`}</TableCell>
                  <TableCell align="right">{`$${row.wholesaleSales.toLocaleString()}`}</TableCell>
                  <TableCell align="right">{row.unitsSold.toLocaleString()}</TableCell>
                  <TableCell align="right">{`$${row.retailerMargin.toLocaleString()}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={retailData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </TableBack>
  )
}

const mapStateToProps = state => {
  return { retailData: state.retailState }
}

const mapDispatchToProps = dispatch => {
  return { getSalesData: () => getRetailData(dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
