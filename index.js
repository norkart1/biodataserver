import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import biodataRoutes from './routes/biodataRoutes.js';
import './cron/dailyTasks.js'; // Cron Job

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use('/api/biodata', biodataRoutes);

app.get('/', (req, res) => res.send('Biodata API Running'));

app.listen(process.env.PORT || 5000, () =>
  console.log(`\u{1F680} Server running on port ${process.env.PORT || 5000}`)
);