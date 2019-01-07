const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('TasksApp');
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server!!!');

//Create Documents
    // db.collection('Tasks').insertOne({
    //     taskName: 'Get some clothes',
    //     completed: true
    // }, (err, result) => {
    //     if(err) {
    //         console.log('there was something going wrong when entering data!');
    //     }

    //     console.log(result.ops[0].taskName);
    // })

    //Delete Document (has a couple of delete options)

    //deleteMany

    // db.collection('Tasks').deleteMany({taskName: 'Get some games'}).then((result) => {
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Tasks').deleteOne({taskName: 'Get some food'}).then((result) => {    
    //     console.log(result);
    // })
    
    //findOneAndDelete
    // db.collection('Tasks').findOneAndDelete({taskName: 'Get a cpu'}).then((result) => {    
    //     console.log(result);
    // });

    //Read / Find all data
    //If you're creating a rest API, use this method
    // db.collection('Tasks').find().toArray().then((count) => {
    //     console.log(result);
    // })

    //Find one item in array
    // db.collection('Tasks').find({taskName: 'Get a bag'}).toArray().then((result) => {
    //     console.log(result);
    // });

    //Update
    dbcollection('Tasks').updateMany({taskName: 'Get a bag'}, {
        $set: {
            completed: false
        }
    }).then((result) => {
        console.log(result);
    });

    client.close();
})