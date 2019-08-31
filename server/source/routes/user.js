import { Router } from 'express';

import * as userController from '../controllers/user';

const router = Router();

router.get('/', userController.getUserById);

router.post('/', userController.createUser);

export default router;