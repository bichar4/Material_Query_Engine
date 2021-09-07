module.exports = {


  friendlyName: 'Material detail',


  description: ' Resposnible for showing the details data of the query material',


  inputs: {

  },


  exits: {
    success: {
      description: 'Show the overall description of the query material object',
      viewTemplatePath: 'pages/materialDetails'
    },

  },


  fn: async function (inputs,exits) {

    // All done.
    return exits.success({index:this.req.params.index});

  }


};
