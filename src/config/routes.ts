import { Application } from 'express';
import { API_BASE_PATH_V1 } from './constants';
import authRoutes from '../routes/auth';
import fileRoutes from '../routes/file';

export default (application: Application): void => {
  application.use(`${API_BASE_PATH_V1}/auth`, authRoutes);
  application.use(`${API_BASE_PATH_V1}/file`, fileRoutes);
}
