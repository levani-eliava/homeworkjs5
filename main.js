//შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს 
// ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
// დავალება 1.

let nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 2; index < nambers.length; index+=3) {
    //console.log(nambers[index]);
}

//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. 
// მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
//დავალება 2

let nambers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let index = 10; index >= 1; index --) {
    //console.log(index);
    
}

//მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. 
// შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით,
//  ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
// დავალება 3.

let names = ['Jonh', "Nick", "Mary", "Sue", "Ann", "Bob"];

for( i = 0; i < names.length; i++){
    names.splice(5, 1)
    console.log(names[i]);
   
}

// 2 ვარიანტი.

let names2 = ['Jonh', "Nick", "Mary", "Sue", "Ann", "Bob"];

let index = names2.indexOf("Bob");
if (index !== -1) {
    names2.splice(index, 1);
    
}

console.log(names2);

//დავალება 4
//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, 
// მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. 
// თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function fun (number, power){
      let result = 1;
      for(i = 0; i < power; i++){
         result *= number
      }

      return result;
}

console.log(fun(5,3)) // 125


//დავალება 5 
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ,
//  და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით 
// გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც 
// უნაშთოდ გამოიტანეთ FizzBuzz.

function fun2() {
     for(let i = 1; i < 100; i++){
       if(i % 3 === 0 && i % 5 === 0){
          console.log("fizzbuzz");
       }else if(i % 3 === 0){
          console.log("fizz")
       }else if(i % 5 === 0){
          console.log("buzz")
       }else{
        console.log(i);
       }
     }
}

fun2();



//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის 
// პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 
// დავალება 6 

function factorialCalculator(number5) {
       let result1 = 1
       for(let i = 1; i <= number5; i++){
          result1 *= i;
       }

       return result1
}

console.log(factorialCalculator(5)); // 120




//შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს 
// მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს. 

function capital(cap) {
      return cap.charAt(0).toUpperCase() + cap.slice(1);
      
}

console.log(capital("javascript"));



//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. 
// მაგ. blankStringChecker(testString) => 
// რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blank(testString) {
       if (testString.trim() === "") {
          return "this string is blank"
       }else{
        return "this string is not blank"
       }
}

console.log(blank("hello"))

//შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. 
// მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => 
// გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function Array(string) {
     return string.split("")
}

console.log(Array("hello world"))




//შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: 
// მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, 
// თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
//წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function emailProtect(email) {
 let [name, domain] = email.split('@');
 let parts = name.split('.');
 if (parts.length !== 2) {
    return "Invalid email format";
  }

  let firstName = parts[0];
  let lastName = parts[1];

  
  let hiddenLastName = '.'.repeat(lastName.length);

  return `${firstName}${hiddenLastName}@${domain}`;
}

console.log(emailProtect("beqa.beqauri@gmail.com")); // "beqa......@gmail.com"



//შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

function findLongestWord(str) {
  
  let words = str.split(" ");


  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}


console.log(findLongestWord("მე ვარ დეველოპერი")); 




//შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად.
//  num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით

const calculator = {
  num1: 10,
  num2: 5,

  add: function() {
    return this.num1 + this.num2;
  },

  subtract: function() {
    return this.num1 - this.num2;
  },

  multiply: function() {
    return this.num1 * this.num2;
  },

  divide: function() {
    return this.num1 / this.num2;
  }
};


console.log("მიმატება:", calculator.add());        // 15
console.log("გამოკლება:", calculator.subtract());  // 5
console.log("ნამრავლი:", calculator.multiply());  // 50
console.log("განაყოფი:", calculator.divide());    // 2




