import fs from 'fs';
import path from 'path';

export function getImagesFromDirectory(dirPath: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), 'public', dirPath);
    const files = fs.readdirSync(fullPath);
    return files
      .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      })
      .map(file => path.join('/', dirPath, file));
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}
