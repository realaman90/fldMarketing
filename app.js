const dotenv = require ('dotenv');
dotenv.config();
const express = require('express');

//Database
const connectDB = require('./database/connect');


const helmet = require('helmet');
const morgan = require('morgan')
const cors = require('cors');
const mongoSanatize = require('express-mongo-sanitize');


//Express
const app = express();

//middleware
app.use(helmet());
app.use(cors());
app.use(mongoSanatize());
app.use(morgan('tiny'));
app.use(express.json());




//Router
const services = require('./route/service.route')


//apis service
app.use('/api/v1/',services)
// app.use((req,res)=>{console.log(req.body)})

const port = process.env.PORT || 8000;

const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`Server is listening to ${port}....`));

        
    } catch (error) {
        console.log(error)
    }
};

start();