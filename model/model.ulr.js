import mongoose from 'mongoose';

const ulrSchema = new mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true,
    },
    RedirectUrl  : {
        type : String,
        required : true,
    },
    visitHistory : [{ timestamp : { type : Number}}],
},
    {timestamp : true },
);


export const URL = mongoose.model('url' ,ulrSchema);

