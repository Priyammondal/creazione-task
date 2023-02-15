//Object to Array

const obj = {
  name: "Priyam Mondal",
  age: 24,
  profession: "Software Engineer",
  location: "kolkata",
};

// method 1
console.log(Object.entries(obj));
//method 2
console.log(Object.keys(obj).map((key) => [key, obj[key]]));

//Array to Object

const arr = [
  ["name", "Priyam Mondal"],
  ["age", 24],
  ["profession", "Software Engineer"],
  ["location", "kolkata"],
];

// method 1
const obj_method1 = arr.reduce(
  (acc, [key, value]) => ({ ...acc, [key]: value }),
  {}
);
console.log(obj_method1);

// method 2
const obj_method2 = {};
for (let [key, value] of arr) {
  obj_method2[key] = value;
}
console.log(obj_method2);
