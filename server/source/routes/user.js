import { Router } from 'express';

import * as userController from '../controllers/user';

const router = Router();

router.get('/', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateUserById);

router.delete('/', userController.deleteUserById);

export default router;