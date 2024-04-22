document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var calculateButton = document.getElementById("calculate");

    // Add click event listener to the button
    calculateButton.addEventListener("click", function() {
        // Get all rows except the header and total rows
        var rows = document.querySelectorAll("#table tr:not(:first-child):not(:last-child)");

        // Initialize total units and total credit point variables
        var totalUnits = 0;
        var totalCreditPoint = 0;

        // Loop through each row
        rows.forEach(function(row) {
            // Get the units and grade point input elements of the current row
            var units = parseFloat(row.querySelector(".units").value);
            var gradePoint = parseFloat(row.querySelector(".gradePoint").value);

            // Calculate credit point for the current row
            var creditPoint = units * gradePoint;

            // Update the credit point cell of the current row
            row.querySelector(".creditPoint").textContent = creditPoint;

            // Add the credit point of the current row to the total credit point
            totalCreditPoint += creditPoint;

            // Add the units of the current row to the total units
            totalUnits += units;
        });

        // Update total units and total credit point in the respective cells
        document.getElementById("totalUnitsContent").textContent = totalUnits;
        document.getElementById("totalCreditPointContent").textContent = totalCreditPoint;
          // Calculate GPA
   var gpa = totalCreditPoint / totalUnits;
   document.getElementById("GPA").innerHTML = gpa.toFixed(2);

   // Calculate CGPA (assuming all courses have equal weight)
   var cgpa = gpa;
   document.getElementById("CGPA").innerHTML = cgpa.toFixed(2);
    });
 
});