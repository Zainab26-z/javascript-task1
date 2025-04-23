
// for javascript here that programming language actually perform the function so..
function convertAge(){
  const age = document.getElementById(`age`).value;
  if (age === ''|| isNaN(age) || age < 0){
    document.getElementById('Ageresult').textContent = 'Please enter your valid age'; return
  
  }
  const days =age * 365;
  document.getElementById('Ageresult').textContent = `${age} years ${days} days`;
}

// for secondly convert hours into seconds

        function convert() {
            const input = document.getElementById('hours').value;
            const hours = Number(input);
            
            if (isNaN(hours) || hours < 0) {
              document.getElementById('hourresult').textContent = "Please enter a valid positive number";
              return;
            }
            
            const seconds = hours * 3600;
            document.getElementById('hourresult').textContent = 
              `${hours} hours = ${seconds} seconds`;
          }


          // captialized your name..
          function capitalizeName() {
    // Get the input value
    const name = document.getElementById('nameInput').value.trim();
    
  //  possibilities...
    if (name === '') {
        document.getElementById('result').textContent = 'Please enter your name';
        return;
    }
    
  //  this is used for captalized the letter lets 0 first isi tarh 2 4 it convert the 4 word capital
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    
    // final the result
    document.getElementById('result').textContent = `Your capitalized name: ${capitalized}`;
}

// 5. Create a function to calculate BMI(Body-Mass-Index) by asking user to enter his/her weight and height
        function calculateBMI() {
            // Get input values
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; 
            
            // posibilities if or else
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                document.getElementById('finalresult').innerHTML = "Please enter valid weight and height.";
                return;
            }
            
            // Calculate BMI its body mass index
            const bmi = weight / (height * height);
            
            // Display final result
            let message = `Your BMI is: ${bmi.toFixed(2)} - `;
            
            document.getElementById('finalresult').innerHTML = message;
        }
          
        
        