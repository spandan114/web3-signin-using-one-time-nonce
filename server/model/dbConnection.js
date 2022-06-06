const mongoose = require('mongoose');

module.exports = async () => {
  try{
    await mongoose.connect('YOUR DATABASE URL',{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongodb Connected");
  } catch(err){
    console.log(err.message);
    process.exit(1);
  }
}
