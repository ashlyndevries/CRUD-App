import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

const Contact = (props) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "white",
        borderRadius: 1,
        border: 1,
        borderColor: "lightgray",
        p: 1.5,
      }}
    >
      <Box
        sx={{ justifyItems: "flex-start", cursor: "pointer", flex: 1 }}
        onClick={() => setOpenEdit(true)}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {props.firstName} {props.lastName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <LocalPhoneIcon sx={{ fontSize: "12px", color: "gray" }} />
          <Typography variant="caption" sx={{ pl: 0.5, color: "gray" }}>
            {props.number}
          </Typography>
        </Box>
      </Box>
      <Box
        onClick={() => setOpenDelete(true)}
        sx={{
          bgcolor: "red",
          borderRadius: 1,
        }}
      >
        <DeleteIcon
          sx={{
            color: "white",
            py: 0.5,
            px: 1,
            fontSize: "16px",
            mt: 0.5,
            cursor: "pointer",
          }}
        />
      </Box>
      <EditContact
        id={props.id}
        firstName={props.firstName}
        lastName={props.lastName}
        number={props.number}
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        contacts={props.contacts}
        setContacts={props.setContacts}
      />
      <DeleteContact
        id={props.id}
        firstName={props.firstName}
        lastName={props.lastName}
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        contacts={props.contacts}
        setContacts={props.setContacts}
      />
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
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

export default Contact;
