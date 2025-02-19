import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import AddContact from "./AddContact";

const SubHeading = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        onClick={handleClickOpen}
      >
        + Add Contact
      </Button>
      <AddContact open={open} handleClose={handleClose} />
    </Box>
  );
};

export default SubHeading;
