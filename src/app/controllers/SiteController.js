const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose")

class SiteController {
  // [GET] /

  index(req, res, next) {
    // res.render('home');
    Course.find({})
      .then(courses => {
        
        // course được khởi tạo từ object constructor của mongooosee
        res.render('home', {
          courses:multipleMongooseToObject(courses)
        });
      })
      .catch(next);

    // const newCourse = new Course({
    //   name: "thien",
    //   description: "Thien dep trai",
    //   image: "LInk jav",
    // });

    // newCourse
    //   .save()
    //   .then((data) => {
    //     res.json({
    //       data: data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
