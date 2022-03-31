// const mongoose = require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
// const questionsSchema = new mongoose.Schema({
//     userDetails:{
//         type:ObjectId,
//         ref:"User"
//     },
//     all450Questions:{
//         type:String,
//         default: JSON.stringify(
//             [
//                 {
//                 topicName: 'Array',
//                 position: 0,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Array',
//                     Problem: 'Reverse the array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reverse-an-array/0',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find the maximum and minimum element in an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find the "Kth" max and min element of an array ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/kth-smallest-element/0',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Move all the negative elements to one side of the array ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find the Union and Intersection of the two sorted arrays.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Write a program to cyclically rotate an array by one.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'find Largest sum contiguous Subarray [V. IMP]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Minimize the maximum difference between heights [V.IMP]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Minimum no. of Jumps to reach end of an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'find duplicate in an array of N+1 Integers',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/find-the-duplicate-number/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Merge 2 sorted arrays without using Extra space.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: "Kadane's Algo [V.V.V.V.V IMP]",
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Merge Intervals',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/merge-intervals/',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Next Permutation',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/next-permutation/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Count Inversion',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/inversion-of-array/0',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Best time to buy and Sell stock',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'find all pairs on integer array whose sum is equal to given number',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'find common elements In 3 sorted arrays',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/common-elements1132/1',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Rearrange the array in alternating positive and negative items with O(1) extra space',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find if there is any subarray with sum equal to 0',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find factorial of a large number',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'find maximum product subarray ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find longest consecutive subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Given an array of size n and a number k, find all elements that appear more than " n/k " times.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/majority-element-ii/',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Maximum profit by buying and selling a share atmost twice',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find whether an array is a subset of another array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Find the triplet that sum to a given value',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Trapping Rain water problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/trapping-rain-water/0',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Chocolate Distribution problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Smallest Subarray with sum greater than a given value',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Three way partitioning of an array around a given value',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/three-way-partitioning/1',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Minimum swaps required bring elements less equal K together',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Minimum no. of operations required to make an array palindrome',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://app.glider.ai/practice/problem/basic-programming/make-array-palindrome/problem',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Median of 2 sorted arrays of equal size',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-the-median0527/1',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'Array',
//                     Problem: 'Median of 2 sorted arrays of different size',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/',
//                     question_no: 36
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Matrix',
//                 position: 1,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Spiral traversal on a Matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Search an element in a matriix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/search-a-2d-matrix/',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Find median in a row wise sorted matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: "Find row with maximum no. of 1's",
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Print elements in sorted order using row-column wise sorted matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sorted-matrix/0',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Maximum size rectangle',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/max-rectangle/1',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Find a specific pair in matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Rotate matrix by 90 degrees',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Kth smallest element in a row-column wise sorted matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Matrix',
//                     Problem: 'Common elements in all rows of a given matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/',
//                     question_no: 10
//                   }
//                 ]
//               },
//               {
//                 topicName: 'String',
//                 position: 2,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'String',
//                     Problem: 'Reverse a String',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/reverse-string/',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Check whether a String is Palindrome or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/palindrome-string0817/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Find Duplicate characters in a string',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Why strings are immutable in Java?',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.baeldung.com/java-string-immutable',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Write a Code to check whether one string is a rotation of another',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Write a Program to check whether a string is a valid shuffle of two strings or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Count and Say problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/count-and-say/',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Find Longest Recurring Subsequence in String',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Print all Subsequences of a string.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/print-subsequences-string/',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Print all the permutations of the given string',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Split the Binary string into two substring with equal 0’s and 1’s',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Word Wrap Problem [VERY IMP].',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/word-wrap/0',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'EDIT Distance [Very Imp]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/edit-distance3702/1',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Find next greater number with same set of digits. [Very Very IMP]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/next-permutation/0',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Balanced Parenthesis problem.[Imp]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/parenthesis-checker/0',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Word break Problem[ Very Imp]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/word-break/0',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Rabin Karp Algo',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'KMP Algo',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Convert a Sentence into its equivalent mobile numeric keypad sequence.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Minimum number of bracket reversals needed to make an expression balanced.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-the-reversals/0',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Count All Palindromic Subsequence in a given String.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Count of number of given string in 2D character array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Search a Word in a 2D Grid of characters.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Boyer Moore Algorithm for Pattern Searching.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Converting Roman Numerals to Decimal',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Longest Common Prefix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/longest-common-prefix/',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Number of flips to make binary string alternate',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/min-number-of-flips/0',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Find the first repeated word in string.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-first-repeated-word-string/',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Minimum number of swaps for bracket balancing.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing/0',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Find the longest common subsequence between two strings.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Program to generate all possible valid IP addresses from given  string.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Write a program to find the smallest window that contains all characters of string itself.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/smallest-distant-window/0',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Rearrange characters in a string such that no two adjacent are same',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/rearrange-characters/0',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Minimum characters to be added at front to make string palindrome',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Given a sequence of words, print all anagrams together',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/k-anagrams-1/0',
//                     question_no: 36
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Find the smallest window in a string containing all characters of another string',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/0',
//                     question_no: 37
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Recursively remove all adjacent duplicates',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/consecutive-elements/0',
//                     question_no: 38
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'String matching where one string contains wildcard characters',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/wildcard-string-matching/0',
//                     question_no: 39
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Function to find Number of customers who could not get a computer',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/',
//                     question_no: 40
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Transform One String to Another using Minimum Number of Given Operation',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/',
//                     question_no: 41
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Check if two given strings are isomorphic to each other',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/isomorphic-strings/0',
//                     question_no: 42
//                   },
//                   {
//                     Topic: 'String',
//                     Problem: 'Recursively print all sentences that can be formed from list of word lists',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/',
//                     question_no: 43
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Search & Sort',
//                 position: 3,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Find first and last positions of an element in a sorted array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Find a Fixed Point (Value equal to index) in a given array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Search in a rotated sorted array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'square root of an integer',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-squares3649/1',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Maximum and minimum of an array using minimum number of comparisons',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Optimum location of point to minimize total distance',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Find the repeating and the missing',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'find majority element',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/majority-element/0',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Searching in an array where adjacent differ by at most k',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'find a pair with a given difference',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'find four elements that sum to a given value',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'maximum sum such that no 2 elements are adjacent',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/stickler-theif/0',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Count triplet with sum smaller than a given value',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'merge 2 sorted arrays',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'print all subarrays with 0 sum',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Product array Puzzle',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/product-array-puzzle/0',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Sort array according to count of set bits',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'minimum no. of swaps required to sort the array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-swaps/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Bishu and Soldiers',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.hackerearth.com/problem/algorithm/bishu-and-soldiers-227/',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Rasta and Kheshtak',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Kth smallest number again',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Find pivot element in a sorted array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'K-th Element of Two Sorted Arrays',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Aggressive cows',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/AGGRCOW/',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Book Allocation Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'EKOSPOJ:',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/EKO/',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Job Scheduling Algo',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Missing Number in AP',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/arithmetic-number/0',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Smallest number with atleastn trailing zeroes infactorial',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Painters Partition Problem:',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'ROTI-Prata SPOJ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/PRATA/',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'DoubleHelix SPOJ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/ANARC05B/',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Subset Sums',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/SUBSUMS/',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Findthe inversion count',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/inversion-of-array/0',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Implement Merge-sort in-place',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/in-place-merge-sort/',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'Searching & Sorting',
//                     Problem: 'Partitioning and Sorting Arrays with Many Repeated Entries',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.baeldung.com/java-sorting-arrays-with-repeated-entries',
//                     question_no: 36
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Linked List',
//                 position: 4,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Write a Program to reverse the Linked List. (Both Iterative and recursive)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/reverse-a-linked-list/',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Reverse a Linked List in group of Given Size. [Very Imp]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Write a program to Detect loop in a linked list.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Write a program to Delete loop in a linked list.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Find the starting point of the loop. ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Remove Duplicates in a sorted Linked List.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Remove Duplicates in a Un-sorted Linked List.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Write a Program to Move the last element to Front in a Linked List.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Add “1” to a number represented as a Linked List.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Add two numbers represented by linked lists.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Intersection of two Sorted Linked List.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Intersection Point of two Linked Lists.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Merge Sort For Linked lists.[Very Important]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Quicksort for Linked Lists.[Very Important]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Find the middle Element of a linked list.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/middle-of-the-linked-list/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Check if a linked list is a circular linked list.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/circular-linked-list/1',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Split a Circular linked list into two halves.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Write a Program to check whether the Singly Linked list is a palindrome or not.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Deletion from a Circular Linked List.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/deletion-circular-linked-list/',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Reverse a Doubly Linked list.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Find pairs with a given sum in a DLL.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Count triplets in a sorted DLL whose sum is equal to given value “X”.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Sort a “k”sorted Doubly Linked list.[Very IMP]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Rotate DoublyLinked list by N nodes.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Rotate a Doubly Linked list in group of Given Size.[Very IMP]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Can we reverse a linked list in less than O(n) ?',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/can-we-reverse-a-linked-list-in-less-than-on/',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/why-quick-sort-preferred-for-arrays-and-merge-sort-for-linked-lists/',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Flatten a Linked List',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: "Sort a LL of 0's, 1's and 2's",
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Clone a linked list with next and random pointer',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Merge K sorted Linked list',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Multiply 2 no. represented by LL',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Delete nodes which have a greater value on right side',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Segregate even and odd nodes in a Linked List',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Program for n’th node from the end of a Linked List',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'LinkedList',
//                     Problem: 'Find the first non-repeating character from a stream of characters',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0',
//                     question_no: 36
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Binary Trees',
//                 position: 5,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'level order traversal',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/level-order-traversal/1',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Reverse Level Order traversal',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Height of a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Diameter of a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Mirror of a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Inorder Traversal of a tree both using recursion and Iteration',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Preorder Traversal of a tree both using recursion and Iteration',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Postorder Traversal of a tree both using recursion and Iteration',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Left View of a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Right View of Tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Top View of a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Bottom View of a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Zig-Zag traversal of a binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Check if a tree is balanced or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Diagonal Traversal of a Binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Boundary traversal of a Binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Construct Binary Tree from String with Bracket Representation',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Convert Binary tree into Doubly Linked List',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Convert Binary tree into Sum tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Construct Binary tree from Inorder and preorder traversal',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/construct-tree-1/1',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Find minimum swaps required to convert a Binary tree into BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Check if Binary tree is Sum tree or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sum-tree/1',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Check if all leaf nodes are at same level or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Check if 2 trees are mirror or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Sum of Nodes on the Longest path from root to leaf node ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Check if given graph is tree or not.  [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/check-given-graph-tree/',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Find Largest subtree sum in a tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Maximum Sum of nodes in Binary tree such that no two are adjacent ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Print all "K" Sum paths in a Binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Find LCA in a Binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Find distance between 2 nodes in a Binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Kth Ancestor of node in a Binary tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Find all Duplicate subtrees in a Binary tree [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Binary Trees',
//                     Problem: 'Tree Isomorphism Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1',
//                     question_no: 35
//                   }
//                 ]
//               },
//               {
//                 topicName: 'BST',
//                 position: 6,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find a value in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Deletion of a node in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/delete-node-in-a-bst/',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find min and max value in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find inorder successor and inorder predecessor in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Check if a tree is a BST or not ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/check-for-bst/1',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Populate Inorder successor of all nodes',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find LCA  of 2 nodes in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Construct BST from preorder traversal',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Convert Binary tree into BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Convert a normal BST into a Balanced BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Merge two BST [ V.V.V>IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find Kth largest element in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find Kth smallest element in a BST',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Count pairs from 2 BST whose sum is equal to given value "X"',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Find the median of BST in O(n) time and O(1) space',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-median-bst-time-o1-space/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Count BST nodes that lie in a given range',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Replace every element with the least greater element on its right',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Given "n" appointments, find the conflicting appointments',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Check preorder is valid or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Check whether BST contains Dead end',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Largest BST in a Binary Tree [ V.V.V.V.V IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/largest-bst/1',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Binary Search Trees',
//                     Problem: 'Flatten BST to sorted list',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/',
//                     question_no: 22
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Greedy',
//                 position: 7,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Activity Selection Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room/0',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Job SequencingProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Huffman Coding',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/huffman-encoding/0',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Water Connection Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/water-connection-problem/0',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Fractional Knapsack Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/fractional-knapsack/0',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Greedy Algorithm to find Minimum number of Coins',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/coin-piles/0',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Maximum trains for which stoppage can be provided',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Minimum Platforms Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-platforms/0',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Buy Maximum Stocks if i stocks can be bought on i-th day',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Find the minimum and maximum amount to buy all N candies',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Minimize Cash Flow among a given set of friends who have borrowed money from each other',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Minimum Cost to cut a board into squares',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Check if it is possible to survive on Island',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/survival/',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Find maximum meetings in one room',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Maximum product subset of an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-product-subset-array/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Maximize array sum after K negations',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Maximize the sum of arr[i]*i',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array/0',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Maximum sum of absolute difference of an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Maximize sum of consecutive differences in a circular array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/swap-and-maximize/0',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Minimum sum of absolute difference of pairs of two arrays',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Program for Shortest Job First (or SJF) CPU Scheduling',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Program for Least Recently Used (LRU) Page Replacement algorithm',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Smallest subset with sum greater than all other elements',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Chocolate Distribution Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'DEFKIN -Defense of a Kingdom',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/DEFKIN/',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'DIEHARD -DIE HARD',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/DIEHARD/',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'GERGOVIA -Wine trading in Gergovia',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/GERGOVIA/',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Picking Up Chicks',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/GCJ101BB/',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'CHOCOLA –Chocolate',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/CHOCOLA/',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'ARRANGE -Arranging Amplifiers',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.spoj.com/problems/ARRANGE/',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'K Centers Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Minimum Cost of ropes',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Find smallest number with given number of digits and sum of digits',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/smallest-number5829/1',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Rearrange characters in a string such that no two adjacent are same',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/rearrange-characters/0',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Greedy',
//                     Problem: 'Find maximum sum possible equal sum of three stacks',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/',
//                     question_no: 35
//                   }
//                 ]
//               },
//               {
//                 topicName: 'BackTracking',
//                 position: 8,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Rat in a maze Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Printing all solutions in N-Queen Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Word Break Problem using Backtracking',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/word-break-part-2/0',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Remove Invalid Parentheses',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/remove-invalid-parentheses/',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Sudoku Solver',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'm Coloring Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/m-coloring-problem/0',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Print all palindromic partitions of a string',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Subset Sum Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'The Knight’s tour problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Tug of War',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/tug-of-war/',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Find shortest safe route in a path with landmines',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Combinational Sum',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/combination-sum/0',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Find Maximum number possible by doing at-most K swaps',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Print all permutations of a string ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Find if there is a path of more than k length from a source',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Longest Possible Route in a Matrix with Hurdles',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Print all possible paths from top left to bottom right of a mXn matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Partition of a set intoK subsets with equal sum',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'BackTracking',
//                     Problem: 'Find the K-th Permutation Sequence of first N natural numbers',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/',
//                     question_no: 19
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Stacks & Queues',
//                 position: 9,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: ' Implement Stack from Scratch',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.tutorialspoint.com/javaexamples/data_stack.htm',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: ' Implement Queue from Scratch',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement 2 stack in an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'find the middle element of a stack',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement "N" stacks in an Array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Check the expression has valid or Balanced parenthesis or not.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/parenthesis-checker/0',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Reverse a String using Stack',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Design a Stack that supports getMin() in O(1) time and O(1) extra space.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/special-stack/1',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Find the next Greater element',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/next-larger-element/0',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'The celebrity Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Arithmetic Expression evaluation',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/arithmetic-expression-evalution/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Evaluation of Postfix expression',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement a method to insert an element at its bottom without using any other data structure.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Reverse a stack using recursion',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Sort a Stack using recursion',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/sort-a-stack/1',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Merge Overlapping Intervals',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/overlapping-intervals/0',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Largest rectangular Area in Histogram',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Length of the Longest Valid Substring',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/valid-substring0624/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Expression contains redundant bracket or not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement Stack using Queue',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement Stack using Deque',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/implement-stack-queue-using-deque/',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Stack Permutations (Check if an array is stack permutation of other)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement Queue using Stack  ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement "n" queue in an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Implement a Circular queue',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'LRU Cache Implementationa',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/lru-cache/1',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Reverse a Queue using recursion',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/queue-reversal/1',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Reverse the first “K” elements of a queue',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Interleave the first half of the queue with second half',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Find the first circular tour that visits all Petrol Pumps',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/circular-tour/1',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Minimum time required to rot all oranges',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/rotten-oranges/0',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Distance of nearest cell having 1 in a binary matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'First negative integer in every window of size “k”',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Check if all levels of two trees are anagrams or not.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Sum of minimum and maximum elements of all subarrays of size “k”.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Minimum sum of squares of character counts in a given string after removing “k” characters.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/game-with-string/0',
//                     question_no: 36
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Queue based approach or first non-repeating character in a stream.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0',
//                     question_no: 37
//                   },
//                   {
//                     Topic: 'Stacks & Queues',
//                     Problem: 'Next Smaller Element',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/next-smaller-element/',
//                     question_no: 38
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Heap',
//                 position: 10,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Implement a Maxheap/MinHeap using arrays and recursion.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/building-heap-from-array/',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Sort an Array using heap. (HeapSort)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/heap-sort/',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Maximum of all subarrays of size k.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: '“k” largest element in an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Kth smallest and largest element in an unsorted array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Merge “K” sorted arrays. [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Merge 2 Binary Max Heaps',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Kth largest sum continuous subarrays',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Leetcode- reorganize strings',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/reorganize-string/',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Merge “K” Sorted Linked Lists [V.IMP]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Smallest range in “K” Lists',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Median in a stream of Integers',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Check if a Binary Tree is Heap',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Connect “n” ropes with minimum cost',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Convert BST to Min Heap',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/convert-bst-min-heap/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Convert min heap to max heap',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Rearrange characters in a string such that no two adjacent are same.',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/rearrange-characters/0',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Heap',
//                     Problem: 'Minimum sum of two numbers formed from digits of an array',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-sum4058/1',
//                     question_no: 18
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Graph',
//                 position: 11,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Create a Graph, print it',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://1drv.ms/t/s!AqTOHFO77CqEiRua06v1PATyiFg5',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Create a Graph (for practice)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement BFS algorithm ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement DFS Algo ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Detect Cycle in Directed Graph using BFS/DFS Algo ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/detect-cycle-in-a-graph/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Detect Cycle in UnDirected Graph using BFS/DFS Algo ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Search in a Maze',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Minimum Step by Knight',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/steps-by-knight/0',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'flood fill algo',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/flood-fill/',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Clone a graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/clone-graph/',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Making wired Connections',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/number-of-operations-to-make-network-connected/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'word Ladder ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/word-ladder/',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Dijkstra algo',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement Topological Sort ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/topological-sort/1',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Minimum time taken by each job to be completed given by a Directed Acyclic Graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Find whether it is possible to finish all tasks or not from given dependencies',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Find the no. of Islands',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Given a sorted Dictionary of an Alien Language, find order of characters',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/alien-dictionary/1',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement Kruksal’sAlgorithm',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement Prim’s Algorithm',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Total no. of Spanning tree in a graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/total-number-spanning-trees-graph/',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement Bellman Ford Algorithm',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Implement Floyd warshallAlgorithm',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Travelling Salesman Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Graph ColouringProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/graph-coloring-applications/',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Snake and Ladders Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/snakes-and-ladders/',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Find bridge in a graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/bridge-in-a-graph/',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Count Strongly connected Components(Kosaraju Algo)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Check whether a graph is Bipartite or Not',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/bipartite-graph/',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Detect Negative cycle in a graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Longest path in a Directed Acyclic Graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Journey to the Moon',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.hackerrank.com/challenges/journey-to-the-moon/problem',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Cheapest Flights Within K Stops',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/description/',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Oliver and the Game',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Water Jug problem using BFS',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/water-jug-problem-using-bfs/',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Find if there is a path of more thank length from a source',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/',
//                     question_no: 36
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'M-ColouringProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/m-coloring-problem/0',
//                     question_no: 37
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Minimum edges to reverse o make path from source to destination',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/',
//                     question_no: 38
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Paths to travel each nodes using each edge(Seven Bridges)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/',
//                     question_no: 39
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Vertex Cover Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/',
//                     question_no: 40
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Chinese Postman or Route Inspection',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/',
//                     question_no: 41
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Number of Triangles in a Directed and Undirected Graph',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/',
//                     question_no: 42
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Minimise the cashflow among a given set of friends who have borrowed money from each other',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/',
//                     question_no: 43
//                   },
//                   {
//                     Topic: 'Graph',
//                     Problem: 'Two Clique Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/',
//                     question_no: 44
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Trie',
//                 position: 12,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Trie',
//                     Problem: 'Construct a trie from scratch',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/trie-insert-and-search/',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Trie',
//                     Problem: 'Find shortest unique prefix for every word in a given list',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Trie',
//                     Problem: 'Word Break Problem | (Trie solution)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/word-break-problem-trie-solution/',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Trie',
//                     Problem: 'Given a sequence of words, print all anagrams together',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/k-anagrams-1/0',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Trie',
//                     Problem: 'Implement a Phone Directory',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/phone-directory/0',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Trie',
//                     Problem: 'Print unique rows in a given boolean matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1',
//                     question_no: 6
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Dynamic Programming',
//                 position: 13,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Coin ChangeProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/coin-change2448/1',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Knapsack Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Binomial CoefficientProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/ncr1019/1',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Permutation CoefficientProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/permutation-coefficient/',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Program for nth Catalan Number',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/program-nth-catalan-number/',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Matrix Chain Multiplication ',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Edit Distance',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/edit-distance3702/1',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Subset Sum Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Friends Pairing Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Gold Mine Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/gold-mine-problem2608/1',
//                     question_no: 10
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Assembly Line SchedulingProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/',
//                     question_no: 11
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Painting the Fenceproblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1',
//                     question_no: 12
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximize The Cut Segments',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/cutted-segments/0',
//                     question_no: 13
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest Common Subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0',
//                     question_no: 14
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest Repeated Subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0',
//                     question_no: 15
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest Increasing Subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0',
//                     question_no: 16
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Space Optimized Solution of LCS',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/space-optimized-solution-lcs/',
//                     question_no: 17
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'LCS (Longest Common Subsequence) of three strings',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0',
//                     question_no: 18
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum Sum Increasing Subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1',
//                     question_no: 19
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Count all subsequences having product less than K',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/count-subsequences-product-less-k/',
//                     question_no: 20
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest subsequence such that difference between adjacent is one',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1',
//                     question_no: 21
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum subsequence sum such that no three are consecutive',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/',
//                     question_no: 22
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Egg Dropping Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0',
//                     question_no: 23
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum Length Chain of Pairs',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/max-length-chain/1',
//                     question_no: 24
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum size square sub-matrix with all 1s',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0',
//                     question_no: 25
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum sum of pairs with specific difference',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0',
//                     question_no: 26
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Min Cost PathProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1',
//                     question_no: 27
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum difference of zeros and ones in binary string',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1',
//                     question_no: 28
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Minimum number of jumps to reach end',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0',
//                     question_no: 29
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Minimum cost to fill given weight in a bag',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1',
//                     question_no: 30
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Minimum removals from array to make max –min <= K',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/',
//                     question_no: 31
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest Common Substring',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-common-substring/0',
//                     question_no: 32
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Count number of ways to reacha given score in a game',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/reach-a-given-score/0',
//                     question_no: 33
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Count Balanced Binary Trees of Height h',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/bbt-counter/0',
//                     question_no: 34
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'LargestSum Contiguous Subarray [V>V>V>V IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0',
//                     question_no: 35
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Smallest sum contiguous subarray',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/',
//                     question_no: 36
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Unbounded Knapsack (Repetition of items allowed)',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1',
//                     question_no: 37
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Word Break Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/word-break/0',
//                     question_no: 38
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Largest Independent Set Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/',
//                     question_no: 39
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Partition problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1',
//                     question_no: 40
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest Palindromic Subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/',
//                     question_no: 41
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Count All Palindromic Subsequence in a given String',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1',
//                     question_no: 42
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest Palindromic Substring',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/longest-palindromic-substring/',
//                     question_no: 43
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Longest alternating subsequence',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/longest-alternating-subsequence/0',
//                     question_no: 44
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Weighted Job Scheduling',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/weighted-job-scheduling/',
//                     question_no: 45
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Coin game winner where every player has three choices',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/',
//                     question_no: 46
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/',
//                     question_no: 47
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum profit by buying and selling a share at most twice [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/',
//                     question_no: 48
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Optimal Strategy for a Game',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0',
//                     question_no: 49
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Optimal Binary Search Tree',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/',
//                     question_no: 50
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Palindrome PartitioningProblem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1',
//                     question_no: 51
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Word Wrap Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/word-wrap/0',
//                     question_no: 52
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Mobile Numeric Keypad Problem [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1',
//                     question_no: 53
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Boolean Parenthesization Problem',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0',
//                     question_no: 54
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Largest rectangular sub-matrix whose sum is 0',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/',
//                     question_no: 55
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Largest area rectangular sub-matrix with equal number of 1’s and 0’s [ IMP ]',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/',
//                     question_no: 56
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum sum rectangle in a 2D matrix',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0',
//                     question_no: 57
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum profit by buying and selling a share at most k times',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/maximum-profit4657/1',
//                     question_no: 58
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Find if a string is interleaved of two other strings',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/interleaved-strings/1',
//                     question_no: 59
//                   },
//                   {
//                     Topic: 'Dynamic Programming',
//                     Problem: 'Maximum Length of Pair Chain',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://leetcode.com/problems/maximum-length-of-pair-chain/',
//                     question_no: 60
//                   }
//                 ]
//               },
//               {
//                 topicName: 'Bit Manipulation',
//                 position: 14,
//                 started: false,
//                 doneQuestions: 0,
//                 questions: [
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Count set bits in an integer',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/set-bits0143/1',
//                     question_no: 1
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Find the two non-repeating elements in an array of repeating elements',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1',
//                     question_no: 2
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Count number of bits to be flipped to convert A to B',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/bit-difference/0',
//                     question_no: 3
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Count total set bits in all numbers from 1 to n',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/count-total-set-bits/0',
//                     question_no: 4
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Program to find whether a no is power of two',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/power-of-2/0',
//                     question_no: 5
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Find position of the only set bit',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1',
//                     question_no: 6
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Copy set bits in a range',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/copy-set-bits-in-a-range/',
//                     question_no: 7
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Divide two integers without using multiplication, division and mod operator',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/',
//                     question_no: 8
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Calculate square of a number without using *, / and pow()',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/',
//                     question_no: 9
//                   },
//                   {
//                     Topic: 'Bit Manipulation',
//                     Problem: 'Power Set',
//                     Done: false,
//                     Bookmark: false,
//                     Notes: '',
//                     URL: 'https://practice.geeksforgeeks.org/problems/power-set4302/1',
//                     question_no: 10
//                   }
//                 ]
//               }]
//     )
//     }
// })

// mongoose.model("Questions",questionsSchema)



const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const questionsSchema = new mongoose.Schema({
    userDetails:{
        type:ObjectId,
        ref:"User"
    },
    all450Questions:{
        type:String,
        default: JSON.stringify(
            [
                {
                topicName: 'Array',
                position: 0,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=AoX3BPWNnoE&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=16',
                    Topic: 'Array',
                    Problem: 'Majority Element (>N/2 times)',
                    URL: 'https://leetcode.com/problems/majority-element/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=hVl2b3bLzBw&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=4',
                    Topic: 'Array',
                    Problem: 'Merge two sorted Arrays without extra space',
                    URL: 'https://leetcode.com/problems/merge-sorted-array/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=eMSfBgbiEjk&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=12',
                    Topic: 'Array',
                    Problem: 'Best Time to Buy and Sell Stock',
                    URL: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=w_KEocd__20&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=5',
                    Topic: 'Array',
                    Problem: 'Maximum Subarray',
                    URL: 'https://leetcode.com/problems/maximum-subarray/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=6FLvhQjZqvM&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=8',
                    Topic: 'Array',
                    Problem: "Pascal's Triangle",
                    URL: 'https://leetcode.com/problems/pascals-triangle/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=M65xBewcqcI&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=8',
                    Topic: 'Array',
                    Problem: 'Set Matrix Zeroes',
                    URL: 'https://leetcode.com/problems/set-matrix-zeroes/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=LuLCLgMElus&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=10',
                    Topic: 'Array',
                    Problem: 'Next Permutation',
                    URL: 'https://leetcode.com/problems/next-permutation/',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=oaVa-9wmpns&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=3',
                    Topic: 'Array',
                    Problem: 'Sort Colors',
                    URL: 'https://leetcode.com/problems/sort-colors/',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=Y72QeX0Efxw&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=13',
                    Topic: 'Array',
                    Problem: 'Rotate Image',
                    URL: 'https://leetcode.com/problems/rotate-image/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=2JzRBPFYbKE&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=6',
                    Topic: 'Array',
                    Problem: 'Merge Overlapping Subintervals',
                    URL: 'https://leetcode.com/problems/merge-intervals/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=32Ll35mhWg0&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=1',
                    Topic: 'Array',
                    Problem: 'Find the duplicate in an array of N+1 integers.',
                    URL: 'https://leetcode.com/problems/find-the-duplicate-number/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=5nMGY4VUoRY&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=3',
                    Topic: 'Array',
                    Problem: 'Repeat and Missing Number',
                    URL: 'https://www.interviewbit.com/problems/repeat-and-missing-number-array/',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=kQ1mJlwW-c0',
                    Topic: 'Array',
                    Problem: 'Inversion of Array (Pre-req: Merge Sort)',
                    URL: 'https://www.codingninjas.com/codestudio/problems/count-inversions_615',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=ZYpYur0znng&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=14',
                    Topic: 'Array',
                    Problem: 'Search in a 2d Matrix',
                    URL: 'https://leetcode.com/problems/search-a-2d-matrix/',
                    question_no: 14,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=l0YC3876qxg&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=15',
                    Topic: 'Array',
                    Problem: 'Pow(X,n)',
                    URL: 'https://leetcode.com/problems/powx-n/',
                    question_no: 15,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=yDbkQd9t2ig&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=17',
                    Topic: 'Array',
                    Problem: 'Majority Element (>N/3 times)',
                    URL: 'https://leetcode.com/problems/majority-element-ii/',
                    question_no: 16,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/t_f0nwwdg5o',
                    Topic: 'Array',
                    Problem: 'Grid Unique Paths',
                    URL: 'https://leetcode.com/problems/unique-paths/',
                    question_no: 17,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=S6rsAlj_iB4&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=19',
                    Topic: 'Array',
                    Problem: 'Reverse Pairs',
                    URL: 'https://leetcode.com/problems/reverse-pairs/',
                    question_no: 18,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=dRUpbt8vHpo&list=PLgUwDviBIf0rVwua0kKYlsS_ik_1lyVK_&index=2',
                    Topic: 'Array',
                    Problem: '2-Sum-Problem',
                    URL: 'https://leetcode.com/problems/two-sum/',
                    question_no: 19,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=4ggF3tXIAp0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=21',
                    Topic: 'Array',
                    Problem: '4-sum-Problem',
                    URL: 'https://leetcode.com/problems/4sum/',
                    question_no: 20,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=qgizvmgeyUM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=22',
                    Topic: 'Array',
                    Problem: 'Longest Consecutive Sequence',
                    URL: 'https://leetcode.com/problems/longest-consecutive-sequence/',
                    question_no: 21,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=xmguZ6GbatA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=23',
                    Topic: 'Array',
                    Problem: 'Largest Subarray with 0 sum',
                    URL: 'https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1',
                    question_no: 22,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=lO9R5CaGRPY&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=25',
                    Topic: 'Array',
                    Problem: 'Count number of subarrays with given Xor K',
                    URL: 'https://www.interviewbit.com/problems/subarray-with-given-xor/',
                    question_no: 23,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=qtVh-XEpsJo&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=26',
                    Topic: 'Array',
                    Problem: 'Longest Substring without repeat',
                    URL: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
                    question_no: 24,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=onLoX6Nhvmg&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=41',
                    Topic: 'Array',
                    Problem: '3 sum',
                    URL: 'https://leetcode.com/problems/3sum/',
                    question_no: 25,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=m18Hntz4go8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=42',
                    Topic: 'Array',
                    Problem: 'Trapping rainwater',
                    URL: 'https://leetcode.com/problems/trapping-rain-water/',
                    question_no: 26,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=Fm_p9lJ4Z_8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=43',
                    Topic: 'Array',
                    Problem: 'Remove Duplicate from Sorted array',
                    URL: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
                    question_no: 27,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=Mo33MjjMlyA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=44',
                    Topic: 'Array',
                    Problem: 'Max consecutive ones',
                    URL: 'https://leetcode.com/problems/max-consecutive-ones/',
                    question_no: 28,
                    Done: false
                  }
                ]
            
              },
              
              {
                topicName: 'String',
                position: 1,
                started: false,
                doneQuestions: 0,
                questions: [ 
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Reverse Words in a String',
                    URL: 'https://leetcode.com/problems/reverse-words-in-a-string/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Longest Palindrome in a string',
                    URL: 'https://leetcode.com/problems/longest-palindromic-substring/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Roman Number to Integer and vice versa',
                    URL: 'https://leetcode.com/problems/roman-to-integer/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Implement ATOI/STRSTR',
                    URL: 'https://leetcode.com/problems/string-to-integer-atoi/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Longest Common Prefix',
                    URL: 'https://leetcode.com/problems/longest-common-prefix/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Rabin Karp',
                    URL: 'https://leetcode.com/problems/repeated-string-match/discuss/416144/Rabin-Karp-algorithm-C%2B%2B-implementation',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Z-Function',
                    URL: 'https://leetcode.com/problems/implement-strstr/',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'String',
                    Problem: 'KMP algo / LPS(pi) array',
                    URL: 'https://leetcode.com/problems/implement-strstr/',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Minimum characters needed to be inserted in the beginning to make it palindromic',
                    URL: 'https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Check for Anagrams',
                    URL: 'https://leetcode.com/problems/valid-anagram/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Count and Say',
                    URL: 'https://leetcode.com/problems/count-and-say/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'String',
                    Problem: 'Compare version numbers',
                    URL: 'https://leetcode.com/problems/compare-version-numbers/',
                    question_no: 12,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'Linked List',
                position: 2,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=iRtLEoL-r-g&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=27',
                    Topic: 'LinkedList',
                    Problem: 'Reverse a LinkedList',
                    URL: 'https://leetcode.com/problems/reverse-linked-list/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=sGdwSH8RK-o&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=28',
                    Topic: 'LinkedList',
                    Problem: 'Find the middle of LinkedList',
                    URL: 'https://leetcode.com/problems/middle-of-the-linked-list/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=Xb4slcp1U38&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=29',
                    Topic: 'LinkedList',
                    Problem: 'Merge two sorted Linked List',
                    URL: 'https://leetcode.com/problems/merge-two-sorted-lists/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=Lhu3MsXZy-Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=30',
                    Topic: 'LinkedList',
                    Problem: 'Remove N-th node from back of LinkedList',
                    URL: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=LBVsXSMOIk4&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=32',
                    Topic: 'LinkedList',
                    Problem: 'Add two numbers as LinkedList',
                    URL: 'https://leetcode.com/problems/add-two-numbers/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=icnp4FJdZ_c&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=31',
                    Topic: 'LinkedList',
                    Problem: 'Delete a given Node when a node is given.',
                    URL: 'https://leetcode.com/problems/delete-node-in-a-linked-list/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=u4FWXfgS8jw&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=33',
                    Topic: 'LinkedList',
                    Problem: 'Find intersection point of Y LinkedList',
                    URL: 'https://leetcode.com/problems/intersection-of-two-linked-lists/',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=354J83hX7RI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=34',
                    Topic: 'LinkedList',
                    Problem: 'Detect a cycle in Linked List',
                    URL: 'https://leetcode.com/problems/linked-list-cycle/',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=-DtNInqFUXs&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=36',
                    Topic: 'LinkedList',
                    Problem: 'Reverse a LinkedList in groups of size k',
                    URL: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=-DtNInqFUXs&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=36',
                    Topic: 'LinkedList',
                    Problem: 'Check if a LinkedList is palindrome or not',
                    URL: 'https://leetcode.com/problems/palindrome-linked-list/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=QfbOhn0WZ88&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=37',
                    Topic: 'LinkedList',
                    Problem: 'Find the starting point of the Loop of LinkedList',
                    URL: 'https://leetcode.com/problems/linked-list-cycle-ii/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=ysytSSXpAI0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=38',
                    Topic: 'LinkedList',
                    Problem: 'Flattening of a LinkedList',
                    URL: 'https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=9VPm6nEbVPA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=39',
                    Topic: 'LinkedList',
                    Problem: 'Rotate a LinkedList',
                    URL: 'https://leetcode.com/problems/rotate-list/description/',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=VNf6VynfpdM',
                    Topic: 'LinkedList',
                    Problem: 'Clone a Linked List with random and next pointer',
                    URL: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
                    question_no: 14,
                    Done: false
                  }
                ]
                
              },
              {
                topicName: 'Binary Trees',
                position: 3,
                started: false,
                doneQuestions: 0,
                questions:[
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=Z_NEgBgbRVI&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=7',
                    Topic: 'Binary Trees',
                    Problem: 'Inorder Traversal',
                    URL: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/RlUu72JrOCQ',
                    Topic: 'Binary Trees',
                    Problem: 'Preorder Traversal',
                    URL: 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/COQOU6klsBg',
                    Topic: 'Binary Trees',
                    Problem: 'Postorder Traversal',
                    URL: 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=80Zug6D1_r4&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=38',
                    Topic: 'Binary Trees',
                    Problem: 'Morris Inorder Traversal',
                    URL: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=KV4mRzTjlAk&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=25',
                    Topic: 'Binary Trees',
                    Problem: 'LeftView Of Binary Tree',
                    URL: 'https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=0FtVY6I4pB8&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=24',
                    Topic: 'Binary Trees',
                    Problem: 'Bottom View of Binary Tree',
                    URL: 'https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=Et9OCDNvJ78&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=23',
                    Topic: 'Binary Trees',
                    Problem: 'Top View of Binary Tree',
                    URL: 'https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/ySp2epYvgTE',
                    Topic: 'Binary Trees',
                    Problem: 'Preorder inorder postorder in a single traversal',
                    URL: 'https://bit.ly/3rlXpTX',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://youtu.be/q_a6lpbKJdw',
                    Topic: 'Binary Trees',
                    Problem: 'Vertical order traversal',
                    URL: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/fmflMqVOC7k',
                    Topic: 'Binary Trees',
                    Problem: 'Root to node path in a Binary Tree',
                    URL: 'https://www.interviewbit.com/problems/path-to-given-node/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/ZbybYvcVLks',
                    Topic: 'Binary Trees',
                    Problem: 'Max width of a Binary Tree',
                    URL: 'https://leetcode.com/problems/maximum-width-of-binary-tree/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/EoAsWbO7sqg',
                    Topic: 'Binary Trees',
                    Problem: 'Level order Traversal ',
                    URL: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/eD3tmO66aBA',
                    Topic: 'Binary Trees',
                    Problem: 'Height of a Binary Tree',
                    URL: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/Rezetez59Nk',
                    Topic: 'Binary Trees',
                    Problem: 'Diameter of Binary Tree',
                    URL: 'https://leetcode.com/problems/diameter-of-binary-tree/',
                    question_no: 14,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/Yt50Jfbd8Po',
                    Topic: 'Binary Trees',
                    Problem: 'Check if the Binary tree is height-balanced or not',
                    URL: 'https://leetcode.com/problems/balanced-binary-tree/',
                    question_no: 15,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/_-QHfMDde90',
                    Topic: 'Binary Trees',
                    Problem: 'LCA in Binary Tree',
                    URL: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
                    question_no: 16,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/BhuvF_-PWS0',
                    Topic: 'Binary Trees',
                    Problem: 'Check if two trees are identical or not',
                    URL: 'https://leetcode.com/problems/same-tree/',
                    question_no: 17,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/3OXWEdlIGl4',
                    Topic: 'Binary Trees',
                    Problem: 'Zig Zag Traversal of Binary Tree',
                    URL: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
                    question_no: 18,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://youtu.be/0ca1nvR0be4',
                    Topic: 'Binary Trees',
                    Problem: 'Boundary Traversal of Binary Tree',
                    URL: ' https://bit.ly/3GxQ6yH',
                    question_no: 19,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://youtu.be/WszrfSwMz58',
                    Topic: 'Binary Trees',
                    Problem: 'Maximum path sum',
                    URL: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
                    question_no: 20,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/aZNaLrVebKQ',
                    Topic: 'Binary Trees',
                    Problem: 'Construct Binary Tree from inorder and preorder',
                    URL: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
                    question_no: 21,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/LgLRTaEMRVc',
                    Topic: 'Binary Trees',
                    Problem: 'Construct Binary Tree from Inorder and Postorder',
                    URL: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/',
                    question_no: 22,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/nKggNAiEpBE',
                    Topic: 'Binary Trees',
                    Problem: 'Symmetric Binary Tree',
                    URL: 'https://leetcode.com/problems/symmetric-tree/',
                    question_no: 23,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/sWf7k1x9XR4',
                    Topic: 'Binary Trees',
                    Problem: 'Flatten Binary Tree to LinkedList',
                    URL: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
                    question_no: 24,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'Binary Trees',
                    Problem: 'Check if Binary Tree is the mirror of itself or not',
                    URL: 'https://practice.geeksforgeeks.org/problems/mirror-tree/1',
                    question_no: 25,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/fnmisPM6cVo',
                    Topic: 'Binary Trees',
                    Problem: 'Check for Children Sum Property',
                    URL: 'https://bit.ly/33yExIQ',
                    question_no: 26,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=sWf7k1x9XR4&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=39',
                    Topic: 'Binary Trees',
                    Problem: 'Binary Tree to Double Linked List',
                    URL: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
                    question_no: 27,
                    Done: false
                  },
                  {
                    difficulty: '',
                    resource: 'hard',
                    Topic: 'Binary Trees',
                    Problem: 'Find median in a stream of running integers.',
                    URL: 'https://leetcode.com/problems/find-median-from-data-stream/',
                    question_no: 28,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'Binary Trees',
                    Problem: 'K-th largest element in a stream.',
                    URL: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
                    question_no: 29,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Binary Trees',
                    Problem: 'Distinct numbers in Window.',
                    URL: 'https://www.interviewbit.com/problems/distinct-numbers-in-window/',
                    question_no: 30,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Binary Trees',
                    Problem: 'K-th largest element in an unsorted array.',
                    URL: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
                    question_no: 31,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'Binary Trees',
                    Problem: 'Flood-fill Algorithm',
                    URL: 'https://leetcode.com/problems/flood-fill/',
                    question_no: 32,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'BST',
                position: 4,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Binary Search Tree',
                    Problem: 'Populate Next Right pointers of Tree',
                    URL: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/KcNt6v_56cc',
                    Topic: 'Binary Search Tree',
                    Problem: 'Search given Key in BST',
                    URL: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'Binary Search Tree',
                    Problem: 'Construct BST from given keys',
                    URL: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/UmJT3j26t1I',
                    Topic: 'Binary Search Tree',
                    Problem: 'Construct BST from preorder traversal',
                    URL: 'https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/f-sj7I5oXEI',
                    Topic: 'Binary Search Tree',
                    Problem: 'Check is a BT is BST or not',
                    URL: 'https://leetcode.com/problems/validate-binary-search-tree/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/cX_kPV_foZc',
                    Topic: 'Binary Search Tree',
                    Problem: 'Find LCA of two nodes in BST',
                    URL: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/SXKAD2svfmI',
                    Topic: 'Binary Search Tree',
                    Problem: 'Find the inorder predecessor/successor of a given Key in BST.',
                    URL: 'https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=xm_W1ub-K-w&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=43',
                    Topic: 'Binary Search Tree',
                    Problem: 'Floor in a BST',
                    URL: 'https://www.codingninjas.com/codestudio/problems/floor-from-bst_920457?source=youtube&campaign=Striver_Tree_Videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=Striver_Tree_Videos',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=KSsk8AhdOZA&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=42',
                    Topic: 'Binary Search Tree',
                    Problem: 'Ceil in a BST',
                    URL: 'https://www.codingninjas.com/codestudio/problems/ceil-from-bst_920464?source=youtube&campaign=Striver_Tree_Videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=Striver_Tree_Videos',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/9TJYWh0adfk',
                    Topic: 'Binary Search Tree',
                    Problem: 'Find K-th smallest element in BST',
                    URL: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/9TJYWh0adfk',
                    Topic: 'Binary Search Tree',
                    Problem: 'Find K-th largest element in BST',
                    URL: 'https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/ssL3sHwPeb4',
                    Topic: 'Binary Search Tree',
                    Problem: 'Find a pair with a given sum in BST',
                    URL: 'https://leetcode.com/problems/two-sum-iv-input-is-a-bst/',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/D2jMcmxU4bs',
                    Topic: 'Binary Search Tree',
                    Problem: 'BST iterator',
                    URL: 'https://leetcode.com/problems/binary-search-tree-iterator/',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://youtu.be/X0oXMdtUDwo',
                    Topic: 'Binary Search Tree',
                    Problem: 'Size of the largest BST in a Binary Tree',
                    URL: 'https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/',
                    question_no: 14,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=-YbXySKJsX8&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=37',
                    Topic: 'Binary Search Tree',
                    Problem: 'Serialize and deserialize Binary Tree',
                    URL: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
                    question_no: 15,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'Greedy',
                position: 5,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=II6ziNnub1Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=45',
                    Topic: 'Greedy',
                    Problem: 'N meetings in one room',
                    URL: 'https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=dxVcMDI7vyI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=46',
                    Topic: 'Greedy',
                    Problem: 'Minimum number of platforms required for a railway',
                    URL: 'https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=LjPx4wQaRIs&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=47',
                    Topic: 'Greedy',
                    Problem: 'Job sequencing Problem',
                    URL: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=F_DDzYnxO14&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=49',
                    Topic: 'Greedy',
                    Problem: 'Fractional Knapsack Problem',
                    URL: 'https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=mVg9CfJvayM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=48',
                    Topic: 'Greedy',
                    Problem: 'find minimum number of coins',
                    URL: 'https://bit.ly/3nquVHj',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=II6ziNnub1Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=45',
                    Topic: 'Greedy',
                    Problem: 'Activity Selection',
                    URL: 'https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1',
                    question_no: 6,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'Recursion',
                position: 6,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=rYkfBRtMJr8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=52',
                    Topic: 'Recursion',
                    Problem: 'Subset Sums',
                    URL: 'https://practice.geeksforgeeks.org/problems/subset-sums2234/1',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=RIn3gOkbhQE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=53',
                    Topic: 'Recursion',
                    Problem: 'Subset-II',
                    URL: 'https://leetcode.com/problems/subsets-ii/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=OyZFFqQtu98&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=49',
                    Topic: 'Recursion',
                    Problem: 'Combination sum-1',
                    URL: 'https://leetcode.com/problems/combination-sum/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=G1fRTGRxXU8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=50',
                    Topic: 'Recursion',
                    Problem: 'Combination sum-2',
                    URL: 'https://leetcode.com/problems/combination-sum-ii/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=WBgsABoClE0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=51',
                    Topic: 'Recursion',
                    Problem: 'Palindrome Partitioning',
                    URL: 'https://leetcode.com/problems/palindrome-partitioning/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=wT7gcXLYoao&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=55',
                    Topic: 'Recursion',
                    Problem: 'K-th permutation Sequence',
                    URL: 'https://leetcode.com/problems/permutation-sequence/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=f2ic2Rsc9pU&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=52',
                    Topic: 'Recursion',
                    Problem: 'Print all permutations of a string/array',
                    URL: 'https://leetcode.com/problems/permutations/',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=i05Ju7AftcM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=57',
                    Topic: 'Recursion',
                    Problem: 'N queens Problem',
                    URL: 'https://leetcode.com/problems/n-queens/',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=FWAIf_EVUKE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=58',
                    Topic: 'Recursion',
                    Problem: 'Sudoku Solver',
                    URL: 'https://leetcode.com/problems/sudoku-solver/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=wuVwUK25Rfc&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=59',
                    Topic: 'Recursion',
                    Problem: 'M coloring Problem',
                    URL: 'https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=bLGZhJlt4y0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=60',
                    Topic: 'Recursion',
                    Problem: 'Rat in a Maze',
                    URL: 'https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: '',
                    Topic: 'Recursion',
                    Problem: 'Word Break',
                    URL: 'https://bit.ly/3FxgW92',
                    question_no: 12,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'Stacks & Queues',
                position: 7,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=GYptUgnIM_I&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=68',
                    Topic: 'Stacks & Queues',
                    Problem: 'Implement Stack Using Arrays',
                    URL: 'https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=3Et9MrMc02A&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=75',
                    Topic: 'Stacks & Queues',
                    Problem: 'Implement Queue using Stack',
                    URL: 'https://leetcode.com/problems/implement-queue-using-stacks/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=wkDfsKijrZ8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=74',
                    Topic: 'Stacks & Queues',
                    Problem: 'Check for balanced parentheses',
                    URL: 'https://leetcode.com/problems/valid-parentheses/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=Du881K7Jtk8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=75',
                    Topic: 'Stacks & Queues',
                    Problem: 'Next Greater Element',
                    URL: 'https://leetcode.com/problems/next-greater-element-i/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: '',
                    Topic: 'Stacks & Queues',
                    Problem: 'Sort a Stack',
                    URL: 'https://bit.ly/3nptF7k',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=Du881K7Jtk8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=75',
                    Topic: 'Stacks & Queues',
                    Problem: 'Next Smaller Element',
                    URL: 'https://www.interviewbit.com/problems/nearest-smaller-element/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=xDEuM5qa0zg&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=77',
                    Topic: 'Stacks & Queues',
                    Problem: 'LRU cache',
                    URL: 'https://leetcode.com/problems/lru-cache/',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=M6GnoUDpqEE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=72',
                    Topic: 'Stacks & Queues',
                    Problem: 'Implement Queue Using Arrays',
                    URL: 'https://bit.ly/3KbIjIW',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=jDZQKzEtbYQ&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=74',
                    Topic: 'Stacks & Queues',
                    Problem: 'Implement Stack using Queue',
                    URL: 'https://leetcode.com/problems/implement-stack-using-queues/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=0PSB9y8ehbk&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=79',
                    Topic: 'Stacks & Queues',
                    Problem: 'LFU Cache',
                    URL: 'https://leetcode.com/problems/lfu-cache/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=jC_cWLy7jSI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=82',
                    Topic: 'Stacks & Queues',
                    Problem: 'Largest rectangle in a histogram',
                    URL: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=CZQGRp93K4k&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=83',
                    Topic: 'Stacks & Queues',
                    Problem: 'Sliding Window maximum',
                    URL: 'https://leetcode.com/problems/sliding-window-maximum/',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://youtu.be/V09NfaGf2ao',
                    Topic: 'Stacks & Queues',
                    Problem: 'Implement Min Stack',
                    URL: 'https://leetcode.com/problems/min-stack/',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://youtu.be/pUAPcVlHLKA',
                    Topic: 'Stacks & Queues',
                    Problem: 'Rotten Orange',
                    URL: 'https://leetcode.com/problems/rotting-oranges/',
                    question_no: 14,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Stacks & Queues',
                    Problem: 'Stock Span Problem',
                    URL: 'https://leetcode.com/problems/online-stock-span/',
                    question_no: 15,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: '',
                    Topic: 'Stacks & Queues',
                    Problem: 'Find the maximum of minimums of every window size',
                    URL: ' https://bit.ly/3zUYLZz',
                    question_no: 16,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Stacks & Queues',
                    Problem: 'The Celebrity Problem',
                    URL: 'https://bit.ly/3GuImxi',
                    question_no: 17,
                    Done: false
                  }
                ]
              },
              
              {
                topicName: 'Graph',
                position: 8,
                started: false,
                doneQuestions: 0,
                questions:[
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Graph',
                    Problem: 'Clone a graph',
                    URL: 'https://leetcode.com/problems/clone-graph/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=uDWljP2PGmU&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=7',
                    Topic: 'Graph',
                    Problem: 'DFS',
                    URL: 'https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'easy',
                    resource: 'https://www.youtube.com/watch?v=UeE67iCK2lQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=6',
                    Topic: 'Graph',
                    Problem: 'BFS',
                    URL: 'https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=A8ko93TyOns&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=8',
                    Topic: 'Graph',
                    Problem: 'Detect A cycle in Undirected Graph using BFS',
                    URL: 'https://leetcode.com/problems/course-schedule/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=Y9NFqI6Pzd4&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=9',
                    Topic: 'Graph',
                    Problem: 'Detect A cycle in Undirected Graph using DFS',
                    URL: 'https://leetcode.com/problems/course-schedule/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=uzVUw90ZFIg&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=12',
                    Topic: 'Graph',
                    Problem: 'Detect A cycle in a Directed Graph using DFS',
                    URL: 'https://leetcode.com/problems/course-schedule/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=V6GxfKDyLBM&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=15',
                    Topic: 'Graph',
                    Problem: 'Detect A cycle in a Directed Graph using BFS',
                    URL: 'https://leetcode.com/problems/course-schedule/',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=rZv_jHZva34&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=14',
                    Topic: 'Graph',
                    Problem: 'Topological Sort BFS',
                    URL: 'https://practice.geeksforgeeks.org/problems/topological-sort/1',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=Yh6EFazXipA&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=13',
                    Topic: 'Graph',
                    Problem: 'Topological Sort DFS',
                    URL: 'https://practice.geeksforgeeks.org/problems/topological-sort/1',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Graph',
                    Problem: 'Number of islands',
                    URL: 'https://leetcode.com/problems/number-of-islands/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=nbgaEu-pvkU&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=10',
                    Topic: 'Graph',
                    Problem: 'Bipartite Check using BFS',
                    URL: 'https://leetcode.com/problems/is-graph-bipartite/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=uC884ske2uQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=11',
                    Topic: 'Graph',
                    Problem: 'Bipartite Check using DFS',
                    URL: 'https://leetcode.com/problems/is-graph-bipartite/',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=V8qIqJxCioo&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=27',
                    Topic: 'Graph',
                    Problem: 'Strongly Connected Component',
                    URL: 'https://bit.ly/3twUKJPP=',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=jbhuqIASjoM&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=18',
                    Topic: 'Graph',
                    Problem: 'Dijkstra’s Algorithm',
                    URL: 'https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1',
                    question_no: 14,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=75yC1vbS8S8&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=28',
                    Topic: 'Graph',
                    Problem: 'Bellman-Ford Algo',
                    URL: 'https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/0/?fbclid=IwAR2_lL0T84DnciLyzMTQuVTMBOi82nTWNLuXjUgahnrtBgkphKiYk6xcyJU',
                    question_no: 15,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Graph',
                    Problem: 'Floyd Warshall Algorithm',
                    URL: 'https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1',
                    question_no: 16,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=HnD676J56ak&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=20',
                    Topic: 'Graph',
                    Problem: 'MST using Prim’s Algo',
                    URL: 'https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1',
                    question_no: 17,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=1KRmCzBl_mQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=24',
                    Topic: 'Graph',
                    Problem: 'MST using Kruskal’s Algo',
                    URL: 'https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1',
                    question_no: 18,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'Trie',
                position: 9,
                started: false,
                doneQuestions: 0,
                questions: [
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=dBGUmUQhjaM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp',
                    Topic: 'Trie',
                    Problem: 'Implement Trie (Prefix Tree)',
                    URL: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=K5pcpkEMCN0&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=2',
                    Topic: 'Trie',
                    Problem: 'Implement Trie – 2 (Prefix Tree)',
                    URL: 'https://bit.ly/3qwT4OL',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=AWnBa91lThI&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=3',
                    Topic: 'Trie',
                    Problem: 'Longest String with All Prefixes',
                    URL: 'https://bit.ly/3n3kedU',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=RV0QeTyHZxo&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=4',
                    Topic: 'Trie',
                    Problem: 'Number of Distinct Substrings in a String',
                    URL: 'https://bit.ly/3ocRQW0',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=b7AYbpM5YrE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=67',
                    Topic: 'Trie',
                    Problem: 'Power Set',
                    URL: 'https://practice.geeksforgeeks.org/problems/power-set4302/1#',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: 'https://www.youtube.com/watch?v=EIhAwfHubE8&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=6',
                    Topic: 'Trie',
                    Problem: 'Maximum XOR of two numbers in an array',
                    URL: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: 'https://www.youtube.com/watch?v=Q8LhG9Pi5KM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=7',
                    Topic: 'Trie',
                    Problem: 'Maximum XOR With an Element From Array',
                    URL: 'https://leetcode.com/problems/maximum-xor-with-an-element-from-array/',
                    question_no: 7,
                    Done: false
                  }
                ]
              },
              {
                topicName: 'Dynamic Programming',
                position: 10,
                started: false,
                doneQuestions: 0,
                questions:[
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Max Product Subarray',
                    URL: 'https://leetcode.com/problems/maximum-product-subarray/',
                    question_no: 1,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Longest Increasing Subsequence',
                    URL: 'https://leetcode.com/problems/longest-increasing-subsequence/',
                    question_no: 2,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Longest Common Subsequence',
                    URL: 'https://leetcode.com/problems/longest-common-subsequence/',
                    question_no: 3,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: '0-1 Knapsack',
                    URL: 'https://leetcode.com/problems/ones-and-zeroes/',
                    question_no: 4,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Edit Distance',
                    URL: 'https://leetcode.com/problems/edit-distance/',
                    question_no: 5,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Maximum sum increasing subsequence',
                    URL: 'https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1',
                    question_no: 6,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Matrix Chain Multiplication',
                    URL: 'https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1',
                    question_no: 7,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Maximum sum path in the matrix',
                    URL: 'https://leetcode.com/problems/minimum-path-sum/',
                    question_no: 8,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Coin change',
                    URL: 'https://leetcode.com/problems/coin-change/',
                    question_no: 9,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Subset Sum',
                    URL: 'https://leetcode.com/problems/partition-equal-subset-sum/',
                    question_no: 10,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Rod Cutting',
                    URL: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/',
                    question_no: 11,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Egg Dropping',
                    URL: 'https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1',
                    question_no: 12,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Word Break',
                    URL: 'https://practice.geeksforgeeks.org/problems/word-break1352/1',
                    question_no: 13,
                    Done: false
                  },
                  {
                    difficulty: 'hard',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Palindrome Partitioning',
                    URL: 'https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1',
                    question_no: 14,
                    Done: false
                  },
                  {
                    difficulty: 'medium',
                    resource: '',
                    Topic: 'Dynamic Programming',
                    Problem: 'Maximum profit in Job scheduling',
                    URL: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1',
                    question_no: 15,
                    Done: false
                  }
                ]
              },
              {
              topicName: 'Binary Search',
              position: 11,
              started: false,
              doneQuestions: 0,
              questions:[
                {
                  difficulty: 'easy',
                  resource: 'https://www.youtube.com/watch?v=WjpswYrS2nY&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=63',
                  Topic: 'Binary Search',
                  Problem: 'The N-th root of an integer\t',
                  URL: 'https://bit.ly/3rj7Ib1',
                  question_no: 1,
                  Done: false
                },
                {
                  difficulty: 'medium',
                  resource: 'https://www.youtube.com/watch?v=63fPPOdIr2c&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=62',
                  Topic: 'Binary Search',
                  Problem: 'Matrix Median\t',
                  URL: 'https://www.interviewbit.com/problems/matrix-median/',
                  question_no: 2,
                  Done: false
                },
                {
                  difficulty: 'medium',
                  resource: 'https://www.youtube.com/watch?v=PzszoiY5XMQ&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=65',
                  Topic: 'Binary Search',
                  Problem: 'Find the element that appears once in a sorted array',
                  URL: 'https://leetcode.com/problems/single-element-in-a-sorted-array/',
                  question_no: 3,
                  Done: false
                },
                {
                  difficulty: 'medium',
                  resource: 'https://www.youtube.com/watch?v=r3pMQ8-Ad5s&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=64',
                  Topic: 'Binary Search',
                  Problem: 'Search element in a sorted and rotated array',
                  URL: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
                  question_no: 4,
                  Done: false
                },
                {
                  difficulty: 'hard',
                  resource: 'https://www.youtube.com/watch?v=NTop3VTjmxk&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=65',
                  Topic: 'Binary Search',
                  Problem: 'Median of 2 sorted arrays\t',
                  URL: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
                  question_no: 5,
                  Done: false
                },
                {
                  difficulty: 'medium',
                  resource: 'https://www.youtube.com/watch?v=nv7F4PiLUzo&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=66',
                  Topic: 'Binary Search',
                  Problem: 'K-th element of two sorted arrays\t',
                  URL: 'https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1',
                  question_no: 6,
                  Done: false
                },
                {
                  difficulty: 'medium',
                  resource: 'https://www.youtube.com/watch?v=gYmWHvRHu-s&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=69',
                  Topic: 'Binary Search',
                  Problem: 'Allocate Minimum Number of Pages\t',
                  URL: 'https://www.interviewbit.com/problems/allocate-books/',
                  question_no: 7,
                  Done: false
                },
                {
                  difficulty: 'medium',
                  resource: 'https://www.youtube.com/watch?v=wSOfYesTBRk&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=70',
                  Topic: 'Binary Search',
                  Problem: 'Aggressive Cows',
                  URL: 'https://www.spoj.com/problems/AGGRCOW/',
                  question_no: 8,
                  Done: false
                }
              ]
              }

          ]
    )
    }
})

mongoose.model("Questions",questionsSchema)