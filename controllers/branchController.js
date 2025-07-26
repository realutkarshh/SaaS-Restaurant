const Branch = require('../models/Branch');

exports.createBranch = async (req, res) => {
  try {
    const branch = new Branch(req.body);
    await branch.save();
    res.status(201).json({ message: 'Branch created!', branch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBranch = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).json({ message: 'Branch not found' });
    res.json(branch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!branch) return res.status(404).json({ message: 'Branch not found' });
    res.json({ message: 'Branch updated!', branch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) return res.status(404).json({ message: 'Branch not found' });
    res.json({ message: 'Branch deleted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
