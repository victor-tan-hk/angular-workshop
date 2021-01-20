var express = require('express')
var router = express.Router();

const stocks = [
  {name: 'Test Stock Company', code: 'TSC', price: 85, previousPrice: 80, exchange: 'NASDAQ', favorite: false},
  {name: 'Second Stock Company', code: 'SSC', price: 10, previousPrice: 20, exchange: 'NSE', favorite: false},
  {name: 'Last Stock Company', code: 'LSC', price: 876, previousPrice: 765, exchange: 'NYSE', favorite: false},
];

const employees = [

  {name: 'Peter', age : 35, role: 'Developer', email: 'peter@gmail.com', languages: 'java python html', os: ''},
  {name: 'Jane', age : 22, role: 'Admin', email: 'jane@gmail.com', languages: '', os: 'windows linux'},
  {name: 'Steven', age : 28, role: 'Developer', email: 'steven@gmail.com', languages: 'python javascript', os: ''},
  {name: 'Ann', age : 38, role: 'Admin', email: 'ann@gmail.com', languages: '', os: 'macos windows'},
]

router.get('/', (req, res) => {
  var query = (req.query['n'] || '').toLowerCase();
  if (query) {
	console.log('Returning specific employee');
    const foundEmployee = employees.filter(
      (employee) => employee.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundEmployee);
  }
  console.log('Returning list of employees');
  return res.status(200).json(employees);
});

router.post('/', (req, res) => {
  console.log("Attempting to add new employee");	
  let employee = req.body;
  let foundEmployee = employees.find(each => each.name === employee.name);
  if (foundEmployee) {
    return res.status(400)
        .json({msg: 'Employee with name ' + employee.name + ' already exists'});
  }
  employees.push(employee);
  return res.status(200).json({msg: 'Employee with name ' + employee.name + ' successfully created'});
});

router.patch('/:name', (req, res) => {
  let employeeName = req.params.name;
  console.log("Request to modify employee with name : " + employeeName);
  let foundEmployee = employees.find(each => each.name === employeeName);
  if (foundEmployee) {
	console.log("Located employee : " + employeeName);
	console.log("Modifying with these new fields");
	console.log("Age : " + req.body.age);
	console.log("Role : " + req.body.role);
	console.log("Email : "  + req.body.email);
	console.log("Languages : " +  req.body.languages);
	console.log("OS : " + req.body.os);
	
	foundEmployee.age = req.body.age;
	foundEmployee.role = req.body.role;
	foundEmployee.email = req.body.email;
	foundEmployee.languages = req.body.languages;
	foundEmployee.os = req.body.os;
	
    return res.status(200).json({msg: "Employee details modified"});
	  
  }
  return res.status(400).json({msg: 'Employee with name  : ' + employeeName + ' not found!'});
 
});

module.exports = router;