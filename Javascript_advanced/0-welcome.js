// Create a variable named globalVariable with value Welcome
var globalVariable = "Welcome";

// Create a function outer
function outer() {
    // alerts the content of the variable globalVariable
    alert(globalVariable);

    // creates a variable named course with value Holberton
    var course = "Holberton";

    // creates a function inner
    function inner() {
        // alerts the content of the variable globalVariable and course (concatenated)
        alert(globalVariable + " " + course);

        // creates a variable named exclamation with value !
        var exclamation = "!";

        // creates a function inception
        function inception() {
            // alerts the content of the variable globalVariable, course, and exclamation (concatenated)
            alert(globalVariable + " " + course + exclamation);
        }

        // calls the function inception
        inception();
    }

    // calls the function inner
    inner();
}

// Call the function outer in the main code (outside any function)
outer();
