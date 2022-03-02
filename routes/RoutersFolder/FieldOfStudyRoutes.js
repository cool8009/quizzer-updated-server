const express = require("express");
const router = express.Router();
const FieldOfStudyController = require("../../controller/Controllers").FieldOfStudyController;

router.post('/create', async function(req,res)  {
  await FieldOfStudyController.CreateFieldOfStudy(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await FieldOfStudyController.UpdateFieldOfStudy(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await FieldOfStudyController.GetAllFieldsOfStudy();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await FieldOfStudyController.GetFieldSOfStudyById(req.params.id);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await FieldOfStudyController.DeleteFieldOfStudy(req.params.id);
  res.status(200).send();
});


module.exports = router;