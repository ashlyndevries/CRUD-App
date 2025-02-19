import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogContentText,
} from "@mui/material";
import PropTypes from "prop-types";
import { deleteContact } from "../services/CRUD";

const DeleteContact = (props) => {
  const handleSubmit = async () => {
    await deleteContact(props.id);
    props.handleClose();
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Delete Contact</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete {props.firstName}{" "}
          {props.lastName.slice(-1) === "s"
            ? props.lastName + "'"
            : props.lastName + "'s"}{" "}
          contact information?
        </DialogContentText>
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

DeleteContact.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteContact;
