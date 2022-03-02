const express = require("express");
const router = express.Router();
const CompanyController = require("../../controller/Controllers").CompanyController;

router.post('/create', async function(req,res)  {
  await CompanyController.CreateCompany(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await CompanyController.UpdateCompany(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await CompanyController.GetAllCompanys();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await CompanyController.GetCompanyById(req.params.id);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await CompanyController.DeleteCompany(req.params.id);
  res.status(200).send();
});


module.exports = router;