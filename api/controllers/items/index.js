// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcryptjs');

const   dotenv = require('dotenv');

dotenv.config();

module.exports = {

  friendlyName: 'All Items',
  description: 'Fetch all Items',

  fn: async function (req, res) {

    try {

      const items = await Items.find();

      if (items.length <= 0) {
        return {
          status: 404,
          error: 'No item created yet!'
        };
      }
      return {
        message: 'All items fetched',
        data: items,
      };

    } catch (error) {
      return {
        error
      }
    }
  }
};
