function Room(roomID , roomTitle , namespace , privateRoom = false){
    this.roomID = roomID;
    this.roomTitle = roomTitle;
    this.namespace = namespace;
    this.privateRoom = privateRoom;
    this.history = [];
}

Room.prototype.addMessage = function(message){
    this.history.push(message);
}

Room.prototype.clearHistory = function(){
    this.history = [];
}

module.exports = Room;