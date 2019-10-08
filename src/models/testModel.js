// Libs
import { mongoConnection } from '../../libs/mongoConnection'

// Middlewares
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

export const testModel = (req, res) => {

    const errors = validatorResult(req)
    if (!errors.isEmpty()) {
        return errorFormat(errors, res)
    }

    const { id, name } = req.query

    let data = [{ id, name }]
    return res.json({ success: true, data })

}