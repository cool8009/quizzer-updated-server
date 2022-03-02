const container = require("../../containerConfig");

const CompanyService = container.resolve("CompanyService");

exports.CreateCompany = async (req) => {
   await CompanyService.CreateCompany(req);
};

exports.UpdateCompany = async (req) => {
 await CompanyService.UpdateCompany(req);
};

exports.GetAllCompanys = async () => {
  const result = await CompanyService.GetAllCompanys();
  return result;
};

exports.GetCompanyById = async (id) => {
  const result = await CompanyService.GetCompanyById(id);
  return result;
};

exports.DeleteCompany = async (id) => {
  await CompanyService.DeleteCompany(id);
};
