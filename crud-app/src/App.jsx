import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { readContacts } from "./services/CRUD";
import Contact from "./components/Contact";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await readContacts();
      setContacts(allContacts);
      setLoading(false);
    };

    getAllContacts();
  }, []);

  return (
    <Box sx={{ minWidth: "50vw" }}>
      <Heading />
      <SubHeading contacts={contacts} setContacts={setContacts} />
      <SearchBar
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
      />
      {loading ? (
        <CircularProgress />
      ) : contacts.length !== 0 ? (
        filteredContacts.map((c) => (
          <Contact
            key={c.id}
            id={c.id}
            firstName={c.firstName}
            lastName={c.lastName}
            number={c.number}
            contacts={contacts}
            setContacts={setContacts}
          />
        ))
      ) : (
        <Typography sx={{ pt: 2 }}>You have no contacts.</Typography>
      )}
    </Box>
  );
}

export default App;
