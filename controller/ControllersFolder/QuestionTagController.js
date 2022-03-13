const container = require("../../containerConfig");

const QuestionService = container.resolve("QuestionTagService");


//One Question(every)
exports.CreateQuestionTag = async (req) => {
  const questiontag = await QuestionTagService.CreateQuestionTag(req.body.question);
  return questiontag;
  // await req.Answers.forEach(answer => {
  //   answer.QuestionId = question.QuestionId;});
  //AnswerController.BulkCreateTag(req.Answers);
};

exports.UpdateQuestionTag = async (req) => {
  await QuestionService.UpdateQuestionTag(req);
};

exports.GetAllQuestionTag = async () => {
  const result = await QuestionService.GetAllQuestionTag();
  return result;
};

exports.GetQuestionTagById = async (id) => {
  const result = await QuestionService.GetQuestionTagById(id);
  return result;
};
exports.GetByQuestionId = async (testid) => {
  const result = await QuestionService.GetByQuestionId(testid);
  return result;
};

exports.DeleteQuestionTag = async (id) => {
  await QuestionService.DeleteQuestionTag(id);
};
