const express = require("express");
const router = express.Router();
const TestInstanceController = require("../../controller/Controllers").TestInstanceController;

router.post('/Create', async function(req,res)  {
  const resultId = await TestInstanceController.CreateTestInstance(req);
  res.send(JSON.stringify(resultId));
});

router.put('/Update', async function(req,res)  {
  await TestInstanceController.UpdateTestInstance(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await TestInstanceController.GetAllTestInstances();
  res.status(200).send(result);
});
/*
router.get('/GetAllEmails', async function(req,res)  {
  const result =  await TestInstanceController.GetAllUsersEmails();
  res.status(200).send(result);
});*/
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await TestInstanceController.GetTestInstanceById(req.params.id);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await TestInstanceController.DeleteTestInstance(req.params.id);
  res.status(200).send();
});


module.exports = router;