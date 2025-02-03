let month = "January";
let sales = 300;

let salesReport = {
  [`${month}_sales`]: sales  // dynamically named property
};

console.log(salesReport); 