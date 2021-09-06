const axios = require("axios");
const { exists } = require("grunt");
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
    ok: {
      responseType: 'ok'
    },

  },


  fn: async function (inputs, exits) {
    console.log("I am inside search material")
    console.log("I just for the value", inputs.queryString)
    axios.get("https://www.materialsproject.org/rest/v2/materials/" + inputs.queryString + "/vasp/",
      {
        headers: {
          "x-api-key": "atfcnouGu4jdflvjap"
        }
      })
      .then((res) => {
        console.log("My response", res.data)
        return exits.ok(res.data)  
      })
      .catch((err) => {
        console.log("This is an error", err)
      })
    // All done..
    return;

  }


};
