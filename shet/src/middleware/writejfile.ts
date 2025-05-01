import { promises as fs } from 'fs';
import path from 'path';
import { User } from '../modules/user';

const filePath = path.join(__dirname, '../../users.json');

export async function readJsonFile(): Promise<User[]> {
try {
    await fs.access(filePath);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as User[];
} catch (e) {
    throw new Error(`Failed to read users.json`);
}
}

export async function writeJsonFile(user: User): Promise<void> {
try {
    let users: User[] = [];

    try {
    await fs.access(filePath);
    const rawData = await fs.readFile(filePath, 'utf-8');
    users = JSON.parse(rawData) as User[];
    } catch {
    users = [];
    }

    if (!user.username || !user.email || !user.password) {
    throw new Error('Invalid user data: name, email, and password are required');
    }

    users.push(user);

    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
} catch (error) {
    throw new Error(`Failed to write to users.json: ${error}`);
}
}