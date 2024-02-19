import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());




app.get('/' , (req , res) => {
    res.status(200).send('Recipe App');
})

app.get('/api/recipes' , (req , res) => {
    res.status(200).send('Recipes');
})



// _____ Connect to the Database _____ //
const ConnectToDatabase = async () =>{
    try{
        mongoose.set('strictQuery' , false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Succesfully Connected.');
    }catch(error){
        console.log('Database Connection Failed');
    }
    console.log('-----------------------------------------------------');
}

// _____ Server Starts Listening _____ //
const PORT = process.env.PORT;
function Server(){
    ConnectToDatabase();
    app.listen(PORT, ()=>{
        console.log('-----------------------------------------------------');
        console.log(`Server is listening on port ${PORT}..`);
        console.log('-----------------------------------------------------');
        
    });
}
Server();