const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const Tag  = require("../../models/Tags")(sequelize, Sequelize.DataTypes);

module.exports = class TagService {
    
    async CreateTag(title) {
        await Tag.create({Title: title})
            .then(result =>
               {console.log(result.Title + " tag created")
                this.res = result})
            .catch(err =>
                console.log(err)); 
        return this.res;                     
    }

    async BulkCreateTag(tag) {
        await Tag.bulkCreate(tag)
            .then(result =>
                console.log("tags created"))
            .catch(err =>
                console.log(err));                      
    }

    async UpdateTag(newTag) {
        await Tag.update({Title: newTag.Title}, {
            where: {
                TagId: newTag.TagId
            }})
        .then(result =>
            console.log("Tag by " + result.TagId + " id update"))
        .catch(err =>
            console.log(err));             
    }      

    async GetAllTags() {
        return Tag.findAll().catch((err) => {console.log(err)});               
    }

    async GetTagById(id) {
        const result = Tag.findOne({ 
            where: {
                TagId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteTag(id) {
        await Tag.destroy({
            where: {
                TagId: id
            }}) 
            .then(result =>
                console.log("Tag by " + result.TagId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}