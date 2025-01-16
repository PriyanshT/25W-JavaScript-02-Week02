var output = document.querySelector("p");
output.textContent = 10;
/* STEP 1: Creating Strings */
var myString = "Hello! How are you.";
output.textContent = myString;
// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
var step2 = "It's raining outside.";
var step2 = 'It\'s raining outside.';
output.textContent = step2;

/* STEP 3: Concatenation */
output.textContent = myString + " " + step2 + 22 + 25;

/* STEP 4: Numbers and Strings */
var step4a = "25";
var step4b = 25;

// numbers can be converted to strings
output.textContent = step4a + step4b;

// strings can be converted to numbers, too
output.textContent = Number(step4a) + step4b;

// and back again, if we want
output.textContent = String(step4a) + step4b.toString();