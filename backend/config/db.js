const  mongoose = require ("mongoose");

//process.env.MONGO_URI
//function connectDB = async () => {

    
async function connectDB  () {
  try {
    const conn = await mongoose.connect('mongodb+srv://shamama:apple@upnote.d5zk8.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch(error) {

    console.error(`Error: ${error.message}`);
    process.exit()
}
    
};

module.exports= connectDB ;




