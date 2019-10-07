// Libs 
import { check } from 'express-validator/check'

export const addValidator = [
    check('name').not().isEmpty(),
    check('id').not().isEmpty().isLength({ min: 3 })
]

export const ageValidator = [
    check('age').not().isEmpty().isLength({ min: 5 })
]

export const addForumValidator = [
    check('title').not().isEmpty(),
    check('name').not().isEmpty(),
    check('content').not().isEmpty(),
]