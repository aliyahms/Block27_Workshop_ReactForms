import React from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

export default async function Authenticate() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setStatus(result.message);
  } catch (e) {
    setStatus(e.message);
  }

  return (
    <>
      <SignUpForm setToken={setToken} setStatus={setStatus} />
      <hr />
      <p>{status}</p>
      <h2>Authenticate!</h2>
      {token && (
        <button onClick={Authenticate}> Authenticate Token</button>
      )}{" "}
    </>
  );
}
