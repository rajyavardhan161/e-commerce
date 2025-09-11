import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api-e-commerace-in-node-js.onrender.com/product/all");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
