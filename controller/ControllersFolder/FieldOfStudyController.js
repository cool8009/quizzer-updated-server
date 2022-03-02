const container = require("../../containerConfig");

const FieldService = container.resolve("FieldOfStudyIdService");

exports.CreateFieldOfStudy = async (req) => {
   await FieldService.CreateFieldOfStudy(req);
};

exports.UpdateFieldOfStudy = async (req) => {
   await FieldService.UpdateFieldOfStudy(req);
};

exports.GetAllFieldsOfStudy = async () => {
  const result = await FieldService.GetAllFieldsOfStudy();
  return result;
};

exports.GetFieldOfStudyById = async (id) => {
  const result = await FieldService.GetFieldOfStudyById(id);
  return result;
};

exports.DeleteFieldOfStudy = async (id) => {
   await FieldService.DeleteFieldOfStudy(id);
  return result;
};
