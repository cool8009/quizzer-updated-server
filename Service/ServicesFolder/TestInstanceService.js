const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const TestInstances  = require("../../models/TestInstances")(sequelize, Sequelize.DataTypes);

module.exports = class TestInstancesService {
    
    async createTestInstance(testId, email, firstName, lastName) {
        const newCountDate = new Date().toISOString().slice(0, 10);  
        await TestInstances.create({TestId: testId, Email: email, FirstName: firstName, 
            LastName: lastName, DateTaken: newCountDate})
            .then(result =>{
                console.log("TestInstances by " + result.TestInstancesId + " id created")
                this.res =  result;})
            .catch(err =>
                console.log(err));   
        return this.res;                   
    }

    async UpdateTestInstance(newTestInstances) {
        await TestInstances.update({

            Grade: newTestInstances.Grade ,
            }, {
            where: {
                TestInstancesId: newTestInstances.TestInstancesId
            }})
        .then(result =>
            console.log("TestInstances by " + result.TestInstancesId + " id update"))
        .catch(err =>
            console.log(err));             
    }    
    
    async UpdateGrade(id, isPassed){
        await TestInstances.update({
            Grade: newTestInstances.Grade
            }, {
            where: {
                TestInstancesId: id,
                IsPassed: isPassed
            }})
        .then(result =>
            console.log("TestInstances by " + result.TestInstancesId + " id update"))
        .catch(err =>
            console.log(err));              
    }

    async GetAllTestInstance() {
        return TestInstances.findAll().catch((err) => {console.log(err)});               
    }

    async GetTestInstanceById(id) {
        const result = TestInstances.findOne({ 
            where: {
                TestInstancesId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async GetTestInstanceByEmail(email) {
        const result = TestInstances.findOne({ 
            where: {
                Email: email
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteTestInstance(Id) {
        await TestInstances.destroy({
            where: {
                TestInstancesId: Id
            }}) 
            .then(result =>
                console.log("test by " + result.TestInstancesId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}