const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');

dotenv.config();

module.exports = {

  friendlyName: 'Update Order',

  inputs: {
    id: {
        type: 'string',
        required: true,
    },
  },

  fn: async function (req, res) {

    const { id } = req;

    try {
      const findOrder = await Orders.findOne({ where: { id } });
      if (!findOrder) {
        return {
          status: 404,
          error: 'Order not found!'
        };
      }

      const status = findOrder.status ? false : true;

      await Orders.update({id: findOrder.id}).set({status});
        const findOrderUpdated = await Orders.findOne({ where: { id: findOrder.id } });

        return {
            message: 'Order updated by admin successfully',
            data: findOrderUpdated,
        };

    } catch (error) {
      return {
        error: 'Internal Server Error! Please try again later'
      }
    }
  }
};
