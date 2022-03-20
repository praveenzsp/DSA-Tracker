export const initialState = JSON.parse(localStorage.getItem('user'))

export const reducer = (state,action)=>{
    if(action.type=="USER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return null
    }
    if(action.type=='ARRAY-ADD'){
        return {
            ...state,
            solved_in_array:action.payload
        }
    }   
    if(action.type=='ARRAY-DELETE'){
        return {
            ...state,
            solved_in_array:action.payload
        }
    }   
    if(action.type=='MATRIX-ADD'){
        return {
            ...state,
            solved_in_matrix:action.payload
        }
    }   
    if(action.type=='MATRIX-DELETE'){
        return {
            ...state,
            solved_in_matrix:action.payload
        }
    }   
    if(action.type=='STRING-ADD'){
        return {
            ...state,
            solved_in_string:action.payload
        }
    }   
    if(action.type=='STRING-DELETE'){
        return {
            ...state,
            solved_in_string:action.payload
        }
    }   
    if(action.type=='SEARCH-AND-SORT-ADD'){
        return {
            ...state,
            solved_in_search_and_sort:action.payload
        }
    }   
    if(action.type=='SEARCH-AND-SORT-DELETE'){
        return {
            ...state,
            solved_in_search_and_sort:action.payload
        }
    }   
    if(action.type=='LINKED-LIST-ADD'){
        return {
            ...state,
            solved_in_linked_list:action.payload
        }
    }   
    if(action.type=='LINKED-LIST-DELETE'){
        return {
            ...state,
            solved_in_linked_list:action.payload
        }
    }   
    if(action.type=='BINARY-TREES-ADD'){
        return {
            ...state,
            solved_in_binary_trees:action.payload
        }
    }   
    if(action.type=='BINARY-TREES-DELETE'){
        return {
            ...state,
            solved_in_binary_trees:action.payload
        }
    }   
    if(action.type=='BST-ADD'){
        return {
            ...state,
            solved_in_bst:action.payload
        }
    }   
    if(action.type=='BST-DELETE'){
        return {
            ...state,
            solved_in_bst:action.payload
        }
    }   
    if(action.type=='GREEDY-ADD'){
        return {
            ...state,
            solved_in_greedy:action.payload
        }
    }   
    if(action.type=='GREEDY-DELETE'){
        return {
            ...state,
            solved_in_greedy:action.payload
        }
    }   
    if(action.type=='BACKTRACKING-ADD'){
        return {
            ...state,
            solved_in_backtracking:action.payload
        }
    }   
    if(action.type=='BACKTRACKING-DELETE'){
        return {
            ...state,
            solved_in_backtracking:action.payload
        }
    }   
    if(action.type=='STACKS-AND-QUEUES-ADD'){
        return {
            ...state,
            solved_in_stacks_and_queues:action.payload
        }
    }   
    if(action.type=='STACKS-AND-QUEUES-DELETE'){
        return {
            ...state,
            solved_in_stacks_and_queues:action.payload
        }
    }   
    if(action.type=='HEAP-ADD'){
        return {
            ...state,
            solved_in_heap:action.payload
        }
    }   
    if(action.type=='HEAP-DELETE'){
        return {
            ...state,
            solved_in_heap:action.payload
        }
    }   
    if(action.type=='GRAPH-ADD'){
        return {
            ...state,
            solved_in_graph:action.payload
        }
    }   
    if(action.type=='GRAPH-DELETE'){
        return {
            ...state,
            solved_in_graph:action.payload
        }
    }   
    if(action.type=='TRIE-ADD'){
        return {
            ...state,
            solved_in_trie:action.payload
        }
    }   
    if(action.type=='TRIE-DELETE'){
        return {
            ...state,
            solved_in_trie:action.payload
        }
    }   
    if(action.type=='DP-ADD'){
        return {
            ...state,
            solved_in_dp:action.payload
        }
    }   
    if(action.type=='DP-DELETE'){
        return {
            ...state,
            solved_in_dp:action.payload
        }
    }   
    if(action.type=='BIT-MANIPULATION-ADD'){
        return {
            ...state,
            solved_in_bit_manipulation:action.payload
        }
    }   
    if(action.type=='BIT-MANIPULATION-DELETE'){
        return {
            ...state,
            solved_in_bit_manipulation:action.payload
        }
    }   
    if(action.type=='RECURSION-ADD'){
        return {
            ...state,
            solved_in_recursion:action.payload
        }
    }   
    if(action.type=='RECURSION-DELETE'){
        return {
            ...state,
            solved_in_recursion:action.payload
        }
    }   
    if(action.type=='BINARY-SEARCH-ADD'){
        return {
            ...state,
            solved_in_binary_search:action.payload
        }
    }   
    if(action.type=='BINARY-SEARCH-DELETE'){
        return {
            ...state,
            solved_in_binary_search:action.payload
        }
    }   

    return state
 } 