import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    "maxlength": 50, "required": true, "trim": true
  },
  status: {
    type: String,
    "default": "active", "enum": ["active", "complete", "pastdue"], "required": true
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    "ref": "user", "required": true
  },
  notes: String,
  due: Date,
  list: {
    type: mongoose.SchemaTypes.ObjectId,
    "ref": "list", "required": true
  },
}, { timestamps: true })

itemSchema.index({ createdBy: 1, name: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)
