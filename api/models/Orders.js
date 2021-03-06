/**
 * Items.js
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
      userId: {
        type: 'number',
        required: true,
      },
      itemId: {
        type: 'number',
        required: true,
        description: 'Item Number',
      },
      status: {
        type: 'boolean',
        description: 'Ordering Status',
        defaultsTo: false
      },

      
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      
      // Add a reference to User
      userId: {
        model: 'users'
      },
      itemId: {
        model: 'items'
      }
    },
  
  };
  
  