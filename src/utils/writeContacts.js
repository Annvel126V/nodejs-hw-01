import { PATH_DB } from '../constants/constants.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    // Перетворюємо оновлені контакти на формат JSON з відступами для читабельності
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    // Записуємо JSON-дані у файл
    await fs.writeFile(PATH_DB, jsonData);
    console.log('Contacts successfully written to db.json');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error; // Передаємо помилку далі, щоб можна було обробити
  }
};
