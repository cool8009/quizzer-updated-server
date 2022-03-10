const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const Answer  = require("../../models/Answers")(sequelize, Sequelize.DataTypes);

module.exports = class AnswerService {
    
    async CreateAnswer(answer) {
        await Answer.create(answer)
            .then(result =>
                console.log("Answer by " + result.AnswerId + " id created"))
            .catch(err =>
                console.log(err));                      
    }

    async UpdateAnswer(newAnswer) {
        await Answer.update({Content: newAnswer.Content, IsTrue: newAnswer.IsTrue }, {
            where: {
                AnswerId: newAnswer.AnswerId
            }})
        .then(result =>
            console.log("Answer by " + result.AnswerId + " id update"))
        .catch(err =>
            console.log(err));             
    }      
    
    async GetAllAnswers() {
        const result =  Answer.findAll().catch((err) => {console.log(err)});               
        return result;
    }

    async GetAnswerById(id) {
        const result = Answer.findOne({ 
            where: {
                AnswerId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async GetByQuestionId(questionid) {
        const result = Answer.findAll({ 
            where: {
                QuestionId: parseInt(questionid)
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async GetByTestId(testid) {
        const result = Answer.findAll({ 
            where: {
                QuestionId: parseInt(questionid)
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteAnswer(id) {
        await Answer.destroy({
            where: {
                AnswerId: id
            }}) 
            .then(result =>
                console.log("Answer by " + result.AnswerId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      

    async IsAnswerCorrect(id){
        return this.GetAnswerById(id).IsTrue;
    }
}