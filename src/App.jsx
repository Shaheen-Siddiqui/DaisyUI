import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContacts from "./components/UserContacts";
import ModelBox from "./components/ModelBox";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <UserContacts />
      <ModelBox/>
    </div>
  );
}

export default App;
