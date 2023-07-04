import { Router } from "express"
import axios from "axios";

const photosRouter = Router()

photosRouter.get("/photos", async (req, res) => {
  const { page, category } = req.query;
  try {
    const apiKey = "25540812-faf2b76d586c1787d2dd02736";
    const response = await axios.get(
      `https://pixabay.com/api/?key=${apiKey}&q=${category}&page=${page}&per_page=9`
    );
    const data = response.data.hits;

    res.json(data);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

export {photosRouter}