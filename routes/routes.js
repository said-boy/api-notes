import { Router } from 'express';
import { handleRead, handleReadById } from '../controllers/read.js';
import { handleCreate } from '../controllers/create.js';
import { handleUpdate } from '../controllers/update.js';
import { handleDelete } from '../controllers/delete.js';

const router = Router();

router.get('/', handleRead);
router.get('/:id', handleReadById);
router.post('/create', handleCreate);
router.put('/:id/edit', handleUpdate);
router.delete('/:id/delete', handleDelete);

export default router;
