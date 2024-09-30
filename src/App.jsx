import { useState } from "react";
import SignUpForm from "./SignUpForm";
import Authenticate from "./Authenticate";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

export default App;
