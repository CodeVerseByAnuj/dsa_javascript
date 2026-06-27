// Find the Largest Value
const salary = {
  Rahul: 40000,
  Amit: 70000,
  Anuj: 55000
};
let max = 0
let person = ""
for (let sal in salary) {
  let salaryAmount = salary[sal]
  console.log(salaryAmount)
  if (max < salaryAmount) {
    console.log(max)
    max=salaryAmount
    person=sal
  }
}
console.log(`max-${max},person=${person}`)