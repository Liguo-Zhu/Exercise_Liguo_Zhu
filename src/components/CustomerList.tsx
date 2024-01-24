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
  handleDeleteCustomer: (data: ICustomer) => void;
  handleEditCustomer: (data: ICustomer) => void;
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Phone Number</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>DOB</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.map((customer) => (
                <StyledTableRow key={customer.id}>
                  <StyledTableCell component="th" scope="row">
                    {customer.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {customer.lastName}, {customer.firstName}
                  </StyledTableCell>
                  <StyledTableCell>{customer.phoneNumber}</StyledTableCell>
                  <StyledTableCell>{customer.email}</StyledTableCell>
                  <StyledTableCell>{`${customer.dateOfBirth.split("-")[2]}/${
                    customer.dateOfBirth.split("-")[1]
                  }/${customer.dateOfBirth.split("-")[0]}`}</StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={2}>
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
