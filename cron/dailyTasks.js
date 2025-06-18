import cron from 'node-cron';
import chalk from 'chalk';
import Biodata from '../models/Biodata.js';

cron.schedule('0 0 * * *', async () => {
  const time = new Date().toLocaleString();
  console.log(
    chalk.magenta.bold('🧹 [Cron Job] Running daily biodata cleanup @') +
    chalk.cyan(` ${time}`)
  );

  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  try {
    const result = await Biodata.deleteMany({ createdAt: { $lt: cutoff } });
    console.log(
      chalk.greenBright(`✅ ${result.deletedCount} old entries deleted successfully.`)
    );
  } catch (err) {
    console.error(
      chalk.redBright('❌ Error during biodata cleanup → ') + chalk.yellow(err.message)
    );
  }
});