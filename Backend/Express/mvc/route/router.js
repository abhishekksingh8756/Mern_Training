import express from 'express';
import{addcontroller,readcontroller,delcontroller,editcontroller} from '../controller/controller.js'
const router = express.Router();
//api
router.post('/add',addcontroller);
router.get('/read',readcontroller);
router.delete('/del/:_id',delcontroller);
router.put('/edit/:_id',editcontroller);

export default router;