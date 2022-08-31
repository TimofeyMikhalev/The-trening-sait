import express from 'express';
import Datastore from 'nedb';

const app = express(function(){});
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));


const database = new Datastore('database.js');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err, data) => { //хочу вызвать find вернуть данные, а затем передать данные клиенту
        if(err){
            response.end();
            return;
        }
        response.json(data);
    });
    
})


app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    
    database.insert(data);
    response.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon,
        names: data.names
    });

});

