const {
  NODE_ENV,
  APP_PORT: APP_PORT_ENV,
  DB_HOST_READ = '',
  DB_HOST_WRITE = '',
  DB_READ: DB_USER_READ = '',
  DB_READ_PASS: DB_PASS_READ = '',
  DB_WRITE: DB_USER_WRITE = '',
  DB_WRITE_PASS: DB_PASS_WRITE = '',
  DB_NAME = '',
  DB_PORT = 3306,
  SECRET = '',
  APP_URL = "",
} = process.env;

export const ENVIRONMENT = NODE_ENV;

export const APP_PORT = Number(APP_PORT_ENV);
export const API_BASE_PATH_V1 = '/api/v1';

export const DB_CONFIGURATION = {
  DB_NAME,
  DB_PORT,
  DB_HOST_READ,
  DB_HOST_WRITE,
  DB_USER_READ,
  DB_USER_WRITE,
  DB_PASS_READ,
  DB_PASS_WRITE
};

export const APP_MAIN_URL = APP_URL;

export const LOGIN_VERIFICATION_CODE_AGE_IN_MILLISECONDS = 15 * 60 * 1000;

export const JWT_SECRET = SECRET;
export const JWT_LIFETIME = '10h';

export const CRYPTO_SECRET = SECRET;