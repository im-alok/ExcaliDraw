import express from 'express'
const app = express();
 app.use(express.json());

const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{ 
  res.status(200).json({
    success:true,
    message:"server is successfully started"
  })
})


app.listen(PORT);
