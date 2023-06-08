const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const exercisesRouter = require('./routes/exercises');
//const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());


const authRoutes = require('./routes/auth');
//noconst userRoutes = require('./routes/users');
app.use('/api/auth', authRoutes); // Authentication routes
//app.use('/api/users', userRoutes); // User routes

require('dotenv').config();



const connection_string = process.env.ATLAS_URI;
mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
