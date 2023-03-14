const router = require("express").Router();
const { Review, Provider } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const reviewData = await Review.findAll({ include: Provider });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Review.findAll(req.params.id, {
      include: Provider,
    });
    if (!reviewData) {
      res.status(404).json({ message: "couldn't find reviews" });
    } else {
      res.status(200).json(reviewData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const reviewData = await Review.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!reviewData[0]) {
      res.status(404).json({ message: "couldn't find review" });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (reviewData) {
      res.status(200).json(reviewData);
    } else {
      res.status(404).json({ message: "couldn't find review" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
