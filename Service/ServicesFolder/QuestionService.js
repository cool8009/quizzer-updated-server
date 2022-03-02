const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
  const Question  = require("../../models/Questions")(sequelize, Sequelize.DataTypes);
  const QuestionTags  = require("../../models/QuestionTags")(sequelize, Sequelize.DataTypes);
  
  module.exports = class QuestionService {
      
       async CreateQuestion(question) {
          await Question.create(question)
              .then(result =>{
                  console.log(result.Title + " question created")
              this.res = result})
              .catch(err =>
                  console.log(err));
          return this.res;                      
      }

    async UpdateQuestion(newQuestion) {
        await Question.update({Content: newQuestion.Content, Title: newQuestion.Title,}, {
            where: {
                QuestionId: newQuestion.QuestionId
            }})
        .then(result =>
            console.log("Question by " + result.QuestionId + " id updated"))
        .catch(err =>
            console.log(err));             
    }      

    async GetAllQuestions() {
        return Question.findAll().catch((err) => {console.log(err)});               
    }

    async GetQuestionById(id) {
        const result = Question.findOne({ 
            where: {
                QuestionId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }
    
    async GetQuestionByTestId(testid) {
        const result = Question.findAll({ 
            where: {
                TestId: testid
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteQuestion(id) {
        await Question.destroy({
            where: {
                QuestionId: id
            }}) 
            .then(result =>
                console.log("Question by " + result.QuestionId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
    
    async AddQuestionTag(QuestionId,TagId) {
        await QuestionTags.create({
            QuestionId: QuestionId,
            TagId: TagId
        })
        .then(result =>
            console.log("conection tag to question created"))
        .catch(err =>
            console.log(err));                      
    }
}