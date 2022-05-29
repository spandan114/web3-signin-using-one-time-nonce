const mongoose = require('mongoose');

module.exports = async () => {
  try{
    await mongoose.connect(`mongodb+srv://spandan:spandan1234@cluster0.3cnzz.mongodb.net/wallet_connection?retryWrites=true&w=majority`,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongodb Connected");
  } catch(err){
    console.log(err.message);
    process.exit(1);
  }
}