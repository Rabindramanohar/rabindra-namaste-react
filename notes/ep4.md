# props
- it is passing object from parent component to child component
- props are immutable in nature
- when we need dynamic data we can values as props 

# config driven UI
 It is a technique that allow you to create dynamic and customizable UIs without hardcoding them. It uses a configuration file or database to define the layout and content of Ui components.
 ### Benefits of using
 - **Flexibility** : Config Driven Ui allow you to create dynamic and customizable UIs that can be easily modified without requiring changes to underlying code.
 - **Efficiency** : Config Driven UI reduces the need for redundant code, making it easier to maintain and update your application
 - **Scalability** : Config Driven UI makes it easier to onboard new UI scenarios quickly and with minimal regression in old UI flows.

 # CDN
 A CDN(content delivery network) is group of server spread out many locations. These servers stores duplicate copies of data so that server can fulfil data requests based on which servers are closest to the respective end-users. CDNs make for fast service less affected by high traffic.

 # Reusuable components
  It promotes efficiency by minimizing the code needed, expediting development, simplifying the codebase, and facilitating a more effortless upkeep process. In this tutorial, we will build reusable React components that can be used throughout your projects to maintain consistency in logic and presentation. We’ll use Hooks for managing and manipulating state data

  # Importance of key attribute in React
  - key should be unique
  - If key is not provided React will rerender all the list/items in the DOM
  - It affect the performance of the application
  - Always avoid to use index as key, because when we add new item to the state and sort/mapped react got confused which properties belongs to which mapped components


  # JS concepts
  ## optional channing
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is **undefined** or **null**, the expression short circuits and evaluates to **undefined** instead of throwing an **error**.
  ```javascript
  const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

## map, reduce, filter
Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function.

### map
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### filter
The filter() method takes each element in an array and it applies a conditional statement against it. If this condition returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
```javascript
const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]
```

### reduce
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

The **callback** argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

**accumulator** - the returned value of the previous iteration
**currentValue** - the current item in the array
**index** - the index of the current item
**array** - the original array on which reduce was called
The **initialValue** argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

```javascript
const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const petCounts = pets.reduce((obj, pet) => {
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 

/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */
```


