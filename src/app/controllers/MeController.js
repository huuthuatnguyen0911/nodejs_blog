const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose")

class MeController {
  // [GET] /me/storedCourses
  storedCourses(req, res, next){
    Promise.all([Course.find({}),Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => 
      res.render('me/stored-courses', {
        deletedCount,
        course:multipleMongooseToObject(courses)
      })
      )
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next){
    Course.findDeleted({})
    .then(course => res.render('me/trash-courses',
    {
      course:multipleMongooseToObject(course)
    }))
    .catch(next);
  }
}

module.exports = new MeController();


