const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const AnswerInstance  = require("../../models/AnswerInstances")(sequelize, Sequelize.DataTypes);

module.exports = class AnswerInstanceService {
    
    async CreateAnswerInstance(testid, answerid) {
        await AnswerInstance.create({TestInstanceId: testid, AnswerId: answerId})
            .then(result =>
                console.log("Answer instance by " + result.AnswerInstanceId + " id created"))
            .catch(err =>
                console.log(err));                      
    }

    async UpdateAnswerInstance(answerinstanceId, answerId) {
        await AnswerInstance.update({AnswerId: answerId}, {
            where: {
                AnswerInstanceId: answerinstanceId
            }})
        .then(result =>
            console.log("Answer by " + result.AnswerId + " id update"))
        .catch(err =>
            console.log(err));             
    }      
    
    async GetAllAnswerInstances() {
        const result =  AnswerInstance.findAll().catch((err) => {console.log(err)});               
        return result;
    }

    async GetAllAnswerInstancesForTestId(id) {
        const result = await AnswerInstance.findAll({
            where: {
                TestInstanceId: id
            }
        }).catch((err) => {
            console.log(err);
        });
        return result;
    }

    async GetAnswerInstanceById(id) {
        const result = AnswerInstance.findOne({ 
            where: {
                AnswerId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteAnswerInstance(id) {
        await AnswerInstance.destroy({
            where: {
                AnswerId: id
            }}) 
            .then(result =>
                console.log("Answer by " + result.AnswerId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}