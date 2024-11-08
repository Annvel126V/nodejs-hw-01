import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

/**
 * Генерує певну кількість нових контактів та додає їх до db.json.
 * @param {number} number - Кількість контактів, які потрібно згенерувати.
 */

const generateContacts = async (number) => {
  try {
    // Зчитуємо існуючі контакти з файлу
    const existingContacts = await readContacts();
    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, createFakeContact);
    // Об'єднуємо існуючі і нові контакти
    const updatedContacts = [...existingContacts, ...newContacts];
    // Записуємо оновлений список контактів у файл db.json
    await writeContacts(updatedContacts);
    console.log(
      `${number}new contacts have been generated and added to db.json`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
