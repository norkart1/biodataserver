import express from 'express';
import { submitBiodata } from '../controllers/biodataController.js';

const router = express.Router();

// POST route to submit biodata form
router.post('/', submitBiodata);

export default router;