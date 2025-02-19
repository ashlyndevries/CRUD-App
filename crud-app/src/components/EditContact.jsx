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
import { useEffect, useState } from "react";
import { updateContact } from "../services/CRUD";

const EditContact = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setNumber(props.number);
  }, [props]);

  const handleConfirm = async () => {
    await updateContact(props.id, firstName, lastName, number);
    props.handleClose();
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Contact Information</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, py: 1 }}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
        </Box>
        <TextField
          label="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={props.handleClose} variant="outlined" fullWidth>
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" fullWidth>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditContact.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EditContact;
