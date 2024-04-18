import express from 'express';

const app = express();
const PORT = process.env.PORT || 80;

app.get('/',(req,res)=>{
    res.send('Hello World. This is Dev')
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})

