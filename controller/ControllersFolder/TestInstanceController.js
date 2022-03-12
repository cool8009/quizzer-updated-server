const container = require("../../containerConfig");

const TestInstanceService = container.resolve("TestInstanceService");
const AnswerInstanceController = require("./AnswerInstanceController");


exports.CreateTestInstance = async (req) => {
  const email = req.body.Email;
  const testId = parseInt(req.body.TestId);
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;
  const InstanceResult =  await TestInstanceService.createTestInstance(testId, email, firstName, lastName);
  return InstanceResult.TestInstanceId;
};

exports.UpdateTestInstance = async (req) => {
  const grade = await AnswerInstanceController.CreateAnswerInstance(answers,InstanceResult.TestInstanceId);
  await TestInstanceService.UpdateGrade(grade);
  const answers = req.body.answers
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
  const all = this.GetAllTestInstance;
  const result = all();
  const emails = [...result.Email];
  return emails
};
