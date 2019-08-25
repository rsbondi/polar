import { join, dirname } from 'path';
import { promises as fs } from 'fs';
import { dataPath } from './config';

/**
 * Writes data to file located in the app's data directory
 * @param filePath the path to the file, relative to the app's data dir
 * @param content the contents of the file
 */
export const writeDataFile = async (filePath: string, content: string) => {
  const absPath = join(dataPath, filePath);
  const dirPath = dirname(absPath);
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(absPath, content);
};