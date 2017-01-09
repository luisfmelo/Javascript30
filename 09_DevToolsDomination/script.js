const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

const str = "Developer";
const p = document.querySelector('p');

// Regular
console.log("Hello World!");

// Interpolated
console.log("Hello, I am a %s", str);
console.log(`Hello, I am a ${str}`)

// Styled
console.log("%cHello I%c am a%c Developer", "font-weight:bolder; font-size:18px; color: green",
                                            "font-weight:bolder; font-size:18px; color:yellow",
                                            "font-weight:bolder; font-size:18px; color:red");

// warning!
console.warn("NOOOOOO");

// Error :|
console.error("FUUUUCK");

// Info
console.info("Crocodiles eat 3~4 people per year");

// Testing
console.assert(1 === 2, "1 != 2, you dumbass");

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together -> in console
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`); // we can use console.group (the group is not collapsed by default)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${7*dog.age} dog years`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Developer');
console.count('Developer');
console.count('Developer');
console.count('Developer');
console.count('Luis');
console.count('Luis');
console.count('Luis');
console.count('Luis');
console.count('Developer');
console.count('Luis');
console.count('Developer');
console.count('Developer');
console.count('Luis');
console.count('Developer');
console.count('Developer');
console.count('Luis');
console.count('Luis');
console.count('Luis');
console.count('Luis');
console.count('Luis');

// timing
console.time("Fetching Data");
fetch('http://api.github.com/users/luisfmelo')
  .then(data => data.json())
  .then(data => {
    console.timeEnd("Fetching Data");
    console.log(data)
  });

console.table(dogs)
