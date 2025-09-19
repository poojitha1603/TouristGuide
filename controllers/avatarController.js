import Avatar from "../models/Avatar.js";

export const addAvatar = async (req, res) => {
  try {
    const newAvatar = new Avatar(req.body);
    const savedAvatar = await newAvatar.save();
    res.status(201).json(savedAvatar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAvatars = async (req, res) => {
  try {
    const avatars = await Avatar.find();
    res.json(avatars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAvatarById = async (req, res) => {
  try {
    const avatar = await Avatar.findById(req.params.id);
    if (!avatar) return res.status(404).json({ message: "Avatar not found" });
    res.json(avatar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAvatar = async (req, res) => {
  try {
    const updatedAvatar = await Avatar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAvatar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAvatar = async (req, res) => {
  try {
    await Avatar.findByIdAndDelete(req.params.id);
    res.json({ message: "Avatar deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
