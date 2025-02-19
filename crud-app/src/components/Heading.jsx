import { Box, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";

const Heading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        pb: 3,
      }}
    >
      <ContactsIcon sx={{ pr: 1 }} />
      <Typography variant="h5" fontWeight="bold">
        Phone Book App
      </Typography>
    </Box>
  );
};

export default Heading;
