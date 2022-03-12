const container = require("../../containerConfig");

const AnswerInstanceService = container.resolve("AnswerInstanceService");
const AnswersService = container.resolve("AnswerService");

exports.CreateAnswerInstance = async (req) => {
  let submittedAnswersId = req.body.submittedAnswers;
  let testinstanceid = req.body.testinstanceid;
  let answerScore = 100 / submittedAnswersId.length;
  let Score = 0;
  await submittedAnswersId.forEach((id) => {
    AnswerInstanceService.CreateAnswerInstance(testinstanceid, id);
    let correct = AnswersService.IsAnswerCorrect(id);
    if (correct) {
      Score += answerScore;
    }
  });
  //after this, update the testinstance
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
