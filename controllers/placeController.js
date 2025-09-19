import Place from "../models/Place.js";

export const addPlace = async (req, res) => {
  try {
    const newPlace = new Place(req.body);
    const savedPlace = await newPlace.save();
    res.status(201).json(savedPlace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: "Place not found" });
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPlace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePlace = async (req, res) => {
  try {
    await Place.findByIdAndDelete(req.params.id);
    res.json({ message: "Place deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
