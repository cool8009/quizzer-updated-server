const express = require("express");
const router = express.Router();
const AnswerController = require("../../controller/Controllers").AnswerController;

router.post('/create', async function(req,res)  {
  await AnswerController.CreateAnswer(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await AnswerController.UpdateAnswer(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await AnswerController.GetAllAnswers();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await AnswerController.GetAnswerById(req.params.id);
  res.status(200).send(result);
});

router.get('/GetByQuestionId/:questionid', async function(req,res)  {
  const result =  await AnswerController.GetByQuestionId(req.params.questionid);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await AnswerController.DeleteAnswer(req.params.id);
  res.status(200).send();
});


module.exports = router;