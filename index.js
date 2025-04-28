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
  
  // Check if input is valid
  if (isNaN(hoursNum)) {
      document.getElementById('result').textContent = "Please enter a valid number!";
      console.log("Invalid input - not a number");
      return;
  }
  
  // Calculate seconds (1 hour = 3600 seconds)
  const seconds = hoursNum * 3600;
  
  // Display result
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
function calculateBMI() {
  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  // Log inputs to console
  console.log('Weight:', weight, 'kg');
  console.log('Height:', height, 'm');
  
  // Check if inputs are valid
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
  
  // Give simple interpretation
  if (bmi < 18.5) {
      console.log('Category: Underweight');
  } else if (bmi < 25) {
      console.log('Category: Normal weight');
  } else if (bmi < 30) {
      console.log('Category: Overweight');
  } else {
      console.log('Category: Obese');
  }
}
// ..........................
