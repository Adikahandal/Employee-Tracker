import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });

// Import and use routes
import employeeRoutes from './routes/EmployeeRoutes.js';
app.use('/api/employees', employeeRoutes);
