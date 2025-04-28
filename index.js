function convertAge() {
  const age = document.getElementById('ageInput').value;
  
  // Possibilities like if or else
  if (age === "" || isNaN(age) || age < 0) {
      document.getElementById('result').textContent = "Please enter a valid age!";
      console.log("Invalid");
      return;
  }
  
//   like 1 yaer may 365days
  const days = age * 365;
  
  // Result
  document.getElementById('result').innerHTML = 
      `${age} years = <span style="color: #4CAF50;">${days} days</span>`;
  
  // console
  console.log(`Age conversion: ${age} years = ${days} days`);
}

// .................
function convert() {
  const hours = document.getElementById('hours').value;
  const hoursNum = parseFloat(hours);
  
  if (isNaN(hoursNum)) {
      document.getElementById('result').textContent = "Please enter a valid number!";
      console.log("Invalid input - not a number");
      return;
  }
  
  // Calculate seconds (1 hour = 3600 seconds)
  const seconds = hoursNum * 3600;

  document.getElementById('result1').textContent = 
      `${hoursNum} hours = ${seconds} seconds`;
  
  // Log to console
  console.log(`${hoursNum} hours converted to ${seconds} seconds`);
}
// ..............
function findNext() {
  // Our simple array
  const numbers = [5, 8, 12, 4, 9, 3];
  
  // Find position of number 8
  const position = numbers.indexOf(8);
  
  // Get the next number
  const nextNumber = numbers[position + 1];
  
  // Show result
  document.getElementById("result2").innerHTML = 
    "After 8 comes: " + nextNumber;
  
  // Also show in console
  console.log("The next number is: " + nextNumber);
}
//   ...............
function formatName() {
  // Get the name from input
  const fullName = document.getElementById("nameInput").value;
  
  // Log original input to console
  console.log("Original name entered:", fullName);
  
  // Split into first and last name
  const names = fullName.split(' ');
  
  // Capitalize first letter of each name
  const formattedNames = names.map(name => 
      name.charAt(0).toUpperCase() + name.slice(1)
  );
  
  // Join them back together
  const formattedName = formattedNames.join(' ');
  
  // Display the formatted name
  document.getElementById("result3").innerHTML = 
      "Formatted Name: <strong>" + formattedName + "</strong>";
  
  // Log formatted name to console
  console.log("Formatted name:", formattedName);
}
// .......................
// . Create a function to calculate BMI(Body-Mass-Index) by asking user to enter his/her weight and height.
function calculateBMI() {
  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  console.log('Weight:', weight, 'kg');
  console.log('Height:', height, 'm');
  
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = 'Please enter valid weight and height!';
      console.log('Invalid inputs');
      return;
  }
  
  // Calculate BMI
  const bmi = weight / (height * height);
  
  // Display result
  document.getElementById('result4').innerHTML = 
      `Your BMI is: <strong>${bmi.toFixed(1)}</strong>`;
  
  // Log BMI to console
  console.log('Calculated BMI:', bmi.toFixed(1));
  
  
}
// ..........................
// Randomly generate an array and then create a function to pick 1st and last element of that generated array..
function runDemo() {
  const arr = Array(5).fill().map(() => Math.floor(Math.random() * 10) + 1);
  const first = arr[0], last = arr[arr.length - 1];
  document.getElementById("output").innerHTML = 
    `Array: [${arr.join(", ")}]\nFirst: ${first} | Last: ${last}`;
}
// ...................
// Pretend there are three text boxes. The user will provide integer numbers and the addition of two text-boxes will be shown in the third text-box. When the user input an integer in the first text-box, the resultant (third) text-box should display answer as NaN. After providing an input into the second text-box the addition result should be displayed in the third text-box. [Hint: Use Event handling concept]:
document.addEventListener('DOMContentLoaded', function() {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const result = document.getElementById('result7');
  
  function updateResult() {
      // Get values (empty string becomes 0)
      const val1 = num1.value === '' ? NaN : Number(num1.value);
      const val2 = num2.value === '' ? NaN : Number(num2.value);
      
      if (isNaN(val1) || isNaN(val2)) {
          result.value = 'NaN';
      } else {
          result.value = val1 + val2;
      }
  }
  

  num1.addEventListener('input', updateResult);
  num2.addEventListener('input', updateResult);
});