function Employee(name){
this.name = name;
this.say = function () {
  log.add("I am employee " + name);
}
}
function EmployeeFactory(){
this.create = function (name) {
  return new Employee(name);
}
}

function Vendor(name){
this.name = name;
thi.say = function(){
  log.add("I am emplyee "+ name);
}
}
function VendorFactory(){
this.create = function (name){
  return new Vendor(name);
}
}

var log = (function (){
  var log = "";
  this.add = function (msg) {
    log+=msg +"\n";
  }
  this.show = function () {
    console.log();
  }
})

function run (){
var EmployeeFactory = new EmployeeFactory();
var VendorFactory = new VendorFactory();
var persons = [];
persons.push(EmployeeFactory.create("Yogamani"));
persons.push(VendorFactory.create("Balusamy"));
for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

    log.show();
}
