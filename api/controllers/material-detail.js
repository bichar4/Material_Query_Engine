const axios = require("axios");
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


  fn: async function (inputs, exits) {

    // All done.
    // console.log("I am here",this.req.params.id)
    // return exits.success({index:this.req.params.id});
    axios.get("https://www.materialsproject.org/rest/v2/materials/" + this.req.params.id + "/vasp/",
      {
        headers: {
          "x-api-key": "atfcnouGu4jdflvjap"
        }
      })
      .then((res) => {
        if (res.data.valid_response) {
          return exits.success({queryData: res.data.response[0]})
        }
      })
      .catch((err) => {
          console.log(err)
        })
    // All done..
    return;

  }


};
