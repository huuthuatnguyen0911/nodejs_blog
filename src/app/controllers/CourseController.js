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
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
 
}
 
  // [GET] /courses/:id/edit
  edit(req, res, next){
      Course.findById(req.params.id)
      .then(course =>
        res.render('courses/edit', 
        {
          course:mongooseToObject(course)
        })
        )
      .catch(next);
  }

  // [PUT] /courses/:id

  update(req, res, next){
    Course.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/me/stored/courses'))
    .catch(next);
  }

  // [Delete] /courses/:id

  destroy(req, res, next ){
      Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
    }
  // [Delete] /courses/:id/force
    forcedestroy(req, res, next ){
      Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
    }


    // [PATCH] /restore/:id
    restore(req, res, next){
      Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
    }
  
};
module.exports = new CourseController();