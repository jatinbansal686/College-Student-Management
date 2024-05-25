import axios from "axios";

export default axios.create({
  baseURL:
    // "https://kollege-api.onrender.com",
    // "http://localhost:3500",
    // "http://192.168.92.252:3500/",
    "http://192.168.107.252:3500/",
  // "https://6d0d-2409-40d1-8d-93a3-68d8-a694-3ada-e1ec.ngrok-free.app/",
  // "https://5d31-2409-40d1-8b-6592-94a1-482c-f98c-50bc.ngrok-free.app/",

  headers: { "Content-Type": "application/json" },
});
