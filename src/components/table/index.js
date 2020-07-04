/* eslint-disable react/prop-types */
import React from 'react'
import { theme } from '../globalStyle'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

export const SimpleTable = props => {
  const { showCells, rows, headAlign = 'left', headColor } = props
  // const [clicked, handleOptionTableMobile, handleOptionTable, optionActive] = useTable()
  const useStyles = makeStyles({
    table: {
      width: '100%',
      minWidth: 1000
    },
    container: {
      maxHeight: '100%',
      minHeight: '100%'
    },
    headerTitle: {
      whiteSpace: 'nowrap',
      color: theme.colors.blue900,
      fontSize: '12px',
      lineHeight: '24px',
      fontFamily: 'CenturyGothicBold !important',
      backgroundColor: `${headColor || theme.colors.grey600} !important`
    },
    cell: {
      whiteSpace: 'nowrap',
      color: theme.colors.blue900,
      fontSize:  '16px',
      lineHeight:'30px',
      fontFamily: 'CenturyGothic !important',
      padding:  '16px !important'
    },
    cellFixed: {
      whiteSpace: 'nowrap',
      color: theme.colors.blue900,
      fontSize:  '16px',
      lineHeight:  '30px',
      fontFamily: 'CenturyGothicBold !important',
      padding: '16px !important'
    }
  })
  const classes = useStyles()

    return (
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {showCells &&
                showCells.map(
                  cells =>
                    cells.show && (
                      <TableCell className={classes.headerTitle} align={headAlign}>
                        {cells.label}
                      </TableCell>
                    )
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map(row => (
                <TableRow key={row.id}>
                  {showCells &&
                    showCells.map(cell => (
                      <>
                        {cell.show && (
                          <TableCell className={cell.blocked ? classes.cellFixed : classes.cell} align="left">
                            {row[cell.item]}
                          </TableCell>
                        )}
                      </>
                    ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
