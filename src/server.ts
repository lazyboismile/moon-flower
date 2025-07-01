import dotenv from 'dotenv';
dotenv.config();
import app from "./app";

import mongoose from 'mongoose';

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log('MongoDB Connected...');
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, () =>  {
            console.info(`Server running on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`);
        });
    })
    .catch((err) => console.error('Error on connection MongoDB', err));