import * as dotenv from 'dotenv';
import { ActiveDirectory } from 'node-ad-tools';

dotenv.config();

const config = {
  url: process.env.AD_LDAP,
  base: process.env.AD_BASE,
};

const ADPromisses = new ActiveDirectory(config);

export { ADPromisses };
