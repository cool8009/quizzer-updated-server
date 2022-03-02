const container = require("../../containerConfig");

const AnswerService = container.resolve("AnswerService");

exports.CreateAnswer = async (req) => {
 await AnswerService.CreateAnswer(req);
};

exports.UpdateAnswer = async (req) => {
 await AnswerService.UpdateAnswer(req);
};

exports.GetAllAnswers = async () => {
  const result = await AnswerService.GetAllAnswers();
  return result;
};

exports.GetAnswerById = async (id) => {
  const result = await AnswerService.GetAnswerById(id);
  return result;
};

exports.GetByQuestionId = async (questionid) => {
  const result = await AnswerService.GetByQuestionId(questionid);
  return result;
};

exports.DeleteAnswer = async (id) => {
  await AnswerService.DeleteAnswer(id);
};
