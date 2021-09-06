module.exports = {


  friendlyName: 'Search material',


  description: 'Takes input from user and performs necessary query',


  inputs: {
    queryString: {
      description: 'The id or formula of the material needed for query',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage.ejs'
    },

  },


  fn: async function (inputs) {
    console.log("I am inside search material")
    console.log("I just for the value",inputs)
    // All done.
    return;

  }


};
