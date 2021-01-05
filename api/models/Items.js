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
    name: {
      type: 'string',
      required: true,
      description: 'Name of item',
      maxLength: 120,
    },
    price: {
      type: 'float',
      required: true,
      description: 'Price of Item',
    },
    slug: {
      type: 'string',
      unique: true,
      required: true,
      description: 'Items Slugs',
      maxLength: 240,
    },
    description: {
        type: 'text',
        required: true,
        description: 'Item Description',
    },
    status: {
      type: 'boolean',
      description: 'Item Status',
      defaultsTo: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

