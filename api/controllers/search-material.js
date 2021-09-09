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
      description: 'The query has been found. Show the relevant data in table format',
      viewTemplatePath: 'pages/materialtable'
    },
    notFound: {
      description: 'The query has not been found. Show the error message',
      viewTemplatePath: 'pages/materialtable'
    },

  },


  fn: async function (inputs, exits) {
    // console.log("I am inside search material")
    // console.log("I just for the value", inputs.queryString)
    axios.get("https://www.materialsproject.org/rest/v2/materials/" + inputs.queryString + "/vasp/",
      {
        headers: {
          "x-api-key": "atfcnouGu4jdflvjap"
        }
      })
      .then((res) => {
        if (res.data.valid_response) {
          queryData = res.data
          return exits.success({ queryData: res.data,err:null })
        }
      })
      .catch((err) => {
        console.log("This is an error", err)
        return exits.notFound({
          err: err,
        })
      })
    // All done..
    return;

  }


};
