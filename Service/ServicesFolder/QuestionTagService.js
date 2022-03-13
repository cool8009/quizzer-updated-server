const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const QuestionTag  = require("../../models/QuestionTags")(sequelize, Sequelize.DataTypes);

module.exports = class TagService {
    
    async CreateQuestionTag(TagId, QuestionId) {
        await QuestionTag.create({TagId: TagId, QuestionId: QuestionId})
            .then(result =>
               {console.log(result.TagId + ' tagid with ' + result.QuestionId + 'questionid created')
                this.res = result})
            .catch(err =>
                console.log(err)); 
        return this.res;                     
    }


    async UpdateQuestionTag(newTag) {
        await QuestionTag.update({Title: newTag.Title}, {
            where: {
                TagId: newTag.TagId
            }})
        .then(result =>
            console.log("Tag by " + result.TagId + " id update"))
        .catch(err =>
            console.log(err));             
    }      

    async GetAllQuestionTag() {
        return QuestionTag.findAll().catch((err) => {console.log(err)});               
    }

    async GetQuestionTagById(id) {
        const result = QuestionTag.findOne({ 
            where: {
                TagId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteQuestionTag(id) {
        await QuestionTag.destroy({
            where: {
                TagId: id
            }}) 
            .then(result =>
                console.log("Tag by " + result.TagId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}