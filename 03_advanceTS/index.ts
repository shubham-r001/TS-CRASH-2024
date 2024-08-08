// -------------------------------------------------------------------
/* 🎌 1. How to define types for primitives */ 
let number: number = 12;
let profession : string = "Front End Developer";
let isLoggedIn : boolean = false;
let userDetail: undefined = undefined;
let userAge: null = null;

// console.log(number)
// console.log(profession)
// console.log(isLoggedIn)

// -------------------------------------------------------------------

/* 🎌 2. Type inference : It's a situation where developer doesn't assign value after declaring it. It leads to different behaviour of TS
   as dev can change the type of it as many times as he want. 
   ============================
   But Type inference will not work once we assign value to a variable 
   ============================
*/

// let isUserLogout = "1";

let isUserLogout;
isUserLogout = true;
isUserLogout = "false";
isUserLogout = undefined;
// console.log(isUserLogout);

// -------------------------------------------------------------------
/* 🎌 3. How to define types in reference type (Arrays) ??  What union symbol do ??  */
// let b2 = ["Skydiving","High Jump","Bunjee Jumping",1];
const productList: string[] = ["Mouse","Backlit light","Laptop SKin"];
const bucketList: ( string | number )[] = ["Skydiving","High Jump","Bunjee Jumping",1];

// -------------------------------------------------------------------
/* 🎌 4. How to define types in reference type (objects) using (type/interface) ??  */
// interface employeeDetail  {
//     name: String,
//     age: number,
//     isLoggedin: boolean,
// }

type employeeDetail = {
    name: String,
    age: number,
    isLoggedin: boolean,
}

const printEmployeeDetail = (employeeDetail: employeeDetail) => {
    return `My name is ${employeeDetail.name} and my age is ${employeeDetail.age}. I am ${employeeDetail.isLoggedin ? "logged in " : "logged out"}`;
}

// console.log(printEmployeeDetail({name: "Shubham",age: 27,isLoggedin: true}))

// -------------------------------------------------------------------
/* 🎌 5. We can also hold float/binary/octal/hexa/bigInt value using number type .*/

const deciVal: number = 12.4;
const binVal: number = 0b100;
const octVal: number = 0o100;
const hexVal: number = 0x100;
const bigIntVal: bigint = 9007199254740991n;

// -------------------------------------------------------------------

/*🎌 6. never vs void type */

// function printMyLiveLocation(city:string, landmark: string, code: number):never{
//     console.log(`${city},${landmark},${code}`);
// }

function printMyLiveLocation(city:string, landmark: string, code: number):void{
    console.log(`${city},${landmark},${code}`);
}

// printMyLiveLocation("Delhi","Near Uttarakhand Tent House",110043);

// -------------------------------------------------------------------

/*🎌 7. ENUMS */

enum MarketBucketList {
    POTATO = "potato",
    TOMATO = "tomato",
    BRINJAL = "brinjal",
    ONION = "onion",
    CHEESE = "cheese",
    PANEER = "paneer"
}


enum userAction {
    ADD_TO_CART = "add-to-cart",
    DELETE_FROM_CART = "delete-from-cart",
    UPDATE_CART = "update-cart",
}

enum weekdays {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY = weekdays.MONDAY - 1,
}

// console.log(MarketBucketList.TOMATO);
// console.log(userAction.ADD_TO_CART);
// console.log(weekdays);
// console.log(weekdays.SUNDAY);

// -------------------------------------------------------------------

/*🎌 8. Arrays & Tuples ? what is union ?  */

// let fruits: (string | number)[] = ["apple","orange",12]

let houseArchitecture: string[] = ["Living Room","Dining Room","Kitchen","BedRoom"];

/* Below Array convert into fix sizes i.e. only 3. You can insert the element into array but cannot access inserted element */
let gymEquipment: [string,string,string] = ["dumbell","plates","resistant band"];
gymEquipment.push("Smith Machine")
// console.log(gymEquipment)
// console.log(gymEquipment[3])

