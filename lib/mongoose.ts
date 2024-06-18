
import mongoose from 'mongoose';
let isConnected =false;
export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URI) return console.log("MONGODB URI is not defined");
    if(isConnected) return console.log("=> using existing database connection.");
    try{
        await mongoose.connect(process.env.MONGODB_URI),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        
        };
        isConnected=true;
        console.log('MONGODB CONNECTED')


    }catch(error){
        console.log(error)

    }
}

//s3EBIMG4kXFR5yUD

//0g67VC2GxnLEYDvn

// mongodb+srv://avanish121299:<password>@cluster0.if6rtz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0