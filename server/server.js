const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000

const app = express();

//Error_Handler
//app.use(globalError);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server started on port ${port}`)
  } else {
    console.log('Error 500 côté serveur')
  }
});
