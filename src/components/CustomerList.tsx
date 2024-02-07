import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICustomer } from "./Customer.type";
import CustomerModal from "./CustomerModal";

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

// Define data types
type Props = {
  list: ICustomer[];
  handleEditCustomer: (data: ICustomer) => void;
  handleDeleteCustomer: (data: ICustomer) => void;
  handleOpenSnackbar: () => void;
};

// Define the component：CustomerList
export default function CustomerList(props: Props) {
  const { list, handleDeleteCustomer, handleEditCustomer, handleOpenSnackbar } =
    props;

  return (
    <>
      {/* Check the length of the customer list */}
      {list.length !== 0 ? (
        // If the customer list is not empty, list them.
        <TableContainer component={Paper} sx={{ maxWidth: "900px" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.map((customer) => (
                <StyledTableRow
                  key={customer.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell>{customer.lastName}</StyledTableCell>
                  <StyledTableCell>{customer.firstName}</StyledTableCell>
                  <StyledTableCell>{customer.email}</StyledTableCell>

                  <StyledTableCell align="center">
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ justifyContent: "center" }}
                    >
                      {/* View the customer */}
                      <CustomerModal customer={customer} />

                      {/* Edit the customer */}
                      <Button
                        variant="contained"
                        onClick={() => handleEditCustomer(customer)} // Edit button
                      >
                        Edit
                      </Button>

                      {/* Delete the customer */}
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          // Delete the customer
                          handleDeleteCustomer(customer);
                          // Open reminder snackbar
                          handleOpenSnackbar();
                        }} // Delete button
                      >
                        Delete
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        // Alert the user when no customer in the system.
        <Alert severity="warning">No customer in the system!</Alert>
      )}
    </>
  );
}
