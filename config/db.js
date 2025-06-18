import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      chalk.greenBright.bold('✅ [MongoDB] Connection Successful → ') +
      chalk.cyanBright(mongoose.connection.host)
    );
  } catch (err) {
    console.error(
      chalk.redBright.bold('❌ [MongoDB] Connection Failed → ') +
      chalk.yellow(err.message)
    );
    process.exit(1);
  }
};

export default connectDB;