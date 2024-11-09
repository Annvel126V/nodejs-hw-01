import { PATH_DB } from '../constants/constants.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    // Зчитуємо вміст файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсимо JSON, щоб повернути як об'єкт
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error; // Передаємо помилку далі
  }
};
