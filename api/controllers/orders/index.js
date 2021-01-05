// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcryptjs');

const   dotenv = require('dotenv');

dotenv.config();

module.exports = {

  friendlyName: 'All Orders',
  description: 'Fetch all Orders',

  fn: async function (req, res) {

    try {

      const orders = await Orders.find();

      if (orders.length <= 0) {
        return {
          status: 404,
          error: 'No order created yet!'
        };
      }
      return {
        message: 'All Orders fetched',
        data: orders,
      };

    } catch (error) {
      return {
        status: 500,
        error: 'Internal Server Error! Please try again later'
      }
    }
  }
};
