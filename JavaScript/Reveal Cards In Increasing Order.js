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
