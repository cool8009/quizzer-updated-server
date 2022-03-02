const express = require("express");
const router = express.Router();
const TestsController = require("../../controller/Controllers").TestController;

router.post('/create', async function(req,res)  {
  await TestsController.CreateTest(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await TestsController.UpdateTest(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await TestsController.GetAllTests();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await TestsController.GetTestById(req.params.id);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await TestsController.DeleteTest(req.params.id);
  res.status(200).send();
});


module.exports = router;