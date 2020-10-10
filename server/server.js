import config from '../config/config'
import app from './express'
import template from '../template'
import databaseInstance from './database' 
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import postRoutes from './routes/post.routes' 


// app.get('/',(req,res)=>{
   
//     res.status(200).send(template())
// })
databaseInstance.connect(()=>{
    app.listen(config.port,(err)=>{
        if(err){
            console.log(err)
        }
        console.info('Server started on port %s',config.port)
    })
})

app.use('/',userRoutes)
app.use('/',authRoutes)
app.use('/',postRoutes)
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }
  })