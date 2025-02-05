import { nanoid } from "nanoid";
import {URL} from '../model/model.ulr.js';

   export const   CreateNewUlr   =  async function (req ,res ,next){
    const shortId = nanoid();
    const body = req.body();
    if(!body.url) return res.status(400).json({ mes : "ulr must needed"})
    await URL.create({
        shortId : shortId,
        RedirectUrl : body.url,
        visitHistory  : [],
    })
    return res.json({ id : shortId })
}



