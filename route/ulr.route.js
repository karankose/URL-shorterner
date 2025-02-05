import express from 'express';
import { CreateNewUlr } from '../controller/ulr.js';
export  const router = express.Router();


router.post('/',CreateNewUlr);

