# CRUD App
Ashlyn DeVries

## Frameworks
- **Front-End:** React + MUI
- **Back-End:** JavaScript
- **Database:** Firebase (Firestore)

## Project Directory
- [App.jsx](./crud-app/src/App.jsx)
  - Acts as a container for the [Heading](./crud-app/src/components/Heading.jsx), [SubHeading](./crud-app/src/components/SubHeading.jsx), 
    [SearchBar](./crud-app/src/components/SearchBar.jsx), and list of [Contacts](./crud-app/src/components/Contact.jsx).
- `/components`
  - Stores each of the components referenced above, as well as the [AddContact](./crud-app/src/components/AddContact.jsx), 
    [EditContact](./crud-app/src/components/EditContact.jsx), and [DeleteContact](./crud-app/src/components/DeleteContact.jsx) `Dialogs`.
- `/database`
  - Stores the Firebase [configuration file](./crud-app/src/database/firebase.js) (which exports a Firestore instance that is associated
    with the provided @firebase/app#FirebaseApp), as well as the [CRUD file](./crud-app/src/database/CRUD.js) which enables the following operations.

## Operations
- CREATE
  - Create a new entry in the database by entering a First Name, Last Name, and Phone Number in the `Dialog` 
    after clicking "Add Contact". All fields are required and Phone Number must conform to the format ###-###-####.
- READ
  - On app load, all contacts are retrieved from the database. If no contacts exist in the database a simple 
    "You have no contacts." message is displayed.
- UPDATE
  - Clicking on any contact will trigger a `Dialog` where a user can edit any of the three fields: First Name, 
    Last Name, or Phone Number.
- DELETE
  - Clicking on the trash can will trigger a `Dialog` asking for deletion confirmation. Pressing "Cancel"
    will close the `Dialog` without deleting; "Confirm" will delete the record permanently.
- SEARCH
  - By typing in the search bar, all contacts will be filtered according to Last Name.

## Running the Application

To run the application simply `git clone https://github.com/ashlyndevries/CRUD-App.git`. `cd` into `crud-app` 
and run `npm run dev`. Click on the localhost link output to the console and begin interacting with my app in your browser!

**Please note:** I instantiated my Firebase database in *test mode* (rather than *production mode*) so anyone with my Firestore
database reference can view, edit, and delete data. These rules are set to expire after **30 days**, after which all client
requests to my Firestore database will be denied for security reasons.
