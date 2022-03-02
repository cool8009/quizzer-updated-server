var DataTypes = require("sequelize").DataTypes;
var _AnswerInstances = require("./AnswerInstances");
var _Answers = require("./Answers");
var _Company = require("./Company");
var _CompanyFieldsOfStudy = require("./CompanyFieldsOfStudy");
var _FieldOfStudy = require("./FieldOfStudy");
var _QuestionTags = require("./QuestionTags");
var _Questions = require("./Questions");
var _Tags = require("./Tags");
var _TestInstances = require("./TestInstances");
var _Tests = require("./Tests");

function initModels(sequelize) {
  var AnswerInstances = _AnswerInstances(sequelize, DataTypes);
  var Answers = _Answers(sequelize, DataTypes);
  var Company = _Company(sequelize, DataTypes);
  var CompanyFieldsOfStudy = _CompanyFieldsOfStudy(sequelize, DataTypes);
  var FieldOfStudy = _FieldOfStudy(sequelize, DataTypes);
  var QuestionTags = _QuestionTags(sequelize, DataTypes);
  var Questions = _Questions(sequelize, DataTypes);
  var Tags = _Tags(sequelize, DataTypes);
  var TestInstances = _TestInstances(sequelize, DataTypes);
  var Tests = _Tests(sequelize, DataTypes);

  AnswerInstances.belongsTo(Answers, { as: "Answer", foreignKey: "AnswerId"});
  Answers.hasMany(AnswerInstances, { as: "AnswerInstances", foreignKey: "AnswerId"});
  CompanyFieldsOfStudy.belongsTo(Company, { as: "Company", foreignKey: "CompanyId"});
  Company.hasMany(CompanyFieldsOfStudy, { as: "CompanyFieldsOfStudies", foreignKey: "CompanyId"});
  Tests.belongsTo(Company, { as: "Company", foreignKey: "CompanyId"});
  Company.hasMany(Tests, { as: "Tests", foreignKey: "CompanyId"});
  CompanyFieldsOfStudy.belongsTo(FieldOfStudy, { as: "FieldOfStudy", foreignKey: "FieldOfStudyId"});
  FieldOfStudy.hasMany(CompanyFieldsOfStudy, { as: "CompanyFieldsOfStudies", foreignKey: "FieldOfStudyId"});
  Tests.belongsTo(FieldOfStudy, { as: "FieldOfStudy", foreignKey: "FieldOfStudyId"});
  FieldOfStudy.hasMany(Tests, { as: "Tests", foreignKey: "FieldOfStudyId"});
  Answers.belongsTo(Questions, { as: "Question", foreignKey: "QuestionId"});
  Questions.hasMany(Answers, { as: "Answers", foreignKey: "QuestionId"});
  QuestionTags.belongsTo(Questions, { as: "Question", foreignKey: "QuestionId"});
  Questions.hasMany(QuestionTags, { as: "QuestionTags", foreignKey: "QuestionId"});
  Tags.belongsTo(Questions, { as: "Question", foreignKey: "QuestionId"});
  Questions.hasMany(Tags, { as: "Tags", foreignKey: "QuestionId"});
  QuestionTags.belongsTo(Tags, { as: "Tag", foreignKey: "TagId"});
  Tags.hasMany(QuestionTags, { as: "QuestionTags", foreignKey: "TagId"});
  AnswerInstances.belongsTo(TestInstances, { as: "TestInstance", foreignKey: "TestInstanceId"});
  TestInstances.hasMany(AnswerInstances, { as: "AnswerInstances", foreignKey: "TestInstanceId"});
  Questions.belongsTo(Tests, { as: "Test", foreignKey: "TestId"});
  Tests.hasMany(Questions, { as: "Questions", foreignKey: "TestId"});
  TestInstances.belongsTo(Tests, { as: "Test", foreignKey: "TestId"});
  Tests.hasMany(TestInstances, { as: "TestInstances", foreignKey: "TestId"});

  return {
    AnswerInstances,
    Answers,
    Company,
    CompanyFieldsOfStudy,
    FieldOfStudy,
    QuestionTags,
    Questions,
    Tags,
    TestInstances,
    Tests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
