const container = require("../../containerConfig");

const QuestionController = require("./QuestionController");
const TestService = container.resolve("TestService")

exports.CreateTest = async (req) => {
  const test = await TestService.createTest(req.test);
  await req.questions.forEach(element => {
    element.question.TestId = test.TestId;
    QuestionController.CreateQuestion(element);
  });
};

exports.UpdateTest = async (req) => {
 await TestService.UpdateTest(req);
};

exports.GetAllTests = async () => {
  const result = await TestService.GetAllTests();
  return result;
};

exports.GetTestById = async (id) => {
  const result = await TestService.GetTestById(id);
  return result;
};

exports.DeleteTest = async (id) => {
  await TestService.DeleteTest(id);
};
