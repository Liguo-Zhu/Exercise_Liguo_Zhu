// Customer interface
export interface ICustomer {
  id: string; // Use uuid to create unique id, so change id type from number to string.
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
}

// Customer object array
export const customerListArray: ICustomer[] = [
  // 2 sets of initial data
  {
    id: "5ba692e9-f5f3-4f0e-b42e-ffbe399b8852",
    firstName: "David",
    lastName: "Thomas",
    phoneNumber: "0412345678",
    email: "david.thomas@gmail.com",
    // This format is only used for storage
    // Date format: yyyy-mm-dd, displayed as dd/mm/yyyy on the customer list page.
    // This format is designed to meet editing functional requirements.
    dateOfBirth: "1999-01-31",
  },
  {
    id: "8fe31563-c8fb-4022-b21c-58ac6fd7dc03",
    firstName: "Anna",
    lastName: "Martin",
    phoneNumber: "0466667777",
    email: "anna.martin@gmail.com",
    dateOfBirth: "2000-12-31",
  },
];

// Page status enum
export enum PageStatusEnum {
  listCustomer,
  addCustomer,
  editCustomer,
}
