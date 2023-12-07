export const INITIAL_BALANCE = 0;
import { UUID } from 'angular2-uuid';
const BANK_DATABASE = 'bank_database';
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

  const database = localStorage.getItem(BANK_DATABASE);
  if (!database) {
    localStorage.setItem(BANK_DATABASE, JSON.stringify(initial_data));
  }
};

export const save_user = (user: any) => {
  const database = localStorage.getItem(BANK_DATABASE);
  if (database) {
    const data = JSON.parse(database);
    data.push(user);

    localStorage.setItem(BANK_DATABASE, JSON.stringify(data));
  }
};

export const generateUUID = () => {
  return UUID.UUID();
};
