const name = "DevYeon",
    age = 22,
    gender = "male";


const sayHi = (name: string, age: number ,gender: string): string => {
    return `Hello ${name}, You are ${age}, you are a ${gender}`;
};

console.log(sayHi("DevYeon", 22, "male"));
export{};