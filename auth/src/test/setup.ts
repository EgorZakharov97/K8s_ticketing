import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo: any;
process.env.JWT_KEY = 'sukablyat';

// Create database connection
beforeAll(async () => {
    process.env.JWT_KEY = 'sukablyat';
    mongo = await MongoMemoryServer.create();
    const Uri = mongo.getUri();

    await mongoose.connect(Uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

// Clear database
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for(let collection of collections){
        await collection.deleteMany({});
    }
});

// Close database
afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
})
