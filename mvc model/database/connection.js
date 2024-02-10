import mongoose from 'mongoose'

const dbData= async()=>{
    try{
        const con= await mongoose.connect(process.env.url,{
             useNewUrlParser: true, useUnifiedTopology: true 
            })

console.log("mongodb connected")
}catch(err){
    console.log(err)
    process.exit(1)
}
}
export {dbData}