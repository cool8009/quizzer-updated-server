const container = require("../../containerConfig");

const TagService = container.resolve("TagService");

exports.CreateTag = async (req) => {
  let title = req.body.title;
  const tagResult = await TagService.CreateTag(title);
  return tagResult.TagId;
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
