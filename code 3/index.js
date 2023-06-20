const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

// Tax rates and deductions
const taxRates = [
  { range: [0, 12298], rate: 10, deductible: 0 },
  { range: [12299, 23885], rate: 15, deductible: 1229.80 },
  { range: [23886, 35472], rate: 20, deductible: 2392.45 },
  { range: [35473, 47059], rate: 25, deductible: 4372.45 },
  { range: [47060, Infinity], rate: 30, deductible: 6942.45 }
];
const nhifDeductionRates = [
  { range: [0, 5999], deduction: 150 },
  { range: [6000, 7999], deduction: 300 },
  { range: [8000, 11999], deduction: 400 },
  { range: [12000, 14999], deduction: 500 },
  { range: [15000, 19999], deduction: 600 },
  { range: [20000, 24999], deduction: 750 },
  { range: [25000, 29999], deduction: 850 },
  { range: [30000, 34999], deduction: 900 },
  { range: [35000, 39999], deduction: 950 },
  { range: [40000, 44999], deduction: 1000 },
  { range: [45000, 49999], deduction: 1100 },
  { range: [50000, 59999], deduction: 1200 },
  { range: [60000, 69999], deduction: 1300 },
  { range: [70000, 79999], deduction: 1400 },
  { range: [80000, 89999], deduction: 1500 },
  { range: [90000, 99999], deduction: 1600 },
  { range: [100000, Infinity], deduction: 1700 }
];
const nssfDeductionRate = 6;

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate PAYE (tax)
let payee = 0;
for (const rate of taxRates) {
  if (grossSalary >= rate.range[0] && grossSalary <= rate.range[1]) {
    payee = (grossSalary * (rate.rate / 100)) - rate.deductible;
    break;
  }
}

// Calculate NHIF deduction
let nhifDeduction = 0;
for (const rate of nhifDeductionRates) {
  if (grossSalary >= rate.range[0] && grossSalary <= rate.range[1]) {
    nhifDeduction = rate.deduction;
    break;
  }
}

// Calculate NSSF deduction
const nssfDeduction = (grossSalary * (nssfDeductionRate / 100));

// Calculate net salary
const netSalary = grossSalary - payee - nhifDed
