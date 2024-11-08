import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Зчитуємо існуючі контакти з файлу
    const existingContacts = await readContacts();
    // Генеруємо новий контакт
    const newContact = createFakeContact();
    // Додаємо новий контакт до масиву існуючих контактів
    const updatedContacts = [...existingContacts, newContact];
    // Записуємо оновлений масив контактів у файл db.json
    await writeContacts(updatedContacts);
    console.log('One new contact has been added to db.json');
  } catch (error) {
    console.error('Error adding new contact:', error);
  }
};
// Викликаємо функцію для додавання одного контакту
addOneContact();
