const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');

dotenv.config();


module.exports = {

  friendlyName: 'Register',
  description: 'Register using the provided email, first and last Name and password combination.',
  extendedDescription: 'Sign up for a new user account.',

  inputs: {
    firstName: {
      description: 'The First Name to try in this attempt, e.g. "firstName".',
      type: 'string',
      required: true
    },
    lastName: {
      description: 'The Last Name to try in this attempt, e.g. "LatName".',
      type: 'string',
      required: true
    },
    email: {
      description: 'The email to try in this attempt, e.g. "username@example.com".',
      type: 'string',
      required: true,
      isEmail: true,
      extendedDescription: 'Must be a valid email address.',
    },
    role: {
      description: 'Role".',
      type: 'string',
      extendedDescription: 'User Role',
    },
    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "Password@58".',
      type: 'string',
      required: true
    },
  },

  exits: {

    success: {
      description: 'User account created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided first or last name, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },

  fn: async function (req, res) {
    const { firstName, lastName, email, role, password } = req;

    try {
      
      var newEmailAddress = email.toLowerCase();

      const findUser = await Users.findOne({ where: { email: newEmailAddress } });
      if (findUser && findUser !== null) {
        return {
          status: 409,
          error: 'Email already registered!'
        };
      }
      
      const hashPassword = await bcrypt.hash(password, 12);

      await Users.create({
        firstName,
        lastName,
        email: newEmailAddress,
        password: hashPassword,
        role
      });

      const findUserCreated = await Users.findOne({ where: { email: newEmailAddress } });
      delete findUserCreated.password;

      const token = jwt.sign({ 
        id: findUserCreated.id,
        firstName:findUserCreated.firstName,
        email: findUserCreated.email,
        role: findUserCreated.role
        }, 
        process.env.SECRET_JWT_KEY,
        { expiresIn: '24h'}
      );
      return {
        status: 201,
        message: 'User account created successfully.',
        token,
      };
    } catch (error) {
      return {
        status: 500,
        error: 'Internal Server Error! Please try again later'
      }
    }
  }

};
