const router = require("express").Router();
const { ProviderInfo, Provider } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const providerInfoData = await providerInfoData.findAll({
      include: Provider,
    });
    res.status(200).json(providerInfoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ProviderInfo = await ProviderInfo.findAll(req.params.id, {
      include: Provider,
    });
    if (!providerInfoData) {
      res.status(404).json({ message: "couldn't find reviews" });
    } else {
      res.status(200).json(providerInfoData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const providerInfoData = await ProviderInfo.create(req.body);
    res.status(200).json(providerInfoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const providerInfoData = await ProviderInfo.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!providerInfoData[0]) {
      res.status(404).json({ message: "couldn't find info on provider" });
      return;
    }
    res.status(200).json(providerInfoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const providerInfoData = await ProviderInfo.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (providerInfoData) {
      res.status(200).json(providerInfoData);
    } else {
      res.status(404).json({ message: "couldn't find info on provider" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
