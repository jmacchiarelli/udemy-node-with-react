const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define properties with a schema object for new collection
const userSchema = new Schema ({
  googleId: String
});

// Create a model class and tell it needs to be created
mongoose.model('users', userSchema);
