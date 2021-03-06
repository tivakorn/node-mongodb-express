// lib
import express from 'express'

// middlewares 
import { addValidator } from '../middlewares/paramsValidator'

// models
import { testModel } from '../models/testModel'
import { findHandle } from '../models/findHandle'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ success: true })
})

router.get('/find', [], findHandle)

router.get('/test', addValidator, testModel)

export default router