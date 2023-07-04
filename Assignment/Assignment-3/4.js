// 4. Create a function Employee, having id, name, basic_Salary as arguments.

// Compute HRA, DA, TA, GS, NS.

// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.

// GS = Basic Salary + HRA + DA + TA;

// TAX DEDUCTION is 10% of GS.

// NS = GS - TAX DEDUCTION.

// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.  


function Employee(id, name, basicSalary) {
  function HRA(){
      return HRA = 0.3 * basicSalary;
  }
  function DA(){
      return DA = 0.1 * basicSalary;
  }
  function TA(){
      return TA = 0.2 * basicSalary;
  }
  function GS(){
      return GS = basicSalary + HRA + DA + TA;
  }
  function taxDeduction(){
      return taxDeduction = 0.1 * GS;
  }
  function NS(){
      return NS = GS - taxDeduction;
  }
  // By using function..
  console.log("Employee ID:", id);
  console.log("Employee Name:", name);
  console.log("Basic Salary:", basicSalary);
  console.log("HRA:", HRA());
  console.log("DA:", DA());
  console.log("TA:", TA());
  console.log("Gross Salary:", GS());
  console.log("Tax Deduction:", taxDeduction());
  console.log("Net Salary:", NS());
}
Employee(100069, "ashutosh", 50000);

VM2183:20 Employee ID: 100069
VM2183:21 Employee Name: ashutosh
VM2183:22 Basic Salary: 50000
VM2183:23 HRA: 15000
VM2183:24 DA: 5000
VM2183:25 TA: 10000
VM2183:26 Gross Salary: 80000
VM2183:27 Tax Deduction: 8000
VM2183:28 Net Salary: 72000
undefined


