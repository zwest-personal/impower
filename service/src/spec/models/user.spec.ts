
import {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
    context,
    makeMockModels
} from 'sequelize-test-helpers'

import User from "@src/models/user"
import { describe } from 'node:test'

import DB from "@src/common/db";
DB.addModels([User])

describe('src/models/User', () => {
    const mockModels = makeMockModels({ User })

    const instance = User.build({fullName: "Jo Doe", email: "jdoe@example.org", password: "123456"})
    checkModelName(instance)('User')
    context('properties', () => {
        ['userId', 'fullName', 'email', 'password'].forEach(checkPropertyExists(instance))
    })
})

