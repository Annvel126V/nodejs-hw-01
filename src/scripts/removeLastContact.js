import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
export const removeLastContact = async () => {
  try {
    // Зчитуємо існуючі контакти з файлу
    const existingContacts = await readContacts();
    // Видаляємо останній контакт
    const updatedContacts = existingContacts.slice(0, -1);
    // Записуємо оновлений список контактів у файл db.json
    await writeContacts(updatedContacts);
    console.log('Last contact has been removed from db.json');
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
