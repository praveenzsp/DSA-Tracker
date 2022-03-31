const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    solved_in_array:[{type:Number}],
    // solved_in_matrix:[{type:Number}],
    solved_in_string:[{type:Number}],
    // solved_in_search_and_sort:[{type:Number}],
    solved_in_linked_list:[{type:Number}],
    solved_in_binary_trees:[{type:Number}],
    solved_in_bst:[{type:Number}],
    solved_in_greedy:[{type:Number}],
    // solved_in_backtracking:[{type:Number}],
    solved_in_stacks_and_queues:[{type:Number}],
    // solved_in_heap:[{type:Number}],
    solved_in_graph:[{type:Number}],
    solved_in_trie:[{type:Number}],
    solved_in_dp:[{type:Number}],
    // solved_in_bit_manipulation:[{type:Number}],
    solved_in_binary_search:[{type:Number}],
    solved_in_recursion:[{type:Number}]
})

mongoose.model("User",userSchema)