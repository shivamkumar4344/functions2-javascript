// 1.Count number of Vowels in String
// Function `countVowel()` returns the number of vowels in input string

// 2.Write a function to calculate simple interest based on the principle amount
// Function `simpleInt()` returns a final amount based on the simple interest formula provided principal amount, rate of interest per year, and time on a yearly basis.

// 3.Write a function to convert hours into seconds

// 4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// 5.Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum



// 1 ans
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
   
    let count = 0;

    
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    
    return count
}

console.log(countVowel("Aakash"))
 
// 2 ans 
function simpleInt(p,r,t){
    var interest = (p*r*t)/100
    return interest
}
console.log("Simple Intrest="+simpleInt(10000,10,2))

// 3 ans 

function hours_to_seconds(h){
    var seconds = (h*3600)
    return seconds
}
console.log(hours_to_seconds(24))

// 4 ans 

function triangle_area(b,h){
    var area = (1/2*b*h)
    return area
}

console.log("Area="+triangle_area(10,5))

// 5 ans 
function sum_of_two(a,b){
    var sum = a+b
    if (a==b){
        return 3*sum

    }
    else {
        return sum
    }
}

console.log(sum_of_two(2,2))


