import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ICustomer } from "./Customer.type";

// Define data types
type Props = {
  data: ICustomer;
  handleBackToListCustomer: () => void;
  handleEditCustomer: (data: ICustomer) => void;
  handleOpenSnackbar: () => void;
};

// Define the component：EditCustomer
export default function EditCustomer(props: Props) {
  // Destructuring parameters from parent component
  const {
    data,
    handleBackToListCustomer,
    handleEditCustomer,
    handleOpenSnackbar,
  } = props;

  // Use react-hook-form for form management
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICustomer>();

  // State to track real-time validation feedback
  const [invalidInputs, setInvalidInputs] = useState<Record<string, boolean>>(
    {}
  );

  // Define the submit function
  const onSubmit: SubmitHandler<ICustomer> = (updatedData) => {
    // Back to Home page
    handleBackToListCustomer();

    // Handle the form data here: update the customer information
    handleEditCustomer({ ...updatedData, id: data.id });

    // Open reminder snackbar
    handleOpenSnackbar();
  };

  // Ensure that control is available before rendering the component
  if (!control) {
    return null;
  }

  return (
    <Box
      textAlign="center"
      sx={{
        maxWidth: "sm",
        marginTop: 3,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: 1,
        borderRadius: "10px",
        borderColor: "grey.500",
      }}
    >
      <Typography component="h1" variant="h5">
        EDIT CUSTOMER DETAILS
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <Controller
          name="firstName"
          control={control}
          defaultValue={data.firstName}
          rules={{
            required: "First Name is required",
            pattern: /^[A-Za-z]+$/i,
          }}
          render={({ field }) => (
            <TextField
              label="First Name"
              fullWidth
              variant="outlined"
              margin="normal"
              {...field}
              error={!!errors.firstName || invalidInputs["firstName"]}
              helperText={
                (invalidInputs["firstName"] &&
                  "Please enter only A-B / a-b characters") ||
                errors.firstName?.message
              }
              onChange={(e) => {
                const isValid = e.target.value.match(/^[A-Za-z]+$/i);
                setInvalidInputs((prev) => ({
                  ...prev,
                  firstName: !isValid,
                }));
                field.onChange(e);
              }}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          defaultValue={data.lastName}
          rules={{
            required: "Last Name is required",
            pattern: /^[A-Za-z]+$/i,
          }}
          render={({ field }) => (
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="normal"
              {...field}
              error={!!errors.lastName || invalidInputs["lastName"]}
              helperText={
                (invalidInputs["lastName"] &&
                  "Please enter only A-B / a-b characters") ||
                errors.lastName?.message
              }
              onChange={(e) => {
                const isValid = e.target.value.match(/^[A-Za-z]+$/i);
                setInvalidInputs((prev) => ({ ...prev, lastName: !isValid }));
                field.onChange(e);
              }}
            />
          )}
        />

        {/* Phone Number */}
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue={data.phoneNumber}
          rules={{
            required: "Phone Number is required",
            pattern: /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/,
          }}
          render={({ field }) => (
            <TextField
              label="Phone Number"
              fullWidth
              variant="outlined"
              margin="normal"
              {...field}
              error={!!errors.phoneNumber || invalidInputs["phoneNumber"]}
              helperText={
                (invalidInputs["phoneNumber"] &&
                  "Please enter a valid Australian mobile number (e.g., 0412345678)") ||
                errors.phoneNumber?.message
              }
              onChange={(e) => {
                const isValid = e.target.value.match(
                  /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/
                );
                setInvalidInputs((prev) => ({
                  ...prev,
                  phoneNumber: !isValid,
                }));
                field.onChange(e);
              }}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          defaultValue={data.email}
          rules={{
            required: "Email is required",
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
          render={({ field }) => (
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              {...field}
              error={!!errors.email || invalidInputs["email"]}
              helperText={
                (invalidInputs["email"] &&
                  "Please enter a valid email address (e.g., xxx@xxx.xxx)") ||
                errors.email?.message
              }
              onChange={(e) => {
                const isValid = e.target.value.match(
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                );
                setInvalidInputs((prev) => ({ ...prev, email: !isValid }));
                field.onChange(e);
              }}
            />
          )}
        />

        {/* Date of Birth */}
        <Controller
          name="dateOfBirth"
          control={control}
          defaultValue={data.dateOfBirth}
          rules={{ required: "Date of Birth is required" }}
          render={({ field }) => (
            <TextField
              label="Date of Birth"
              fullWidth
              variant="outlined"
              margin="normal"
              type="date"
              {...field}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth?.message}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />

        {/* Button to submit */}
        {/* Button to submit */}
        <Box
          sx={{
            padding: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            color="success"
            onClick={handleBackToListCustomer}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
}
