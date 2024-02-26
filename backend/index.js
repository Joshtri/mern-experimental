import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/ProductRoute.js";

dotenv.config();

const app = express();



// Gunakan middleware Cors
app.use(cors());

// Gunakan middleware untuk membaca JSON
app.use(express.json());

// Gunakan router untuk rute produk
app.use(productRoute);


// Dapatkan port dari file .env
const PORT = process.env.APP_PORT;

// Mulai aplikasi pada port yang ditentukan
app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`); 
});
