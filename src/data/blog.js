export const blogsData = [
    {
        id: 1,
        title: "JavaScript Method Chaining .",
        date: "10 June, 2024",
        content: `Method chaining is a technique that involves calling multiple methods on the same object in a sequential manner. Instead of writing separate lines of code to perform individual operations, method chaining allows us to chain together method calls, forming a fluent interface that reads like a natural language sentence.`,
        fade: "fade-right",
        image: `https://miro.medium.com/v2/resize:fit:1400/0*jgUWKdbki4MUHfe4`,
        exampleCode: `Example : const result = someObject.method1().method2().method3();
        <br>
        const numbers = [1, 2, 3, 4, 5];<br>

        const result = numbers<br>
        .map(num => num * 2)   // Multiply each number by 2<br>
        .filter(num => num % 3 === 0)   // Filter out numbers that are not divisible by 3<br>
        .reduce((acc, num) => acc + num, 0);  // Sum all the remaining numbers <br>
        // output : 6
        `,
        exampleTitle: "Consider the following example:",
        tags: ["JavaScript", "MethodChaining", "WebDevelopment", "CodeOptimization", "FrontEndDevelopment"]
    },
    {
        id: 2,
        title: "Exploring the sort Method in JavaScript",
        date: "14 June, 2024",
        content: `JavaScript provides developers with a plethora of methods to manipulate and manage data effectively. One such method is sort, which allows us to organize the elements of an array based on specific criteria. Understanding how to utilize the sort method can significantly improve the efficiency and readability of your code, especially when working with large datasets.
        <br>
        <br>

The sort method in JavaScript sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings and then comparing their sequences of UTF-16 code units values. However, for more complex sorting, a compare function can be provided to determine the order of the elements.

<br>
<br>

### <b> What is the sort Method? </b> <br>

The sort method in JavaScript sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings and then comparing their sequences of UTF-16 code units values. However, for more complex sorting, a compare function can be provided to determine the order of the elements.
<br>
<br>

### <b>Syntax</b><br>
array.sort([compareFunction]);<br>


- \`compareFunction\` (Optional): Specifies a function that defines the sort order. If omitted, the array elements are converted to strings and sorted according to each character's Unicode code point value.
<br>
<br>
### <b> Basic Usage </b> <br>

By default, sort will sort an array of strings alphabetically:<br>
Example:<br> 
const fruits = ["banana", "apple", "cherry", "date"];<br>
fruits.sort();<br>
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"] <br>
<br>
### <b> Sorting Numbers</b> <br>

Sorting numbers requires a compare function because the default string-based sorting can lead to incorrect results:<br>
Example: <br>
const numbers = [10, 5, 21, 1];<br>
numbers.sort(); <br>
console.log(numbers); // Output: [1, 10, 21, 5] <br>
<br>

The output is incorrect for numerical sorting. To sort numbers properly, a compare function is necessary:
<br>
const numbers = [10, 5, 21, 1];<br>
numbers.sort((a, b) => a - b); <br>
console.log(numbers); // Output: [1, 5, 10, 21] <br>
<br>


### <b> Custom Sorting </b> <br>

The sort method becomes powerful when combined with a custom compare function. The compare function takes two arguments (often referred to as \`a\` and \`b\`), and should return: <br>
- A negative value if \`a\` should come before \`b\`. <bR>
- Zero if \`a\` and \`b\` are considered equal. <br>
- A positive value if \`a\` should come after \`b\`. <br>
<br>

#### <b>Example: Sorting Objects</b> <br>

Consider an array of objects representing people, each with a \`name\` and \`age\` property: <br>

const people = [ <br>
    { name: 'John', age: 25 }, <br>
    { name: 'Jane', age: 22 },<br>
    { name: 'Jim', age: 35 },<br>
    { name: 'Jake', age: 28 }<br>
];<br>


To sort this array by age: <br>

people.sort((a, b) => a.age - b.age);<br>
console.log(people);<br>
 Output: <br>
 [<br>
     { name: 'Jane', age: 22 },<br>
     { name: 'John', age: 25 },<br>
     { name: 'Jake', age: 28 },<br>
     { name: 'Jim', age: 35 }<br>
 ]<br>
<br>

### <b>Sorting in Descending Order : </b><br>

To sort in descending order, simply reverse the order of subtraction in the compare function:<br>

numbers.sort((a, b) => b - a);<br>
console.log(numbers); // Output: [21, 10, 5, 1]<br>
<br>

For the array of people by descending age: <br>
people.sort((a, b) => b.age - a.age);<br>
console.log(people);<br>
 Output: <br>
 [<br>
     { name: 'Jim', age: 35 },<br>
     { name: 'Jake', age: 28 },<br>
     { name: 'John', age: 25 },<br>
     { name: 'Jane', age: 22 }<br>
 ]<br>
 <br>


### <b>Sorting with Method Chaining : </b><br>

The sort method can be used in conjunction with other array methods to perform complex operations concisely. This is especially useful for data transformation pipelines:<br>

const numbers = [10, 5, 21, 1, 15, 8];<br>

const result = numbers<br>
    .sort((a, b) => a - b)     // Sort in ascending order<br>
    .filter(num => num > 5)    // Filter numbers greater than 5<br>
    .map(num => num * 2);      // Double each remaining number<br>

console.log(result); // Output: [12, 16, 20, 30, 42]<br>
<br>


### <b>Conclusion : </b><br>

The sort method in JavaScript is a versatile tool that can be customized to handle a variety of sorting scenarios. By understanding its default behavior and leveraging custom compare functions, you can efficiently sort arrays of numbers, strings, and objects. Method chaining further enhances its utility, allowing for clean and readable code when performing multiple operations on data sets. <br><br>

Embrace the power of the sort method and unlock new potential in your JavaScript coding journey!`,
        fade: "fade-left",
        image: `https://scaler.com/topics/images/working-of-array-sort-method.webp`,
        exampleCode: `Example: const numbers = [10, 5, 21, 1];<br>
numbers.sort((a, b) => a - b);<br>
console.log(numbers); // Output: [1, 5, 10, 21]<br>

const people = [<br>
    { name: 'John', age: 25 },<br>
    { name: 'Jane', age: 22 },<br>
    { name: 'Jim', age: 35 },<br>
    { name: 'Jake', age: 28 }<br>
];<br>

people.sort((a, b) => a.age - b.age);<nr>
console.log(people);<br>
 Output: <br>
 [<br>
     { name: 'Jane', age: 22 },<br>
     { name: 'John', age: 25 },<br>
     { name: 'Jake', age: 28 },<br>
     { name: 'Jim', age: 35 }<br>
 ]`,
        exampleTitle: "Consider the following example:",
        tags: ["JavaScript", "sortMethod", "WebDevelopment", "DataSorting", "FrontEndDevelopment"]
    }

]