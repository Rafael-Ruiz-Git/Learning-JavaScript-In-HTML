const car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024
}

function printDetails({brand, model, year = 2024}) {
  console.log(`Brand:${brand}, Model:${model}, year:${year}`)
}

printDetails(car);

const scores = [95,85,75];

function printScores([first,second, third, ...restScores0]) {
  console.log(`1st:${first}, 2nd:${second}, 3rd: ${third} }`)
  console.log.apply(restScores0);
}

printScores(scores)