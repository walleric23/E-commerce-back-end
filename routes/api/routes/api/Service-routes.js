const router = require("express").Router();
const { Service, Provider } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const serviceData = await Service.findAll({ include: Provider });
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const serviceData = await Service.findAll(req.params.id, {
      include: Provider,
    });
    if (!serviceData) {
      res.status(404).json({ message: "couldn't find the service" });
    } else {
      res.status(200).json(serviceData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const serviceData = await Service.create(req.body);
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const serviceData = await Service.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!serviceData[0]) {
      res.status(404).json({ message: "couldn't find the service" });
      return;
    }
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const serviceData = await Service.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (serviceData) {
      res.status(200).json(serviceData);
    } else {
      res.status(404).json({ message: "couldn't find the service" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
