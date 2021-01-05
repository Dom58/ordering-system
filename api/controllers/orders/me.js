// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcryptjs');

const   dotenv = require('dotenv');

dotenv.config();

module.exports = {

  friendlyName: 'All Orders',
  description: 'Fetch all Orders',

  inputs: {
    id: {
      type: 'number',
      required: true,
    },
  },
  exits: {
    success: {
      description: 'Fetch Order'
    },

  },

  fn: async function (req, res) {
      const {id} = req;

      console.log('====Id===>', id);

    try {

      const orders = await Orders.find({
        where: {userId: id},
        // select: ['name']
    }).populate('userId').populate('itemId');

      if (orders.length <= 0) {
        return {
          status: 404,
          error: 'No order created yet!'
        };
      }
      return {
        message: 'Get All my Orders',
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
