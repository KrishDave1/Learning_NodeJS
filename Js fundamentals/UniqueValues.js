const menu = [
    {
        name: 'pancake',
        type: 'breakfast'
    },
    {
        name: 'waffles',
        type: 'breakfast'
    },
    {
        name: 'burger',
        type: 'lunch'
    },
    {
        name: 'pizza',
        type: 'dinner'
    },
    {
        name: 'pasta',
        type: 'dinner'
    }
]
//How to get unique values from an array
// 1. map - get all values
// 2. set - get unique values
// 3. Array.from - convert set to array
const categories = ['all',  ...new Set(menu.map((item) => {
    return item.type
}))]
// Here the spread operator is used to convert set to array by taking all the values of set and adding them to an array

console.log(categories)

