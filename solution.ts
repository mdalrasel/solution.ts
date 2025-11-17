// Problem 1: formatValue Function

function formatValue(value: string | number | boolean): string | number | boolean {
    // 1. If the input is a string
    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    // 2. If the input is a number
    else if (typeof value === 'number') {
        return value * 10;
    }

    // 3. If the input is a boolean (The remaining case)
    else if (typeof value === 'boolean') {
        return !value;
    }

    return value;
}
// console.log(formatValue('Rasel')); 
// console.log(formatValue(6));      
// console.log(formatValue(false));    



// Problem 2: getLength Function

function getLength(value: string | any[]): number {
    // 1. If the input is a string, use typeof for type checking.
    if (typeof value === 'string') {
        return value.length;
    }

    // 2. If the input is an array, use Array.isArray for type checking.
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

// console.log(getLength('abcde'));    
// console.log(getLength([10,20,30])); 




// Problem 3: Person Class

class Person {
    // Properties must be declared with their types
    name: string;
    age: number;

    // Constructor to initialize the properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // Method to return the details in the specified format
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails()); // Output: 'Name: John Doe, Age: 30'

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails()); // Output: 'Name: Alice, Age: 25'





// Problem 4: filterByRating Function

interface Item {
    title: string;
    rating: number;
}

function filterByRating(items: Item[]): Item[] {
    const filteredItems = items.filter(item => {
        return item.rating >= 4;
    });

    return filteredItems;
}
// const books: Item[] = [
//   { title: 'Book A', rating: 2.5 },
//   { title: 'Book B', rating: 4.0 },
//   { title: 'Book C', rating: 5.0 },
// ];
// console.log("Original Array is NOT mutated:", books);
// console.log("Filtered Results:", filterByRating(books));


// Problem 5: Filters the array to return only active users.

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => {
        return user.isActive;

    });
}
// const users: User[] = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));


// Problem 6: Prints the details of a Book object to the console.
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): void {
    const availabilityStatus: string = book.isAvailable ? 'Yes' : 'No';

    const outputString =
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`;

    console.log(outputString);
}

// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: true,
// };
// printBookDetails(myBook);


// Problem 7: Returns unique values from two arrays without using built-in methods (like Set, concat, etc.).

type ArrayItem = number | string;

function getUniqueValues(arr1: ArrayItem[], arr2: ArrayItem[]): ArrayItem[] {
    const uniqueResult: ArrayItem[] = [];

    function isAlreadyInResult(element: ArrayItem): boolean {
        for (let i = 0; i < uniqueResult.length; i++) {
            if (uniqueResult[i] === element) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const currentElement: ArrayItem = arr1[i]!;

        if (!isAlreadyInResult(currentElement)) {
            uniqueResult.push(currentElement);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const currentElement: ArrayItem = arr2[i]!;

        if (!isAlreadyInResult(currentElement)) {
            uniqueResult.push(currentElement);
        }
    }
    return uniqueResult;
}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));



// Problem 8: Calculates the total price of all products, considering optional discounts.

interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((accumulator, product) => {
        const basePrice = product.price * product.quantity;
        let finalPrice = basePrice;

        if (product.discount !== undefined && product.discount > 0) {
            const discountAmount = basePrice * (product.discount / 100);

            finalPrice = basePrice - discountAmount;
        }
        return accumulator + finalPrice;
    }, 0);
}