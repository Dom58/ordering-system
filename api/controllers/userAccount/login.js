const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');

dotenv.config();

module.exports = {

  friendlyName: 'Login',
  description: 'Log in using the provided email and password combination.',

  inputs: {
    email: {
      description: 'The email to try in this attempt, e.g. "username@example.com".',
      type: 'string',
      required: true,
      isEmail: true,
    },
    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "Password@58".',
      type: 'string',
      required: true
    },
  },

  fn: async function (req, res) {

    const { email, password } = req;

    try {
      
      var newEmailAddress = email.toLowerCase();

      const findUser = await Users.findOne({ where: { email: newEmailAddress } });
      if (!findUser) {
        return {
          status: 401,
          error: 'Incorrect email or password!'
        };
      }

      const isPasswordCorrect = bcrypt.compareSync(password, findUser.password);
      if (!isPasswordCorrect) {
        return {
          status: 401,
          error: 'Incorect Password!'
        };
      }
      
      delete findUser.password;

      const token = jwt.sign({ 
        id: findUser.id,
        firstName: findUser.firstName,
        email: findUser.email,
        role: findUser.role
        }, 
        process.env.SECRET_JWT_KEY,
        { expiresIn: '24h'}
      );

      return {
        message: 'User has been successfully logged in',
        token,
      };

    } catch (error) {
      return {
        error: 'Internal Server Error! Please try again later'
      }
    }
  }
};
