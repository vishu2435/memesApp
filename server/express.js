import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import devBundle from './devBundle'
import path from 'path'

const CURRENT_WORKING_DIR=process.cwd()



const app=express()
// devBundle.compile(app)


app.use('/dist',express.static(path.join(CURRENT_WORKING_DIR,'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())


export default app