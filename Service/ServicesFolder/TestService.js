const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
  const Test  = require("../../models/Tests")(sequelize, Sequelize.DataTypes);

  module.exports = class TestService {
      
      async createTest(test) {
          await Test.create(test)
              .then(result =>{
                  console.log("test by " + result.TestId + " id created")
                  this.res =  result;})
              .catch(err =>
                  console.log(err));   
          return this.res;
      }

    async UpdateTest(newTest) {
        await Test.update({Intro: newTest.Intro, MinimumToPass: newTest.MinimumToPass, Title: newTest.Title}, {
            where: {
                TestId: newTest.TestId
            }})
        .then(result =>
            console.log("test by " + result.TestId + " id update"))
        .catch(err =>
            console.log(err));             
    }      

    async GetAllTests() {
        return Test.findAll().catch((err) => {console.log(err)});               
    }

    async GetTestById(id) {
        const result = Test.findOne({ 
            where: {
                TestId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteTest(Id) {
        await Test.destroy({
            where: {
                TestId: Id
            }}) 
            .then(result =>
                console.log("test by " + result.TestId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}