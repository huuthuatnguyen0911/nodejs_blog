const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");


class CourseController {
  // [GET] /search
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => 
          res.render('courses/show', {course: mongooseToObject(course) })
      )
      .catch(next);
    // req.params.slug query param
  }

  // [GET] /create

  create(req, res, next){
      res.render('courses/create');
  }

  // [POST] courses/store

  store(req, res, next){
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course.save()
      .then(() => res.redirect('/'))
      .catch(error => {

      })
 
}
}
module.exports = new CourseController();