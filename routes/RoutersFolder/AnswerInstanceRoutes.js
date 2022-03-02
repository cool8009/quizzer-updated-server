const express = require("express");
const router = express.Router();
const AnswerInstanceController = require("../../controller/Controllers").AnswerInstanceController;

router.post('/create', async function(req,res)  {
  await AnswerInstanceController.CreateAnswerInstance(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await AnswerInstanceController.UpdateAnswerInstance(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await AnswerInstanceController.GetAllAnswerInstances();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await AnswerInstanceController.GetAnswerInstanceById(req.params.id);
  res.status(200).send(result);
});

router.get('/GetByTestId/:id', async function(req,res)  {
  const result =  await AnswerInstanceController.GetAllAnswerInstancesForTestId(req.params.id);
  res.status(200).send(result);
});



 
router.delete('/Delete/:id', async function(req,res)  {
  await AnswerInstanceController.DeleteAnswerInstance(req.params.id);
  res.status(200).send();
});


module.exports = router;