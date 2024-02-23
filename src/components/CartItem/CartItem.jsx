import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIconWidget from "../DeleteIconWidget/DeleteIconWidget";
import RemoveWidget from "../RemoveWidget.jsx/RemoveWidget";
import AddWidget from "../AddWidget/AddWidget";
import "./cartItem.css";

function CartItem({ items }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              Nombre del producto
            </StyledTableCell>
            <StyledTableCell align="center">Cantidad</StyledTableCell>
            <StyledTableCell align="center">Precio x Unidad</StyledTableCell>
            <StyledTableCell align="center">Subtotal</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className="addAndRemove">
                  <RemoveWidget itemID={row.id} quantity={row.quantity} />
                  {row.quantity}
                  <AddWidget
                    itemID={row.id}
                    quantity={row.quantity}
                    stock={row.stock}
                  />
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">
                {row.price * row.quantity}
              </StyledTableCell>
              <StyledTableCell align="center">
                <DeleteIconWidget itemID={row.id} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItem;
