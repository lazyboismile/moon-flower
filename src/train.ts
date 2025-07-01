console.log("Hello world!");

/* Project Standarts
    - Logging Standarts
    - Naming Standarts
        function, method, variable => CamelCase
        class => PascalCase
        folder => KebabCase
        css => snakeCase
    - Error Handling
    
*/

/* Request:
    Traditional Api
    Rest API
    GraphQL API
*/

/* 
    Traditional FD => BSSR (Admin) => EJS
    Modern FD      => SPA  (User's Application)=> REACT
*/

/* Cookies
    request join
    self-destroy
*/

/* Validation:
    Frontend Validation
    Backend Validation
    Database Validation
*/

// ZJ Task Area

function reduceNestedArray(arr: (number | any[])[]): number {
  return arr.reduce((sum: number, item: number | any[]) => {
    if (Array.isArray(item)) {
      return sum + reduceNestedArray(item);
    }
    return sum + item;
  }, 0);
}

// Test Area

console.log("ZJ Task Area: ", reduceNestedArray([1, [1, 2, [4]]])); 
// Output: 8 (1 + 1 + 2 + 4)

console.log("ZJ Task Area: ", reduceNestedArray([1, 2, 3])); 
// Output: 6 (1 + 2 + 3)

console.log("ZJ Task Area: ", reduceNestedArray([1, [2, [3, [4]]]])); 
// Output: 10 (1 + 2 + 3 + 4)

console.log("ZJ Task Area: ", reduceNestedArray([])); 
// Output: 0 (bo'sh array)

console.log("ZJ Task Area: ", reduceNestedArray([1, [], [2, []]])); 
// Output: 3 (1 + 2)

console.log("ZJ Task Area: ", reduceNestedArray([[1, 2], [3, [4, 5]]])); 
// Output: 15 (1 + 2 + 3 + 4 + 5)

// ZI Task Area

function delayHelloWorld(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 3000);
  });
}

// Asinxron funksiyadan foydalanish
async function test() {
  console.log(await delayHelloWorld("Hello World")); 
  // 3 soniyadan so'ng: "Hello World"
}

test();

console.log("ZI Task Area: ", delayHelloWorld("Hello World")); 
// Output: Promise { <pending> } (chunki Promise qaytariladi)



//ZF Task Area

function capitalizeWords(str: string): string {
    return str
        .split(' ')
        .map(word => 
        word.length > 2 
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
            : word
    )
    .join(' ');
}

// TEST AREA
console.log("ZF Task Area: ", capitalizeWords('name should be a string')); 
// Output: 'Name Should be a String'

console.log("ZF Task Area: ", capitalizeWords('hi my name is tonny')); 
// Output: 'hi my Name is Tonny'

console.log("ZF Task Area: ", capitalizeWords('')); 
// Output: '' (bo'sh string)

console.log("ZF Task Area: ", capitalizeWords('HELLO world')); 
// Output: 'Hello World' (qolgan harflar kichik harfga aylantiriladi)

console.log("ZF Task Area: ", capitalizeWords('i am 17')); 
// Output: 'i am 17'

//ZE Task Area

function removeDuplicate(str: string): string {
    return [...new Set(str)].join('');
}

// TEST AREA

console.log("ZE Task Area: ", removeDuplicate('stringg')); 
// Output: 'string'

console.log("ZE Task Area: ", removeDuplicate('hello')); 
// Output: 'helo'

console.log("ZE Task Area: ", removeDuplicate('aabbcc')); 
// Output: 'abc'

console.log("ZE Task Area: ", removeDuplicate('')); 
// Output: '' (bo'sh string)

console.log("ZE Task Area: ", removeDuplicate('aaa')); 
// Output: 'a'

console.log("ZE Task Area: ", removeDuplicate('abcde')); 
// Output: 'abcde' (takrorlanuvchi harf yo'q)

// ZD Task Area 
function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
  // Yangi array yaratish (original arrayni o'zgartirmaslik uchun)
  const updatedArr = [...arr];
  // Berilgan indeksda qiymatni almashtirish
  if (index >= 0 && index < arr.length) {
    updatedArr[index] = newValue;
  }
  return updatedArr;
}

