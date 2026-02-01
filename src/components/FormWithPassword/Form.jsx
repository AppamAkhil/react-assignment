import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    id: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const validate = () => {
    let e = {};
    if (!form.name) e.name = "Name required";
    if (!form.id) e.id = "ID required";
    if (!form.password) e.password = "Password required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setSubmitted(form);
    setForm({ name: "", email: "", id: "", password: "" });
    setErrors({});
  };

  return (
    <div className="section">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <p>{errors.name}</p>

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <p>{errors.email}</p>

        <input
          placeholder="ID"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <p>{errors.id}</p>

        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
        <p>{errors.password}</p>

        <button>Submit</button>
      </form>

      {submitted && <pre>{JSON.stringify(submitted, null, 2)}</pre>}
    </div>
  );
}
