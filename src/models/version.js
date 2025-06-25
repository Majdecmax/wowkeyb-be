import mongoose from 'mongoose';
const { Schema } = mongoose;

const versionSchema = new Schema({
  game_version: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const Version = mongoose.model('Version', versionSchema);
export default Version;
