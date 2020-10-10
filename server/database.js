import mongoose from 'mongoose'
import config from '../config/config'
import chalk from 'chalk'


const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

const connect = (cb) => {
    mongoose.connect(config.mongoUri)
    mongoose.connection.on('connected',()=>{
        console.log(connected("Mongoose default connection is open to ", config.mongoUri));
        cb()
    })
    mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

}


export default {connect}