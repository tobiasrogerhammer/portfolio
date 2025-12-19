import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  mailadress: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Record || mongoose.model('Record', RecordSchema);

