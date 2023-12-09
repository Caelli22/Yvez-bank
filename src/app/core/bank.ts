import { UUID } from 'angular2-uuid';
import * as crypto from 'crypto-js';

export const INITIAL_BALANCE = 0;
const BANK_DATABASE = 'bank_database';
const CRYPTO_KEY = 'yvez-bank-001';
export const initialize_bank_database = () => {
  console.info('Initializing Database');
  const initial_data = [
    {
      uuid: generateUUID(),
      username: 'yvezadmin',
      pin: '1234',
      contact_number: '99999999',
      balance: 10000000,
    },
  ];

  // const database = localStorage.getItem(BANK_DATABASE);
  // if (!database) {
  //   localStorage.setItem(BANK_DATABASE, encrypt(initial_data));
  // }
  const database = localStorage.getItem(BANK_DATABASE);
  if (!database) {
    localStorage.setItem(BANK_DATABASE, JSON.stringify(initial_data));
  }
};

// export const save_user = (user: any) => {
//   const database = localStorage.getItem(BANK_DATABASE);
//   if (database) {
//     const data = decrypt(database);
//     //console.table('Database', data);
//     data.push(user);

//     localStorage.setItem(BANK_DATABASE, encrypt(data));
//   }
// };
export const save_user = (user: any) => {
  const database = localStorage.getItem(BANK_DATABASE);
  if (database) {
    const data = JSON.parse(database);
    //console.table('Database', data);
    data.push(user);

    localStorage.setItem(BANK_DATABASE, JSON.stringify(data));
  }
};

export const generateUUID = () => {
  return UUID.UUID();
};

export const encrypt = (value: any) => {
  const encrypted = crypto.AES.encrypt(
    JSON.stringify(value),
    CRYPTO_KEY
  ).toString();
  return encrypted;
};

export const decrypt = (encrypted: string) => {
  const bytes = crypto.AES.decrypt(encrypted, CRYPTO_KEY);
  return JSON.parse(bytes.toString(crypto.enc.Utf8));
};
