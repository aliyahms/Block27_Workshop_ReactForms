import React from "react";

export async function Authenticate() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    setStatus(result.message);
  } catch (e) {
    setStatus(e.message);
  }

  return (
    <>
      <h2>Authenticate!</h2>
      <button> Authenticate Token</button>
    </>
  );
}