// -------------------------------------------------------------------

/*🎌 9. type alias/interface usages */

type profession = number;

let prof: profession = 12;

type customerDetail = {
    customer_name: string,
    customer_gender: string,
    customer_age: number,
}

// ================
// Note. You can't add new properties when using type alias.

// type addedCustomerProperties extends customerDetail = {
//     age: number,
//     caste: string,
// }


// let obj2 : customerDetail = {
//     customer_name: "Shubham",
//     customer_gender: "Male",
//     customer_age: 12,
//     age: 26,
//     caste: "Rawat"
// }
// ================

interface userDetail {
    fullname: string,
    gender: string,
    rating: number
}

interface userMoreDetail extends userDetail {
    age: number,
    caste: string,
}

let obj: userDetail = {
    fullname: "Shubham",
    gender: "Male",
    rating: 5,
}

let obj1 : userMoreDetail = {
    fullname: "Shubham",
    gender: "Male",
    rating: 5,
    age: 26,
    caste: "Rawat"
}

// ----- usage of (&) opertor in type

/***** [Doubt in this]
type favourites =  userDetail & {
    fruit: 'string'
}

let obj3: favourites = {
    fullname: "Aditi",
    gender: "Female",
    rating: 4,
    // fruit: 'Shubaham'
}
*******/

// -------------------------------------------------------------------
/*🎌 10. Optional Property & Non null assertion */

interface clientDetail {
    name: string,
    id: number,
    policies: number[],
    gender?: string | null,
}

let client1:clientDetail = {
    name: "Anish",
    id: 101,
    policies: [10125,10126,10127,10128],
    gender: "Male"
}


let client2:clientDetail = {
    name: "Anish",
    id: 101,
    policies: [10125,10126,10127,10128],
}


function getGender(gender: string, profession?: string){
    return `Your gender is ${gender}` + profession!;
}

/* Non null assertion (!) means whatever argument passing is not ( null/undefined ) */
// console.log(getGender(client1.gender!));
// console.log(getGender(client2.gender!));

// -------------------------------------------------------------------
/*🎌 11. generics in TS */

const nums = [22,13,15,188,28];
const strs = ["Tomato","Potato","Onion","Grapes"];

function getRandomNumber(arr: number[]){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getRandomString(str: string[]){
    let index = Math.floor(Math.random() * str.length);
    return str[index];
}

function commonFun(values: any) : any{
    let index = Math.floor(Math.random() * values.length);
    return values[index];
}

// console.log(getRandomNumber(nums))
// console.log(getRandomString(strs))

/* We can achieve the same logic with the common function with any type. But this is not generics */
// console.log(commonFun(nums))
// console.log(commonFun(strs))

/* generics */

type person = {
    firstname: string,
}

function utility<G>(values: G[] ):G {
    let index = Math.floor(Math.random() * values.length);
    return values[index];
}

// console.log(utility(nums))
// console.log(utility(strs))

// -------------------------------------------------------------------
/*🎌 12. Classes in TS */

/*
  Sub-topics: ==
    1. Access Modifier 2. getter & setter.
    2. 
*/

class Employee {
    readonly username;
    protected ratings;

    constructor(name:string,rating:number){
        this.username = name;
        this.ratings = rating;
    }

    // public getUserName(){
    //     return this.username
    // }
    
    public getUserRatings(){
        return this.ratings
    }
}

class Method extends Employee {
    get getUserName(){
        return this.username;
    }
}

let e1 = new Employee("Aditi",5);
// e1.username = "Sushmita"; // cannot assign sushmita as username is readOnly

let e2 = new Method("Shubham",10)

// e1.username = "Sonal Rawat";
// console.log(e1.username);
// console.log(e1.ratings);

console.log(e2.getUserName)
console.log(e1.getUserRatings())