import { Router } from 'express';

import * as usersController from '../controllers/users';

const router = Router();

router.get('/items', usersController.getUsers);

router.get('/item', usersController.getUserById);

router.post('/item', usersController.createUser);

router.put('/item', usersController.updateUserById);

router.delete('/item', usersController.deleteUserById);

export default router;