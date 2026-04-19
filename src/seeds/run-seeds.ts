import { AppDataSource } from '../config/data_source.js';
import { runSeeders } from 'typeorm-extension';

async function run() {
  try {
    console.log('Connecting with database...');
    await AppDataSource.initialize();
    console.log('Connection stablished.');

    console.log('Running seeders...');
    await runSeeders(AppDataSource);
    console.log('Database filling process finished!');
  } catch (error) {
    console.error('Error durign seeding: ', error);
  } finally {
    await AppDataSource.destroy();
    process.exit();
  }
}

run();
