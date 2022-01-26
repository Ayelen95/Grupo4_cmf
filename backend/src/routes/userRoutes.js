import { Router } from 'express';
import { registerUser, authUser, getUserProfile ,getUsers, getUserById, updateUserProfile, deleteUser, updateUser } from '../controllers/userController.js';
import { protect, admin } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/',getUsers);
router.get('/:id', getUserById);
router.delete('/:id',protect,admin,deleteUser);
router.put('/:id',protect,admin,updateUser);

export default router;