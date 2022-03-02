const container = require("../../containerConfig");

const AnswerInstanceService = container.resolve("AnswerInstanceService");

exports.CreateAnswerInstance = async (req) => {
    const testInstanceId = parseInt(req.body.TestInstanceId);
    const answerId = req.body.AnswerId;
 await AnswerInstanceService.CreateAnswerInstance(testInstanceId, answerId);
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
  const result = await AnswerInstanceService.GetAllAnswerInstancesForTestId(TestInstanceId);
  return result;
};

exports.GetAnswerInstanceById = async (id) => {
  const result = await AnswerInstanceService.GetAnswerInstanceById(id);
  return result;
};


exports.DeleteAnswerInstance = async (id) => {
  await AnswerInstanceService.DeleteAnswerInstance(id);
};