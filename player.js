class Player{
constructor (){
    this.index = null;
    this.name = null;
}
getCount(){
    var playerCountRef = database.ref('playerCount')
    playerCountRef.on("value",(data)=>{
        playerCount = data.val();
    })
}

UpdateCount(){
database.ref('/').update({
    playerCount: count
})

}
update(){
var playerIndex = "players/player" + this.index;
database.ref(playerIndex).set({
    name:this.name

});




}
static playerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
        allPlayers = data.val;
    })
}
}
