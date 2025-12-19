import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);

