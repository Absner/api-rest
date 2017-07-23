
import * as mongoose from 'mongoose';
import * as Promise_ from 'bluebird';

Promise_.promisifyAll(mongoose);
(<any>mongoose).Promise = Promise_;

var dbURI = 'mongodb://localhost/prueba_01';

if (process.env.MONGODB_URI) {
    dbURI = process.env.MONGODB_URI;
}

var db = mongoose.connection;
db.on('connecting', function () {});

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});
db.on('connected', function () {
    console.log('connected to mongodb!');
});
db.once('open', function () {});
db.on('reconnected', function () {
    console.log('reconnected to mongodb');
});
db.on('disconnected', function () {
    console.log('disconnected to mongodb');
    mongoose.connect(dbURI, { 
        server: { 
            auto_reconnect: true, 
            useMongoClient: true,
            socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } 
        }, 
            replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
        });
});
mongoose.connect(dbURI, { server: { 
    auto_reconnect: true,
    useMongoClient: true,
 } });

export { mongoose };