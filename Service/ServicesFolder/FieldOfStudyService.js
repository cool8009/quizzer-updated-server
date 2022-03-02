const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const FieldOfStudy  = require("../../models/FieldOfStudy")(sequelize, Sequelize.DataTypes);

module.exports = class FieldOfStudyService {
    
    async createFieldOfStudy(fieldOfStudy) {
        await FieldOfStudy.create(fieldOfStudy)
            .then(result =>
                console.log(result.FieldName + " created"))
            .catch(err =>
                console.log(err));                      
    }

    async UpdateFieldOfStudy(newField) {
        await FieldOfStudy.update({FieldName: newField.FieldName }, {
            where: {
                FieldOfStudyId: newField.FieldOfStudyId
            }})
        .then(result =>
            console.log("Field by " + result.FieldOfStudyId + " id update"))
        .catch(err =>
            console.log(err));             
    }      

    async GetAllFieldsOfStudy() {
        return FieldOfStudy.findAll().catch((err) => {console.log(err)});               
    }

    async GetFieldOfStudyById(id) {
        const result = FieldOfStudy.findOne({ 
            where: {
                FieldOfStudyId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteFieldOfStudy(id) {
        await FieldOfStudy.destroy({
            where: {
                FieldOfStudyId: id
            }}) 
            .then(result =>
                console.log("Field by " + result.FieldOfStudyId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}