angular.module("lab1d",["ngRoute","lab1a","lab1b","lab1c"]).config(["$routeProvider",function(l){l.when("/lab1a",{templateUrl:"views/lab1a.html",controller:"lab1aController"}).when("/lab1b",{templateUrl:"views/lab1b.html",controller:"lab1bController"}).when("/lab1c",{templateUrl:"views/lab1c.html",controller:"lab1cController"}).otherwise({redirectTo:"/",templateUrl:"views/otherwise.html"})}]),angular.module("lab1a",[]).controller("lab1aController",function(l){l.name="Pepe",l.id="234234",l.profession="Desarrollador",l.salary="79879",l.phone="345345345",l.address="Ave 123"}),angular.module("lab1b",[]).controller("lab1bController",function(l){l.filtros=["filter","currency","number","date","json","lowercase","uppercase","limitTo","orderBy"],l.campos=["input[text]","input[date]","input[datetime-local]","input[time]","input[week]","input[month]","input[number]","input[url]","input[email]","input[radio]","input[checkbox]"]}),angular.module("lab1c",[]).controller("lab1cController",function(l){l.link_image="http://placehold.it/350x150",l.changeLinkImage=function(){"http://placehold.it/350x150"==l.link_image?l.link_image="http://placehold.it/140x100":l.link_image="http://placehold.it/350x150"}});