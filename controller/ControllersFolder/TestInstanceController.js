const container = require("../../containerConfig");

const TestInstanceService = container.resolve("TestInstanceService");
const AnswerInstanceController = require("../Controllers").AnswerInstanceController;


exports.CreateTestInstance = async (req) => {
  const email = req.body.Email;
  const testId = parseInt(req.body.TestId);
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;

  const answers = req.body.answers
  const InstanceResult =  await TestInstanceService.createTestInstance(testId, email, firstName, lastName);
  const grade = await AnswerInstanceController.CreateAnswerInstance(answers,InstanceResult.TestInstanceId);
  await TestInstanceService.UpdateTestInstance(grade);

  return InstanceResult.TestInstanceId;
};

exports.UpdateTestInstance = async (req) => {
  await TestInstanceService.UpdateTestInstance(req);
};

exports.GetAllTestInstance = async () => {
  const result = await TestInstanceService.GetAllTestInstances();
  return result;
};

exports.GetTestInstanceById = async (id) => {
  const result = await TestInstanceService.GetTestInstanceById(id);
  return result;
};

exports.DeleteTestInstance = async (id) => {
  await TestInstanceService.DeleteTestInstance(id);
};

exports.GetAllUsersEmails = async (id) => {
  const all = this.GetAllTestInstance();
  const items = [1, 2, 3, 2, 3, 1, 5]

};
