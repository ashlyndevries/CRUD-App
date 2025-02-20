import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import AddContact from "./AddContact";
import PropTypes from "prop-types";

const SubHeading = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "end",
        py: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Contacts
      </Typography>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={() => setOpen(true)}
      >
        + Add Contact
      </Button>
      <AddContact
        open={open}
        handleClose={() => setOpen(false)}
        contacts={props.contacts}
        setContacts={props.setContacts}
      />
    </Box>
  );
};

SubHeading.propTypes = {
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

export default SubHeading;
