import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAppRstestConfig } from '../../config/rstest.base.ts';

export default createAppRstestConfig(path.dirname(fileURLToPath(import.meta.url)));
