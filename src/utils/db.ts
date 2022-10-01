import mongoose from "mongoose";
import { config } from "./config";
import { logger } from "./logger";

export async function connectToDb() {
    try {
        await mongoose.connect(config.DATABASE_URL);
        logger.info(
            `Connected to database`
        );
    } catch (e) {
        process.exit(1);
        logger.error(e);
    }
}

export function disconnectFromDb() {
    return mongoose.connection.close();
}
