import mongoose from 'mongoose';
import { DatabaseConnectionError } from './errors/database-connection-error';
import {app} from './app';

// Connect to DB
try{
    mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
}
catch(err){
    throw new DatabaseConnectionError();
}
// END Connect DB

app.listen(3000, () => {
    console.log('listening on port 3000')
});
