import { useState } from "react";
import CustomerList from "./CustomerList";
import { ICustomer, PageStatusEnum, customerListArray } from "./Customer.type";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";
import { IconButton, Snackbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Close } from "@mui/icons-material";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";

// Define the component：Home
export default function Home() {
  // Store a list of customers in the customerList array
  const [customerList, setCustomerList] = useState(
    customerListArray as ICustomer[]
  );

  // Control the page status
  const [showAddCustomerPage, setShowAddCustomerPage] = useState(
    PageStatusEnum.listCustomer
  );

  // Store the customer object to be edited
  const [dataToEdit, setDataToEdit] = useState({} as ICustomer);

  // Reminder of successful user operation
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Show AddCustomer page
  function handleAddCustomer() {
    setShowAddCustomerPage(PageStatusEnum.addCustomer);
  }

  // Show CustomerList page
  function showListCustomer() {
    setShowAddCustomerPage(PageStatusEnum.listCustomer);
  }

  // Add a new customer to the list
  function addCustomer(data: ICustomer) {
    setCustomerList([...customerList, data]);
  }

  // Delete a customer
  function deleteCustomer(data: ICustomer) {
    // Find the customer and update the new record
    const indexOfDeleteCustomer = customerList.indexOf(data);
    const tempList = [...customerList];
    // Delete the customer from the list
    tempList.splice(indexOfDeleteCustomer, 1);
    // Set customer list again
    setCustomerList(tempList);
  }

  // Edit a customer's details
  function editCustomer(data: ICustomer) {
    // Show the EditCustomer page
    setShowAddCustomerPage(PageStatusEnum.editCustomer);

    // Set the customer's data that will be edit in the EditCustomer page
    setDataToEdit(data);
  }

  // Update a customer details in the customer list
  function handleUpdateCustomer(data: ICustomer) {
    // Find the customer based on its ID
    const filteredData = customerList.filter(
      (customer) => customer.id === data.id
    )[0];
    // Find the customer index in the customer list
    const indexOfRecord = customerList.indexOf(filteredData);
    // Update the customer details
    const tempList = [...customerList];
    tempList[indexOfRecord] = data;
    // Set the updated customer list
    setCustomerList(tempList);
  }

  // Close reminder snackbar
  function handleCloseSnackbar() {
    setSnackbarOpen(false);
  }

  // Open reminder snackbar
  function handleOpenSnackbar() {
    setSnackbarOpen(true);
  }

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          CUSTOMER MANAGEMENT SYSTEM
        </Typography>
        <Divider style={{ width: "100%" }} />
        {/* Show the AddCustomer page */}
        {showAddCustomerPage === PageStatusEnum.listCustomer && (
          <>
            {/* Add a customer */}
            <Button
              variant="contained"
              size="large"
              onClick={handleAddCustomer} // Go to AddCustomer page
              sx={{ mt: 3, mb: 1 }}
            >
              Add Customer
            </Button>
            <Typography component="h2" variant="h6">
              Click this button to add a new customer to the system.
            </Typography>
            {/* Show the list of the existing customers in the customer array */}
            <CustomerList
              list={customerList}
              handleDeleteCustomer={deleteCustomer} // Delete the customer
              handleEditCustomer={editCustomer} // Edit the customer
              handleOpenSnackbar={handleOpenSnackbar} // Open reminder snackbar
            />
          </>
        )}

        {/* Show add customer page */}
        {showAddCustomerPage === PageStatusEnum.addCustomer && (
          <AddCustomer
            handleBackToListCustomer={showListCustomer} // Back to show customer list page
            onSubmitAddCustomer={addCustomer} // Add customer
            handleOpenSnackbar={handleOpenSnackbar} // Open reminder snackbar
          />
        )}

        {/* Show edit customer page */}
        {showAddCustomerPage === PageStatusEnum.editCustomer && (
          <EditCustomer
            data={dataToEdit}
            handleBackToListCustomer={showListCustomer} // Back to show customer list page
            handleEditCustomer={handleUpdateCustomer} // Edit customer
            handleOpenSnackbar={handleOpenSnackbar} // Open reminder snackbar
          />
        )}
      </Box>
      {/* Snackbar for showing success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar} // Close snackbar
        message="Operation successful!"
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={handleCloseSnackbar} // Close snackbar
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
}
