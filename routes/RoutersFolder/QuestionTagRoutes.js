const express = require("express");
const router = express.Router();
const QuestionTagController = require("../../controller/Controllers").QuestionTagController;

router.post('/create', async function(req,res)  {
  await QuestionTagController.CreateQuestionTag(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await QuestionTagController.UpdateQuestionTag(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await QuestionTagController.GetAllQuestionTag();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await QuestionTagController.GetQuestionTagById(req.params.id);
  res.status(200).send(result);
});

router.get('/GetByQuestionId/:questionid', async function(req,res)  {
  const result =  await QuestionTagController.GetByQuestionId(req.params.questionid);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await QuestionTagController.DeleteQuestionTag(req.params.id);
  res.status(200).send();
});


module.exports = router;