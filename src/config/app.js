import express from 'express';
import personController from '../controller/person.controller';
import './database'

const app = express();
app.set('port', 3000);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my app"
    });
});

app.use('/api/v1/person', personController);

export default app;