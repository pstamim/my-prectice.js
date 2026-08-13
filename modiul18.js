function calculateBill(amount, taxRate = 0.05) {
    return amount + (amount * taxRate)
}
// console.log(calculateBill(1000));
// console.log(calculateBill(1000, 0.10));
// console.log(calculateBill(1000, 0.15));










function buildProfileCard(user) {
    return `${user.name}\n${user.title} at ${user.company} `
    // "Arif\nDeveloper at Programming Hero"
}

console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));







function getLowestPrice(prices) {
    let lowest = Math.min(...prices)
    return lowest


}
console.log(getLowestPrice([340, 120, 560, 90]));