// TEST AREA

console.log("ZD Task Area: ", changeNumberInArray(1, [1, 3, 7, 2], 2)); 
// Output: [1, 2, 7, 2]

console.log("ZD Task Area: ", changeNumberInArray(2, [1, 2, 3, 4], 99)); 
// Output: [1, 2, 99, 4]

console.log("ZD Task Area: ", changeNumberInArray(5, [1, 2, 3], 50)); 
// Output: [1, 2, 3] (indeks chegaradan tashqarida)

console.log("ZD Task Area: ", changeNumberInArray(-1, [1, 2, 3], 50)); 
// Output: [1, 2, 3] (manfiy indeks noto‘g‘ri)

// ZC Task Area 

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

// TEST AREA
console.log("ZC Task Area: ", celsiusToFahrenheit(0));
console.log("ZC Task Area: ", celsiusToFahrenheit(10));
console.log("ZC Task Area: ", celsiusToFahrenheit(-40));

// ZA Task Area

function sortByAge(arr: { age: number }[]): { age: number }[] {
    return arr.sort((a, b) => a.age - b.age);
}

// TEST QILISH
console.log("ZA Task Area: ", sortByAge([{age: 23}, {age: 21}, {age: 13}]));
console.log("ZA Task Area: ", sortByAge([{age: 23}, {age: 45}, {age: 15}]));
console.log("ZA Task Area: ", sortByAge([{age: -1}, {age: 0}, {age: 1}]));

// Z Task Area

function sumEvens(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    
    return sum;
}

// Test qilish
console.log("Z Task Area: ", sumEvens([1, 2, 3]));
console.log("Z Task Area: ", sumEvens([1, 2, 3, 2])); 
console.log("Z Task Area: ", sumEvens([1, 3, 5]));
console.log("Z Task Area: ", sumEvens([2, 4, 6]));
console.log("Z Task Area: ", sumEvens([]));

// Y Task Area

