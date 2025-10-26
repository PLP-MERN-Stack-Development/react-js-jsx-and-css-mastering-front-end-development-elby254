const API_URL = "http://localhost:3000/api/products"; // points to your backend

// Fetch all products
export async function fetchProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

// Create a new product
export async function createProduct(product) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error("Failed to create product");
  return await res.json();
}

// Update product by ID
export async function updateProduct(id, product) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error("Failed to update product");
  return await res.json();
}

// Delete product by ID
export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to delete product");
  return await res.json();
}

