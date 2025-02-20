import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { createContact } from "../database/CRUD";
import { useEffect, useState } from "react";

const AddContact = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setNumber("");
  }, [props.open]);

  const handleSubmit = async () => {
    if (!firstName || !lastName || !number) {
      setError(true);
      return;
    } else if (!number.match(/^\d{3}-\d{3}-\d{4}$/g)) {
      setInvalid(true);
      return;
    } else {
      setError(false);
      setInvalid(false);
    }

    const id = await createContact(firstName, lastName, number);

    props.setContacts([
      ...props.contacts,
      {
        id,
        firstName,
        lastName,
        number,
      },
    ]);

    props.handleClose();
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Add Contact</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5, py: 1.5 }}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
            error={!firstName && error}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
            error={!lastName && error}
          />
        </Box>
        <TextField
          label="Phone Number"
          placeholder="###-###-####"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          fullWidth
          required
          error={(!number && error) || invalid}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={props.handleClose} variant="outlined" fullWidth>
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" fullWidth>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddContact.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  setContacts: PropTypes.func.isRequired,
};

export default AddContact;
