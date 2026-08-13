
// //problam 1 task 
// // function getFormattedPrices(prices) {
// //     return prices.map(prices => `$${prices}`)

// // }
// // console.log(getFormattedPrices([100, 250, 75] ));








// // problam 2 task filter 
// function getAvailableProducts(products) {
//     return products.filter(products => products.stock > 0)


// }
// let productsvalu = getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }])


// console.log(productsvalu);







// //problam 3 task find

// // function findProductByName(products, name) {
// //     return products.find(products => products.name === name)
// // }
// // let productsvalu = findProductByName(products =
// //     [{ name: "Pen", price: 10 },
// //     { name: "Bag", price: 500 }],
// //     name = "Bag")

// // console.log(productsvalu);










// // problam 4 task reduce

// // function getTotalStockValue(products) {

// //     let total = products.reduce((accumulator, product) => {
// //         return accumulator + (product.price * product.stock)
// //     },0)
// //     return total


// // }

// // let productsvalu = getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }])

// // console.log(productsvalu);











// //problam 5 task map+filter+reduce

// function getDiscountedTotalForCategory(products, category) {
//     let total = products.map((product => {
//         return product
//     }))

//         .filter(product => product.category === category)
//         .reduce((sum, product) => sum + product.price, 0)

//     return total - (total * 10) / 100
// }

// let categoryprice = getDiscountedTotalForCategory(
//     products = [
//         { name: "Pen", category: "stationery", price: 100 },
//         { name: "Bag", category: "accessory", price: 500 },
//         { name: "Notebook", category: "stationery", price: 60 }
//     ],
//     category = "stationery"
// )

// console.log(categoryprice)












// //problam 6 task closure

// // const createIdGenerator = () => {
// //     let cunt = 0;
// //     return () => {
// //         cunt++
// //         console.log(cunt);

// //     }
// // }

// // const nextId = createIdGenerator(); 
// // nextId(); 
// // nextId(); 
// // nextId();











// // function sortByPriceAscending(products) {
// //     let sortByPrice = products.sort((a,b)=> a.price - b.price)
// //     return sortByPrice
// // }
// // let sortBy = sortByPriceAscending([{ name: "Bag", price: 500 },
// // { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }])

// // console.log(sortBy);













// // function applyBonusPoints(users, bonus) {
// //     return users.map((user) => {
// //         return {
// //             ...user,
// //             points: user.points + bonus
// //         }
// //     })
// // }

// // let apply = applyBonusPoints([{ name: "Rafi", points: 20 }], bonus = 5)

// // console.log(apply);
