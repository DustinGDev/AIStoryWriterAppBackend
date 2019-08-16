const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:betadelta11@cluster0-sacx6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("AIStoryWriter").collection("Users");
    // perform actions on the collection object
    const test = {name: 'default', passsword: 'test'};
    collection.insertOne(test, (err, res) => {
        if(err) throw err
        client.close();
        console.log('success')
    })
});