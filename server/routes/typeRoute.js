import express from 'express'
import Category from '../models/typeModel.js';

const typeRouter = express.Router();

//for fetch or get category from db
typeRouter.get("/", async(req, res) => {
console.log("we are inside")
    const category = await Category.find();
    res.send(category);
});

export default typeRouter;