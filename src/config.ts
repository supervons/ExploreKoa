import * as dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  PORT_REDIS,
  HOST_REDIS,
  PASSWORD_REDIS,
  FILE_UPLOAD_PATH
} = process.env;
