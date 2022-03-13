const container = require("../../containerConfig");

const QuestionService = container.resolve("QuestionService");
const AnswerController = require("./AnswerController");

//One Question(every)
exports.CreateQuestion = async (req) => {
  const question = await QuestionService.CreateQuestion(req.body.question);
  await req.body.Tags.forEach(tagId =>{
     QuestionService.AddQuestionTag(question.QuestionId,tagId);
  });
  return question.QuestionId;
  // await req.Answers.forEach(answer => {
  //   answer.QuestionId = question.QuestionId;});
  //AnswerController.BulkCreateTag(req.Answers);
};

exports.UpdateQuestion = async (req) => {
  await QuestionService.UpdateQuestion(req);
};

exports.GetAllQuestions = async () => {
  const result = await QuestionService.GetAllQuestions();
  return result;
};

exports.GetQuestionById = async (id) => {
  const result = await QuestionService.GetQuestionById(id);
  return result;
};
exports.GetQuestionByTestId = async (testid) => {
  const result = await QuestionService.GetQuestionByTestId(testid);
  return result;
};

exports.DeleteQuestion = async (id) => {
  await QuestionService.DeleteQuestion(id);
};
