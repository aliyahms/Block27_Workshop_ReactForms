import { useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

export default function SignUpForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello  👋 ");
  }

  return (
    <>
      <h2>Sign Up!</h2>
      <form>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      ;
    </>
  );
}
