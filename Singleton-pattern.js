var Singleton = (function (){
  var instance;
  function createInstance(){
    retun new Object("I am the Instance");
  }
  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

function run (){
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  alert("Same instance? " + (instance1 === instance2));  
}
