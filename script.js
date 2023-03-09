const myButton = document.getElementById("my-button");

myButton.addEventListener("click", () => {
 var id= prompt("Enter your name");
 alert("Hello "+id)
 
});


function displayMultiplicationTable() {
	// get the input value
	var number = prompt("Enter any number");

	// if no number is entered, default to 5
	if (number == "") {
		number = 5;
	}

	// create the table
	var table = "<tr><th>Multiplication Table of " + number + "</th></tr>";
	for (var i = 1; i <= 10; i++) {
		table += "<tr><td>" + number + " x " + i + " = " + (number*i) + "</td></tr>";
	}

	// display the table
	document.getElementById("table").innerHTML = table;
}


function calculateMarks() {
    // Get input values
    var subject1 = prompt("Enter subject 1 = ");
    var subject2 = prompt("Enter subject 2 = ");
    var subject3 = prompt("Enter subject 3 = ");
    var marks1 = prompt("Obtained marks 1 = ");
    var marks2 = prompt("Obtained marks 2 = ");
    var marks3 = prompt("Obtained marks 3 = ");
    var totalMarks = 100;

    // Calculate total marks and percentage
    var totalObtainedMarks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
    var totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

    // Display result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
      "<h2>Result</h2>" +
      "<p>" +
      subject1 + " Marks: " + marks1 +  "/" + totalMarks +  "</p>" +
      "<p>" +  subject2 +" Marks: " + marks2 + "/" + totalMarks + "</p>" +
      "<p>" + subject3 + " Marks: " + marks3 + "/" + totalMarks + "</p>" +
      "<p>Total Obtained Marks: " + totalObtainedMarks + "/" +(3 * totalMarks) + "</p>" +
      "<p>Percentage: " + totalPercentage +"%</p>";
  }

  function arithmetic() {
    var a = prompt("Enter a number");

    var result =
      "The value of a is " + a + "<br>" +
      "The value of ++a is " + ++a +"<br>" +
      "Now the value of a is " + a +"<br>" +
     "The value of a++ is " + a++ + "<br>" +
      "Now the value of a is " + a +"<br>" +
      "The value of --a is " + --a +"<br>" +
      "Now the value of a is " + a + "<br>" +
      "The value of a-- is " + a-- + "<br>" +
      "Now the value of a is " + a;

    document.getElementById("output").innerHTML = result;
  }