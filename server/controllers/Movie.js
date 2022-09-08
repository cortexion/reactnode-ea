const { Router } = require("express"); //import Router from express
const { loggerMiddleware } = require("./middleware"); //import loggerMiddleware custom middleware
const Movie = require("../models/Movie");
const router = Router();

router.get("/", loggerMiddleware, async (req, res) => {
    res.json(
        await Movie.find().catch((error) =>
            res.status(400).json({ error })
        )
    );
});

//show Route with loggerMiddleware middleware
router.get("/:id", loggerMiddleware, async (req, res) => {
    const _id = req.params.id; // get id from params
    res.json(
        await Movie.findOne({ username, _id }).catch((error) =>
            res.status(400).json({ error })
        )
    );
});

//create Route with loggerMiddleware middleware
router.post("/", loggerMiddleware, async (req, res) => {
    res.json(
        await Movie.create(req.body).catch((error) =>
            res.status(400).json({ error })
        ));
});

//update Route with loggerMiddleware middleware
router.put("/:id", loggerMiddleware, async (req, res) => {
    const _id = req.params.id;
    res.json(
        await Movie.updateOne(_id, req.body, { new: true }).catch(
            (error) => res.status(400).json({ error })
        )
    );
});

//delete Route with loggerMiddleware middleware
router.delete("/:id", loggerMiddleware, async (req, res) => {
    const _id = req.params.id;
    res.json(
        await Movie.remove(_id).catch((error) =>
            res.status(400).json({ error })
        )
    );
});

module.exports = router;