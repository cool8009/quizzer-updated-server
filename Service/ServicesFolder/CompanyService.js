const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const Company  = require("../../models/Company")(sequelize, Sequelize.DataTypes);

module.exports = class CompanyService {
    
    async createCompany(company) {
        await Company.create(company)
            .then(result =>
                console.log(result.CompanyName + " created"))
            .catch(err =>
                console.log(err));                      
    }

    async UpdateCompany(newCompany) {
        await Company.update({CompanyName: newCompany.CompanyName }, {
            where: {
                CompanyId: newCompany.CompanyId
            }})
        .then(result =>
            console.log("Company by " + result.CompanyId + " id update"))
        .catch(err =>
            console.log(err));             
    }      
    
    async GetAllCompanys() {
        const result = Company.findAll().catch((err) => {console.log(err)}); 
        return result;              
    }

    async GetCompanyById(id) {
        const result = Company.findOne({ 
            where: {
                CompanyId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteCompany(id) {
        await Company.destroy({
            where: {
                CompanyId: id
            }}) 
            .then(result =>
                console.log("Company by " + result.CompanyId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}