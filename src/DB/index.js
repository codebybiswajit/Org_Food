import mongose from 'mongoose'
import { DB_NAME } from '../Constant.js'
import { json, response } from 'express'
// import express from "express"
// const app  = express()
import { app } from '../App.js'
const connectDB = async () => {
    try {
        const conectDBInstance = await mongose.connect(
            `${process.env.MONGOOSE_URL}/${DB_NAME}`
        )
        console.log('DB IS COnnected')
        app.get('/api/v0/dbconnection', (req, res) => {
            res.send(`<p>Send ${conectDBInstance.message}</p>`)
            // console.log(conectDBInstance)
        })
    } catch (error) {
        console.log("Can't Connect")
        throw error
        process.exit(1)
    }
}
export default connectDB