function findIntersection(arr1: number[], arr2: number[]): number[] {
    // Natijani saqlash uchun massiv
    const result: number[] = [];
    
    // Birinchi massivni aylanib chiqadi
    for (let num of arr1) {
        // Agar son ikkinchi massivda bo‘lsa va natijada hali yo‘q bo‘lsa
        if (arr2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    
    return result;
}

// Test qilish
console.log("Y Task Area: ", findIntersection([1, 2, 3], [3, 2, 0]));
console.log("Y Task Area: ", findIntersection([1, 2, 3, 4], [2, 2, 3, 5]));
console.log("Y Task Area: ", findIntersection([1, 2], [3, 4])); 
console.log("Y Task Area: ", findIntersection([], [1, 2, 3]));
console.log("Y Task Area: ", findIntersection([1, 1, 1], [1, 1]));

// X Task Area

function countOccurrences(obj: { [key: string]: any }, key: string): number {
    let count = 0;
    
    for (let prop in obj) {
        if (prop === key) {
            count++;
        }
        if (typeof obj[prop] === "object" && obj[prop] !== null) {
            count += countOccurrences(obj[prop], key);
        }
    }
    
    return count;
}

// Test Area
console.log("X Task Area: ", countOccurrences({ model: "Bugatti", steer: { model: "HANKOOK", size: 30 } }, "model"));
console.log("X Task Area: ", countOccurrences({ a: 1, b: { a: 2, c: { a: 3 } } }, "a"));
console.log("X Task Area: ", countOccurrences({ x: 1, y: 2 }, "z"));
console.log("X Task Area: ", countOccurrences({}, "key"));
console.log("X Task Area: ", countOccurrences({ model: "Test", data: { other: 1 } }, "model"));

// W Task Area

function chunkArray(arr: number[], size: number): number[][] {
    if (size <= 0 || arr.length === 0) {
        return [];
    }
    
    const result: number[][] = [];
    
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    
    return result;
    }
    
// Test Area
console.log("W Task Area: ", chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log("W Task Area: ", chunkArray([1, 2, 3, 4, 5], 2));
console.log("W Task Area: ", chunkArray([1, 2, 3], 5));
console.log("W Task Area: ", chunkArray([], 3));
console.log("W Task Area: ", chunkArray([1, 2, 3], 0));

// V Task Area

function countChars(str: string): { [key: string]: number } {
    const result: { [key: string]: number } = {};

    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    
    return result;
}

// Test Area
console.log("V Task Area: ",countChars("hello"));
console.log("V Task Area: ",countChars("aaa"));
console.log("V Task Area: ",countChars(""));
console.log("V Task Area: ",countChars("&^$#@$#@%^!"));

// U Task Area 

function sumOdds(n: number): number {
    if (n < 0 || !Number.isInteger(n)) {
        return 0;
    }
    
    let count = 0;
    for (let i = 1; i <= n; i += 2) {
        count++;
    }
    
    return count;
}

// Test Area
console.log("U Task Area: ",sumOdds(9)); 
console.log("U Task Area: ",sumOdds(0));
console.log("U Task Area: ",sumOdds(-3));
console.log("U Task Area: ",sumOdds(2.5)); 

// T Task Area

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);
    
    return merged;
}

// Test Area
console.log("T Task Area: ",mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log("T Task Area: ",mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log("T Task Area: ",mergeSortedArrays([], [1, 2, 3]));
console.log("T Task Area: ",mergeSortedArrays([1, 2, 3], []));
console.log("T Task Area: ",mergeSortedArrays([], []));

// S Task Area 

function missingNumber(nums: number[]): number {
    for (let i = 0; i <= nums.length; i++) {
      if (!nums.includes(i)) {
        return i;
      }
    }
    return -1;
  }
  

// Test Area 
console.log("S Task Area: ",missingNumber([3, 0, 1]));
console.log("S Task Area: ",missingNumber([0, 1, 2, 4]));
console.log("S Task Area: ",missingNumber([7, 7, 7]));

// R Task Area

function calculate(arg: string): number {
    const parts = arg.split(" + ");

    if (parts.length !== 2) {
        return 0;
    }

    const num1 = Number(parts[0]);
    const num2 = Number(parts[1]);

    if (isNaN(num1) || isNaN(num2)) {
        return 0;
    }

    return num1 + num2;
}

// Test Area

console.log("R Task Area: ",calculate("1 + 3"));
console.log("R Task Area: ",calculate("2.5 + 3.5"));
console.log("R Task Area: ",calculate("1 + "));
console.log("R Task Area: ",calculate("a + b"));

// Q Task Area

function hasProperty(object: { [key: string]: any }, prop: string): boolean {
    return object.hasOwnProperty(prop);
}

// Test qilsih

console.log("Q Task Area: ", hasProperty({ name: "BMW", model: "M3" }, "model"));
console.log("Q Task Area: ", hasProperty({ name: "BMW", model: "M3" }, "Porschega yetmidi baribir Smile!"));
console.log("Q Task Area: ", hasProperty({ x: 10, y: 0 }, "x"));
console.log("Q Task Area: ", hasProperty({}, "check"));
// P Task Area

function objectToArray(object: { [key: string]: any }): [string, any][] {
    return Object.entries(object);
}

// Test Area
console.log("P Task Area: ", objectToArray({ a: 10, b: 20 }));
console.log("P Task Area: ", objectToArray({ age: 17, name: "Tony" }));
console.log("P Task Area: ", objectToArray({ }));
console.log("P Task Area: ", objectToArray({ 1: true, 0: false }));


// O Task Area

function calculateSumOfNumbers(array: any[]): number {
    let sum = 0;
    for (let req of array) {
        if (typeof req === "number" && !isNaN(req)) {
            sum += req;
        }
    }
    return sum;
}

// Test Area

console.log("O Task Area: ", calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
console.log("O Task Area: ", calculateSumOfNumbers([1, 4, "2", false]));
console.log("O Task Area: ", calculateSumOfNumbers([]));
console.log("O Task Area: ", calculateSumOfNumbers(["T", "O", "N", "Y", "2", 5]));


// N Task Area

function palindromCheck(string: string): boolean {
    const checkString = string.split("").reverse().join("");
    
    return string === checkString;
}

// Test Area

console.log("N Task Area: ", palindromCheck("madam"));
console.log("N Task Area: ", palindromCheck("hello"));
console.log("N Task Area: ", palindromCheck("race a car"));
console.log("N Task Area: ", palindromCheck("noon"));
console.log("N Task Area: ", palindromCheck("12321"));
console.log("N Task Area: ", palindromCheck(" "));

// M Task Area 

interface NumberSquare {
    number: number;
    square: number;
}

function getSquareNumbers(arr: number[]): NumberSquare[] {
    const result: NumberSquare[] = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const sq: NumberSquare = {
            number: num,
            square: num * num
        };
        result.push(sq);
    }

    return result;
}

// Test Area

console.log("M Task Area: ", getSquareNumbers([1, 2, 3, 4, 5]));
console.log("M Task Area: ", getSquareNumbers([-1, -2, -3, -4, -5]));
console.log("M Task Area: ", getSquareNumbers([0, 0, 0, 0, 0]));
console.log("M Task Area: ", getSquareNumbers([]));

// L Task Area 

function reverseSentence(string: string): string {
    return string.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

// Test Area

console.log("L Task Area: ", reverseSentence("Hello World! This is a test."));
console.log("L Task Area: ", reverseSentence("I came from Uzbekistan!"));
console.log("L Task Area: ", reverseSentence("Code & Mood"));
console.log("L Task Area: ", reverseSentence(":4   "));


// K Task Area

function countVowels(string: string): number {
    const lowerString = string.toLowerCase();
    let count = 0;
    
    for (const vowels of lowerString) {
        if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
            count += 1; 
        }
    }

    return count;
}

// Test Area
console.log("K Task Area: ", countVowels("Hello World! This is a test."));
console.log("K Task Area: ", countVowels("SPY"));
console.log("K Task Area: ", countVowels("MIT25TONY"));

// J Task Area

function findLongestWord(str: string): string {
    const words = str.split(" ");
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log("J Task Area: ", findLongestWord("Hello World! This is a test."));
console.log("J Task Area: ", findLongestWord("I came from Uzbekistan!"));
console.log("J Task Area: ", findLongestWord("Code & Mood"));
console.log("J Task Area: ", findLongestWord(""));
console.log("J Task Area: ", findLongestWord(" "));

// I Task Area

function majorityElement(arr: number[]): number {
    if (arr.length === 0) return -1;

    const count = arr.reduce((acc: { [key: number]: number }, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    let maxCount = 0;
    let maxNum = arr[0];

    for (let num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            maxNum = Number(num);
        }
    }

    return maxNum;
}

// Test qilish

console.log("I Task Area: ", majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
console.log("I Task Area: ", majorityElement([2, 2, 3, 3, 3]));
console.log("I Task Area: ", majorityElement([]));

// H2 Task Area

function getDigits(str: string) {
    let result = "";
    for (let num of str) {
        if (num >= '0' && num <= '9') {
            result += num;
        }
    }
    return result;
}

console.log("H2 Task Area: ", getDigits("m14i1t"));
console.log("H2 Task Area: ", getDigits("MIT25TONY"));
console.log("H2 Task Area: ", getDigits("abcdefghijklmnopqrstuvwxyz"));


// H Task Area

function getPositive(arr: number[]): string {
    if (arr.every(num => num < 0)) {
        return "Hamma kiritilgan raqamlar manfiy"; 
    }
    return arr.filter(num => num > 0).join("");
}

console.log("H Task Area: ", getPositive([1, -4, 2]));
console.log("H Task Area: ", getPositive([3, 3, 3]));
console.log("H Task Area: ", getPositive([-4, -4, -4]));

// G Task Area

function getHighestIndex(arr: number[]) {
    if (arr.length === 0) return -1;

    const first = arr[0];
    let max = first;
    let maxIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}

// Test Cases for G Task Area
console.log("G Task Area: ", getHighestIndex([5, 21, 12, 21, 8]));
console.log("G Task Area: ", getHighestIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]));
console.log("G Task Area: ", getHighestIndex([]));
