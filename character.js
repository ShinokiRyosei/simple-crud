import mongoose from 'mongoose'

mongoose.Promise = global.Promise

// スキーマの作成
const CharacterSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

const Character = mongoose.model('Character', CharacterSchema)

export default Character
