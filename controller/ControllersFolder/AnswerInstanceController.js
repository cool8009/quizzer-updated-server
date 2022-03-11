const container = require("../../containerConfig");

const AnswerInstanceService = container.resolve("AnswerInstanceService");
const AnswersService = container.resolve("AnswerService");

exports.CreateAnswerInstance = async (arrayOfAnswerId, testInstanceId) => {
  const answerScore = 100 / arrayOfAnswerId.length;
  const Score = 0;
  await arrayOfAnswerId.forEach((id) => {
    AnswerInstanceService.CreateAnswerInstance(testInstanceId, id);
    const correct = AnswersService.IsAnswerCorrect(id);
    if (correct) {
      Score += answerScore;
    }
  });
  return Score;
};

exports.UpdateAnswerInstance = async (req) => {
  const newAnswerId = parseInt(req.body.AnswerId);
  const answerinstanceId = parseInt(req.body.AnswerInstanceId);
  await AnswerInstanceService.UpdateAnswerInstance(req);
};

exports.GetAllAnswerInstances = async () => {
  const result = await AnswerInstanceService.GetAllAnswerInstances();
  return result;
};
exports.GetAllAnswerInstancesForTestId = async (id) => {
  const result = await AnswerInstanceService.GetAllAnswerInstancesForTestId(
    TestInstanceId
  );
  return result;
};

exports.GetAnswerInstanceById = async (id) => {
  const result = await AnswerInstanceService.GetAnswerInstanceById(id);
  return result;
};

exports.DeleteAnswerInstance = async (id) => {
  await AnswerInstanceService.DeleteAnswerInstance(id);
};
