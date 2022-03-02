const express = require("express");
const router = express.Router();
const TagController = require("../../controller/Controllers").TagController;

router.post('/create', async function(req,res)  {
  await TagController.CreateTag(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await TagController.UpdateTag(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await TagController.GetAllTags();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await TagController.GetTagById(req.params.id);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await TagController.DeleteTag(req.params.id);
  res.status(200).send();
});


module.exports = router;