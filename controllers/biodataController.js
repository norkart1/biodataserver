import Biodata from '../models/Biodata.js';

export const submitBiodata = async (req, res) => {
  try {
    const newBiodata = new Biodata(req.body);

    await newBiodata.save();

    res.status(201).json({ message: 'Biodata submitted successfully' });
  } catch (error) {
    console.error('Error submitting biodata:', error);
    res.status(500).json({ error: 'Failed to submit biodata' });
  }
};