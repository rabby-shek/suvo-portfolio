export const blogsData = [
    {
        id: 1,
        title: "JavaScript Method Chaining .",
        date: "10 June, 2024",
        content: "Method chaining is a technique that involves calling multiple methods on the same object in a sequential manner. Instead of writing separate lines of code to perform individual operations, method chaining allows us to chain together method calls, forming a fluent interface that reads like a natural language sentence.",
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
]