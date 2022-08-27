import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface User {
  name: string;
  email: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form action="">
        <input type="text" name="name" id="" onChange={handleChange} />
        <input type="text" name="email" id="" onChange={handleChange} />
        <input type="text" name="password" id="" onChange={handleChange} />
      </form>
      <br />
      Username:{user?.name}
      <br />
      Email:{user?.email}
      <br />
      Password:{user?.password}
    </div>
  );
}

export default App;
