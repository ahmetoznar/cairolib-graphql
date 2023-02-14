import createDeployedContracts from './deployed-contract';
import createAuthors from './author';
import createFiles from './file';
import createConfig from './config';
export default async function bootstrap() {
  try {
    await createAuthors();
    await createDeployedContracts();
    await createFiles();
    await createConfig();
    console.log('Seed Successfuly...');
  } catch (err) {
    console.log('err', err)
    throw new Error('Seed error');
  }
}
bootstrap();