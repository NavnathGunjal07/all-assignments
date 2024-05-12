/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length ===0)
    return [];
  const result = transactions.map(item=> {
    let sum = 0;
    transactions.forEach(e=> {
      if(e.category === item.category)
        sum+=e.price;
    })
    return {
      category: item.category,
      totalSpent: sum
    }
  })
  return result.filter((item,index,arr)=> arr.findIndex(e=> e.category === item.category) ===index);
}

module.exports = calculateTotalSpentByCategory;
