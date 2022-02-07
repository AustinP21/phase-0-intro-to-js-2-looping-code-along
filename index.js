function writeCards(cards) {
    const giftCards = []
    console.log(cards)
    for (let i=0; i<cards.length; i++) {
        giftCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return giftCards;
}
function countDown (){
    var countdown = 11;
    while (countdown > 0){
        countdown--;
        console.log(countdown);
    }
}
   