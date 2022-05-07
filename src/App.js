import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Rules } from "./components/Rules";

function App() {
  const [edit, setEdit] = useState(false);
  const handleEdit = (value) => {
    setEdit(value);
  };
  return (
    <>
      <Navbar edit={edit} handleEdit={handleEdit}></Navbar>
      <Rules edit={edit}></Rules>
    </>
  );
}

export default App;
