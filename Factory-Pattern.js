function Factory(){
  this.createEmployee = function(type){
    var employee;
    if(type === "FullTime"){
      employee = new FullTime();
    }
    employee.type = type;
    employee.say = function (){
      log.add("employee type"+this.type + ":"+"Paid-"+this.hourly);
    }
  }
}
var FullTime = function () {
    this.hourly = "$12";
};
// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run(){
  var employees = [];
  var factory = new Factory();
  employees.push(factory.createEmployee("FullTime"));
  for (var i = 0, len = employees.length; i < len; i++) {
       employees[i].say();
   }

   log.show();
}
