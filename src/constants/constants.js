import path from 'node:path';
//  Встановлюємо абсолютний шлях до файлу db.json
export const PATH_DB = path.resolve(process.cwd(), 'src', 'db', 'db.json');
