const container = require("../../containerConfig");

const TestInstanceService = container.resolve("TestInstanceService");

exports.CreateTestInstance = async (req) => {
  const email = req.body.Email;
  const testId = parseInt(req.body.TestId);
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;
  await TestInstanceService.createTestInstance(testId, email, firstName, lastName);
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
