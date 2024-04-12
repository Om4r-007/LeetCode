// var deckRevealedIncreasing = function(deck) {
//     deck.sort((a, b) => a - b);
//     console.log(deck)
// };

// deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7, 19]);




// function deckRevealedIncreasing(deck) {
//     // Sort the deck in ascending order
//     deck.sort((a, b) => b - a);

//     const result = [];
//     const indexQueue = [];

//     // Initialize the index queue with 0, 1, 2, ..., n-1
//     for (let i = 0; i < deck.length; i++) {
//         indexQueue.push(i);
//     }

//     // While there are unrevealed cards
//     while (indexQueue.length > 0) {
//         // Reveal the card at the front of the queue
//         result.push(deck[indexQueue.shift()]);

//         // If there are remaining unrevealed cards
//         if (indexQueue.length > 0) {
//             // Move the next card to the bottom of the queue
//             indexQueue.push(indexQueue.shift());
//         }
//     }

//     return result;
// }

// // Example usage:





// var deckRevealedIncreasing = function(deck) {
//     let result = [];
//     deck = deck.sort((a,b) => b - a);
//     for (let i = 0; i < deck.length; i++) {
//       result.unshift(deck[i]);
//       if (i !== deck.length-1) result.unshift(result.pop());
//     }
//     return result;
// };




var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=>a-b);
    let res = [deck.pop()]
    console.log(res)
    while(deck.length>0){
        res.unshift(res.pop());
        res.unshift(deck.pop());
    }
    return res;
};

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck)); // Output: [2, 13, 3, 11, 5, 17, 7]


// const deckRevealedIncreasing = (deck) => {
//     let A = deck.sort((a, b) => a - b);
//     let B = [];
  
//     // In case there is no card in B
//     // Get the last card in the A and push it onto the first of the B
//     B.push(A.pop());
  
//     while (A.length) {
//       // Get the last card in the B and push it onto the first of the B
//       B.unshift(B.pop());
//       // Get the last card in the A and push it onto the first of the B
//       B.unshift(A.pop());
//     }
  
//     return B;
//   };




//   var deckRevealedIncreasing = function(deck) {
//     deck.sort((a,b) => a-b);
//     const ans = []
//     while (deck.length) {
//         ans.unshift(deck.pop())
//         ans.unshift(ans.pop())
//     }
//     ans.push(ans.shift())
//     return ans
// };

