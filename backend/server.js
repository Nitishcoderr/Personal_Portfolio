import {app} from './app.js'
import dotenv from "dotenv"
import { connectDatabase } from './config/database.js'

dotenv.config({path:'./backend/config/config.env'})

connectDatabase();

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on poort http://localhost:${PORT}`);
})