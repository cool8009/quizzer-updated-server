const awilix = require("awilix");
const Services = require("./Service/Services");

const container = awilix.createContainer( {injectionMode: awilix.InjectionMode.CLASSIC});

container.register({
    TestService: awilix.asClass(Services.TestService).singleton(),
    TagService: awilix.asClass(Services.TagService).singleton(),
    QuestionService: awilix.asClass(Services.QuestionService).singleton(),
    AnswerService: awilix.asClass(Services.AnswerService).singleton(),
    CompanyService: awilix.asClass(Services.CompanyService).singleton(),
    FieldOfStudyIdService: awilix.asClass(Services.FieldOfStudyIdService).singleton(),
    TestInstanceService: awilix.asClass(Services.TestInstanceService).singleton(),
    AnswerInstanceService: awilix.asClass(Services.AnswerInstanceService).singleton(),
    QuestionTagService: awilix.asClass(Services.QuestionTagService).singleton()
});

module.exports = container;