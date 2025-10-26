// Import the useState hook from React
import { useState } from "react";

// This component renders the form used to add new products
export default function ProductForm({ onSubmit }) {

  // State to store the input form values
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  // This function runs whenever the user types in an input field
  const handleChange = (e) => {
    const { name, value } = e.target;          // Extract field name and value
    setForm((f) => ({ ...f, [name]: value })); // Update the form state
  };

  // This function handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload when submitting

    // If any field is empty, stop the function
    if (!form.name || !form.price || !form.description) return;

    // Pass the new product data to the parent component (Home.jsx)
    onSubmit({ ...form, price: Number(form.price) });

    // Clear the form after submission
    setForm({ name: "", price: "", description: "" });
  };

  // JSX returned by the component (UI for the form)
  return (
    <form
      onSubmit={handleSubmit}  // Trigger handleSubmit when form is submitted
      className="rounded-xl border p-4 bg-white flex flex-wrap gap-2"
    >
      {/* Product Name input */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border rounded-lg p-2 px-3 py-2 flex-1"
      />

      {/* Product Description input */}
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border rounded-lg px-3 py-2 flex-1"
      />

      {/* Product Price input */}
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="border rounded-lg p-2 px-3 py-2 w-24"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-600 text-white text-xs rounded-lg px-4 py-2 hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}


