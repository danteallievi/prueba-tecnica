import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import UsersContext from "../context/users";

const Form = ({ handleModal }) => {
  const { addUser, usersList } = useContext(UsersContext);
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    country: "",
    company: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({ ...formData, id: uuidv4() });
    handleModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="first"
        value={formData.first}
        fullWidth
        margin="normal"
        onChange={handleChange}
        required
      />
      <TextField
        label="Last Name"
        name="last"
        value={formData.last}
        fullWidth
        margin="normal"
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        fullWidth
        margin="normal"
        type="email"
        onChange={handleChange}
        required
      />
      <TextField
        label="Country"
        name="country"
        value={formData.country}
        fullWidth
        margin="normal"
        onChange={handleChange}
        required
      />
      <TextField
        label="Company"
        name="company"
        value={formData.company}
        fullWidth
        margin="normal"
        onChange={handleChange}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
