function HouseKeeper (name, age,workPermit, experience, rating) {
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.experience = experience;
    this.rating = rating;
}
var houseKeeper1=new HouseKeeper("teja",26,true,2,3.9);
var houseKeeper2=new HouseKeeper("rashi",30,true,4,4.9);
var houseKeeper3=new HouseKeeper("babita",22,true,1,2.9);




function HouseKeeper (name, age,workPermit, experience, rating) {
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.experience = experience;
    this.rating = rating;
    this.clean= function(){
        alert("may I clean this");
        
    }
}
var houseKeeper1=new HouseKeeper("teja",26,true,2,3.9);
var houseKeeper2=new HouseKeeper("rashi",30,true,4,4.9);
var houseKeeper3=new HouseKeeper("babita",22,true,1,2.9);

//lec 171

function anotherAddEventListener(typeOfEvent, callback){
    var eventThatHappened = {
        eventType: "Keypress",
        key:"p",
        durationOfKeyPress:2
 
    }
if (eventThatHappened.eventType===typeOfEvent){
    callback(eventThatHappened);
}
}