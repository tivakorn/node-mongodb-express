// Libs
import { mongoConnection } from '../../libs/mongoConnection'

// middlewares
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const connectDB = async (name) => {
    return await mongoConnection(async (db) => {

        let where = {
            name: name
        }

        let dataFormDB = await db.collection('menbers').find(where)

        return {
            success: true,
            data: dataFormDB
        }
    })
}

export const findHandle = async (req, res) => {

    const errors = validatorResult(req)
    if (!errors.isEmpty()) {
        return errorFormat(errors, res)
    }

    const { name = '' } = req.query

    const data = await connectDB(name)

    res.json(data)
}