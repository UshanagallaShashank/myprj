import mongoose, { connection }  from "mongoose";
 export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI);
        connection.on('connected',()=>{
            console.log('MoogoDB connected successfully')
        })
            connection.on('error',(err)=>{
                console.log("MongoDb connection error"+err);
                process.exit(1);
            })
    } catch (error) {
        console.log('Something went wrong');
        console.log(error)
    }
 }