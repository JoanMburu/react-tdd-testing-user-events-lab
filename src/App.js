import React, { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interests: {
      frontend: false,
      backend: false,
      fullstack: false,
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormState((prevState) => ({
        ...prevState,
        interests: {
          ...prevState.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              name="frontend"
              type="checkbox"
              checked={formState.interests.frontend}
              onChange={handleChange}
            />
            Frontend
          </label>
          <label>
            <input
              name="backend"
              type="checkbox"
              checked={formState.interests.backend}
              onChange={handleChange}
            />
            Backend
          </label>
          <label>
            <input
              name="fullstack"
              type="checkbox"
              checked={formState.interests.fullstack}
              onChange={handleChange}
            />
            Fullstack
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Thanks for signing up!</p>}
    </main>
  );
}

export default App;
