const dotenv = require('dotenv');

dotenv.config();

module.exports = {

  friendlyName: 'Orders',

  inputs: {
    itemId: {
      type: 'number',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'Order created successfully.'
    },

  },

  fn: async function (req, res) {
    const decodedTokenId = 1;
    const { itemId } = req;
    
    try {
      const findItem = await Items.findOne({ where: { id: itemId } });
      if (!findItem) {
        return {
          status: 404,
          error: 'Item not found!'
        };
      }

      const findSameOrder = await Orders.findOne({ where: { userId: decodedTokenId, itemId } });
      
      if (findSameOrder){
        return {
          status: 400,
          message: 'Sorry. This item is already ordered by you!',
        }; 
      } 
  
      await Orders.create({
        userId: decodedTokenId,
        itemId,
        status: false
      });

      return {
        status: 201,
        message: 'Order created successfully.',
      };
    } catch (error) {
      return {
        status: 500,
        error: 'Internal Server Error! Please try again later'
      }
    }
  }

};
