const slug = require('slug');
const uniqid = require('uniqid');
const dotenv = require('dotenv');
const { log } = require("grunt");

dotenv.config();


module.exports = {

  friendlyName: 'Items',
  description: 'Items inputs',
  extendedDescription: 'Stock items.',

  inputs: {
    name: {
      description: 'Name of an item',
      type: 'string',
      required: true
    },
    price: {
        description: 'Price of an item".',
        type: 'number',
        required: true,
        decimal3: true,
      },
    description: {
      description: 'Item Description',
      type: 'string',
      required: true,
      extendedDescription: 'Item Description required',
    },
  },

  exits: {

    success: {
      description: 'Item created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided item inputs are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },
  },

  fn: async function (req, res) {
    const { name, description } = req;
    const newSlug = `${slug(name, { lower: true })}-${uniqid.process()}`;

    try {

      await Items.create({
        name,
        userId: 1,
        description,
        price: 80000.884,
        slug: newSlug,
      });

      return {
        status: 201,
        message: 'Item created successfully.',
      };
    } catch (error) {
      return {
        status: 500,
        error: 'Internal Server Error! Please try again later'
      }
    }
  }

};
