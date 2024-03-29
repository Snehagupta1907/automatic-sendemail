import express from 'express';
import { sendEmailController } from '../controllers/sendEmailController.js';
const router=express.Router();


router.get('/',(req,res)=>{
    res.send('Hello World');
})
router.post('/send-email',sendEmailController);

export default router;