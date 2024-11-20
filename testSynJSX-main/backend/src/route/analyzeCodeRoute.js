import { Router } from 'express';
import { analyzeCode } from '../controller/AnalyzeCodeController.js';

const router = Router();

router.post('/analyze', analyzeCode);

export default router;