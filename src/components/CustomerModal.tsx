// ModalExample.tsx
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { ICustomer } from "./Customer.type";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

type Props = {
  customer: ICustomer;
};

export default function CustomerModal(props: Props) {
  const { customer } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        View
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 12 }} color="text.success" gutterBottom>
              ID: {customer.id}
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              Name: {customer.firstName} {customer.lastName}
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 12 }} color="text.success" gutterBottom>
              Mobile: {customer.phoneNumber}
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 12 }} color="text.success" gutterBottom>
              Email: {customer.email}
            </Typography>
            <Divider />
            <Typography sx={{ fontSize: 12 }} color="text.success" gutterBottom>
              DOB: {customer.dateOfBirth}
            </Typography>
            <Divider />

            <Divider />
            <Button onClick={handleClose}>Close</Button>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}
