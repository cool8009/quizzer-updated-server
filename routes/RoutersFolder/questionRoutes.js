const express = require("express");
const router = express.Router();
const QuestionController = require("../../controller/Controllers").QuestionController;

router.post('/create', async function(req,res)  {
  await QuestionController.CreateQuestion(req.body);
  res.status(200).send();
});
 
router.put('/Update', async function(req,res)  {
  await QuestionController.UpdateQuestion(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await QuestionController.GetAllQuestions();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await QuestionController.GetQuestionById(req.params.id);
  res.status(200).send(result);
});

router.get('/GetByTestId/:testid', async function(req,res)  {
  const result =  await QuestionController.GetQuestionByTestId(req.params.testid);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await QuestionController.DeleteQuestion(req.params.id);
  res.status(200).send();
});


module.exports = router;
