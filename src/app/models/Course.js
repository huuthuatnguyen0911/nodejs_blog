const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require("mongoose-delete");


const schemaCourse = new Schema(
  {
    name: { type: String, required:true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 200 },
    slug: String,
    videoId: { type: String, required:true },
    level: { type: String, maxLength: 50 },
    slug: { type: String, slug: 'name', unique:true },
  },
  { timestamps: true }
);
mongoose.plugin(slug);
schemaCourse.plugin(
  mongooseDelete, 
  { overrideMethods: 'all',
  deletedAt : true
 });

module.exports = mongoose.model("Course", schemaCourse);
