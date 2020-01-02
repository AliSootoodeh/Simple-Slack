function Namespace(id, nsTitle, img, endpoint) {
    this.id = id;
    this.nsTitle = nsTitle;
    this.img = img;
    this.endpoint = endpoint;
    this.rooms = [];
  }
  
  Namespace.prototype.addRoom = function(roomObj){
      this.rooms.push(roomObj);
  }


  module.exports = Namespace;