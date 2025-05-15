import 'dotenv/config'; // Ensures .env is loaded at the very start
import { App } from './code/application';
import { Logger } from './code/infrastructure';

process.on('unhandledRejection', (reason, promise) => {
  console.error('CRITICAL: Unhandled Rejection at:', promise, 'reason:', reason);
  // Consider exiting the process, or other cleanup. For now, just log.
  // process.exit(1); 
});

process.on('uncaughtException', (error) => {
  console.error('CRITICAL: Uncaught Exception:', error);
  // Consider exiting the process, or other cleanup. For now, just log.
  // process.exit(1);
});

async function bootstrap() {
    const logger = Logger.getInstance(); // Get logger instance
    logger.logInfo("Bootstrapping Home Control Hub application...");
    
    const app = new App();
    try {
        await app.start();
        logger.logInfo("Home Control Hub application is running.");
    } catch (error) {
        logger.logError("Critical error during application bootstrap or start:");
        logger.logError(error instanceof Error ? error : String(error));
        process.exit(1);
    }
}

bootstrap();
