const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Questions = mongoose.model("Questions")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin=require('../middleware/requireLogin')
const { json } = require('express/lib/response')
const res = require('express/lib/response')


router.post('/signup',(req,res)=>{
    const {email,password} = req.body 
    if(!email || !password){
       return res.status(422).json({error:"Please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"User already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedPassword=>{
              const user = new User({
                  email,
                  password:hashedPassword,  
              })
      
              user.save()
              .then(user=>{
                  const questions = new Questions({
                      userDetails:user._id,
                  })
                  questions.save()
                  res.json({message:"Saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })
  })
  


router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
               const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
               const {_id,email,solved_in_array,
                // solved_in_matrix,
                solved_in_string,
                // solved_in_search_and_sort,
                solved_in_linked_list,
                solved_in_binary_trees,
                solved_in_bst,
                solved_in_greedy,
                // solved_in_backtracking,
                solved_in_stacks_and_queues,
                // solved_in_heap,
                solved_in_graph,
                solved_in_trie,
                solved_in_dp,
                solved_in_binary_search,
                solved_in_recursion,
                // solved_in_bit_manipulation   
            } = savedUser
               res.json({token,user:{_id,email,
                solved_in_array,
                // solved_in_matrix,
                solved_in_string,
                // solved_in_search_and_sort,
                solved_in_linked_list,
                solved_in_binary_trees,
                solved_in_bst,
                solved_in_greedy,
                // solved_in_backtracking,
                solved_in_stacks_and_queues,
                // solved_in_heap,
                solved_in_graph,
                solved_in_trie,
                solved_in_dp,
                solved_in_binary_search,
                solved_in_recursion,
                // solved_in_bit_manipulation
            }})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

router.get('/home/:userId',requireLogin,(req,res)=>{
    Questions.findOne({userDetails:req.params.userId})
    .then(questionsRecord=>{
        return res.json({all450Questions:JSON.parse(questionsRecord.all450Questions)})
    })
    .catch(err=>{
        console.log(err)
        return res.status(422).json({error:"Something went wrong"})
    })
})

// router.put('/update_db/:userId',requireLogin,(req,res)=>{
//     var condition={userDetails:req.params.userId}
//     Questions.updateOne(condition,{all450Questions:req.body})
//     .then(result=>{
//         if(!result){
//             return res.status(422).json({error:'failed'})
//         }
//         Questions.findOne({userDetails:req.params.userId})
//         .then(questionsRecord=>{
//             return res.status(200).json(questionsRecord)
//         })
//         .catch(err=>{
//             return res.status(422).json({error:"something went wrong"})
//         })
//     })  
// })


router.put('/add_to_solved_in_array/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_array:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
// router.put('/add_to_solved_in_matrix/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
//     User.findByIdAndUpdate(req.params.userId,{
//         $push:{solved_in_matrix:req.body.questionId}  //xxxxxx
//     },{
//         new:true
//     })
//     .exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.json(result)
//         }
//     })
// })

router.put('/remove_from_solved_in_array/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_array:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_matrix/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_matrix:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_matrix/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_matrix:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_string/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_string:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_string/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_string:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_search_and_sort/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_search_and_sort:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_search_and_sort/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_search_and_sort:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_linked_list/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_linked_list:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_linked_list/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_linked_list:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_binary_trees/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_binary_trees:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_binary_trees/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_binary_trees:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_bst/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_bst:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_bst/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_bst:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_greedy/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_greedy:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_greedy/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_greedy:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_backtracking/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_backtracking:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_backtracking/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_backtracking:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_stacks_and_queues/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_stacks_and_queues:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_stacks_and_queues/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_stacks_and_queues:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_heap/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_heap:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_heap/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_heap:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_graph/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_graph:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_graph/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_graph:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_trie/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_trie:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_trie/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_trie:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_dp/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_dp:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_dp/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_dp:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_bit_manipulation/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_bit_manipulation:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_bit_manipulation/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_bit_manipulation:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_recursion/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_recursion:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_recursion/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_recursion:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/add_to_solved_in_binary_search/:userId',requireLogin,(req,res)=>{ //xxxxxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $push:{solved_in_binary_search:req.body.questionId}  //xxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/remove_from_solved_in_binary_search/:userId',requireLogin,(req,res)=>{   //xxxxxxxxx
    User.findByIdAndUpdate(req.params.userId,{
        $pull:{solved_in_binary_search:req.body.questionId}  //xxxxxxxxx
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})



module.exports = router