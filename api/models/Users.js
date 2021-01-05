/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        id: {
            type: 'number',
            autoIncrement: true,
        },
        email: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 200,
            example: 'username@example.com'
        },
        firstName: {
            type: 'string',
            required: true,
            description: 'First Name representation of the first user\'s name.',
            maxLength: 120,
            example: 'firstname'
        },
        lastName: {
            type: 'string',
            required: true,
            description: 'Last Name representation of the last user\'s name.',
            maxLength: 120,
            example: 'lastname'
        },
        password: {
            type: 'string',
            required: true,
            description: 'Securely hashed representation of the user\'s login password.',
            protect: true,
            example: '2$28a8eabna301089103-13948134nad'
        },
        role: {
            type: 'string',
            description: 'User role',
            maxLength: 40,
            defaultsTo: 'user'
        },
    }
}
