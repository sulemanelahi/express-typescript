import express from 'express';
import { create, read, search } from '../controllers/model';
// ------------------------------------------------------------
const router = express.Router({ mergeParams: true });

// router.post('/', upload.single('picture'), create);
router.post('/', create);
router.get('/', read);
router.get('/search', search);

export default router;
