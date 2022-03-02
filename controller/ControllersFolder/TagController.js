const container = require("../../containerConfig");

const TagService = container.resolve("TagService");

exports.CreateTag = async (req) => {
 await TagService.CreateTag(req);
};

exports.UpdateTag = async (req) => {
 await TagService.UpdateTag(req);
};

exports.GetAllTags = async () => {
  const result = await TagService.GetAllTags();
  return result;
};

exports.GetTagById = async (id) => {
  const result = await TagService.GetTagById(id);
  return result;
};

exports.DeleteTag = async (id) => {
 await TagService.DeleteTag(id);
};
