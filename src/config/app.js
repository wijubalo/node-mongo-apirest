import express from 'express';
import task from '../task';
import person from '../person';
import '../database'

const app = express();
app.set('port', 3000);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my app"
    });
});

app.use('/api/vi/task', task);
app.use('/api/vi/person', person);

export default app;