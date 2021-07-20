import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const toNumber: string = process.env.NODEMAILER_PORT;
const port = parseInt(toNumber, 10);

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_USER,
  service: '',
  port,
  secure: false,
});

export { transporter };
