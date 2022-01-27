import { Router } from 'express';
import { protect, admin} from '../middlewares/authMiddlewares.js';
import { getProducts, createdProduct, createdProductReview, updateProduct, getProductById } from '../controllers/productController.js';

const router = Router();

router.get('/',  getProducts);
router.post('/',protect,admin,createdProduct);
router.post('/:id/reviews',protect,admin,createdProductReview);
router.put('/:id',protect,admin,updateProduct);
router.get('/:id',getProductById);

export default router;