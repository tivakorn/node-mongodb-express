// Libs
import mongoConnection from '../../libs/mongoConnection'

// middlewares
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const connectDB = async (name) => {
    return mongoConnection(async (db) => {

        let where = {
            name: name
        }

        let dataFormDB = await db.collection('menbers').find(where).toArray()

        return {
            dataFormDB
        }

    })
}

export const findHandle = async (req, res) => {

    const errors = validatorResult(req)
    if (!errors.isEmpty()) {
        return errorFormat(errors, res)
    }

    const { name = '' } = req.query

    const { dataFormDB } = await connectDB(name)

    if (!dataFormDB) {
        return res.json({ success: false })
    }

    const result = {
        success: true,
        data: dataFormDB
    }

    return res.json(result)
}