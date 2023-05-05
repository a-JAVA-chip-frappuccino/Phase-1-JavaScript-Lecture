const days = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const nums = [0, 1, 2, 3, 4, 5]

// forEach

//days.forEach((day) => console.log(`${day} is a great day!`))

// map

const cubeNums = nums.map((num) => num * num * num)

const daysAreGood = days.map((day) => `${day} is a great day!`)

// filter

const numsGreaterThan2 = nums.filter((num) => num > 2)

/*
const numsGreaterThan2 = nums.filter((num) => {
    if (num > 2) {
        return true
    }
    else {
        return false
    }})
*/

const daysEquallingWednesday = days.filter((day) => day === 'Wednesday')

// find

const numGreaterThan2 = nums.find((num) => num > 2)

const dayEquallingSaturday = days.find((day) => day === 'Saturday')

// includes

const containsSunday = days.includes('Sunday')

// reduce

const sumOfNums = nums.reduce((sum, num) => sum + num)

let sum = 0

for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
}

// nested array iteration

const names = [['John', 'Smith'], ['Lee', 'Harvey', 'Oswald'], ['Mortimer', 'Biscuit']]

names.forEach((name) => console.log(name.join(" ")))

names.forEach((name) => name.forEach((str) => console.log(str)))

const namesMapped = names.map((name) => name[0])