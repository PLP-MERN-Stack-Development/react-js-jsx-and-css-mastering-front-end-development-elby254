// Import React hooks and necessary components
import { useState, useEffect } from 'react';
import ProductForm from './ProductForm';        // Form for adding new products
import ProductCard from './ProductCard';        // Card layout for displaying each product
import { fetchProducts, createProduct, deleteProduct, updateProduct } from '../lib/api'; // API functions for backend communication

// Main Home component (acts as the main page for the product dashboard)
export default function Home() {
  // Local state variables
  const [products, setProducts] = useState([]);   // List of products fetched from backend
  const [loading, setLoading] = useState(false);  // Tracks if data is currently loading
  const [error, setError] = useState('');         // Stores any error messages

  // Fetch products on page load
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);                // Show loading message
        const data = await fetchProducts(); // Call backend to get all products
        setProducts(data);               // Save fetched products to state
      } catch (error) {
        setError(error.message);         // If API fails, display error
      } finally {
        setLoading(false);               // Stop loading message
      }
    };

    loadProducts(); // Run once when page loads
  }, []); 

  // Add a new product (via the form)
  async function handleAdd(product) {
    const newProduct = await createProduct(product);          // Send POST request to backend
    setProducts(prev => [newProduct, ...prev]);               // Add new product to top of the list
  }

  // Edit existing product by ID
  async function handleEdit(st) {
    const updated = await updateProduct(st._id, st);          // Send PUT request with updated data
    setProducts(prev => prev.map(p => (p._id === updated._id ? updated : p))); // Replace updated product in the list
  }

  // Delete a product by ID
  async function handleDelete(id) {
    await deleteProduct(id);                                  // Send DELETE request to backend
    setProducts(prev => prev.filter(p => p._id !== id));      // Remove deleted product from local list
  }

  // Render UI
  return (
    <main className="p-4">
      {/* ProductForm component for adding new items */}
      <ProductForm onSubmit={handleAdd} />

      {/* Show messages for loading or errors */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Render all products as ProductCard components */}
      {products.map(s => (
        <ProductCard
          key={s._id}
          product={s}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </main>
  );
}

