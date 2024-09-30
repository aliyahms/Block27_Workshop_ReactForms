import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup";

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error(response.statusText);
      const result = await response.json();
      setContacts(result);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
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
