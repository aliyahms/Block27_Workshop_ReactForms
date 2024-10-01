import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup";

  function setToken(props) {
    const { token, setToken } = props; // desconstruct the setToken function from props ???
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw Error(response.statusText);
      const result = await response.json();
      console.log(result);
      setUsername(result.username); // come back to change this
      setPassword(result.password); // come back if need to delete
      setToken(result.token);
      setStatus(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button>Submit</button>
      </form>
      ;
    </>
  );
}
