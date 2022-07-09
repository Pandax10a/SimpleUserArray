/* setting 2 variable one with 10 names and one with random age */
let user_names = [`Maisy`, `Josie`, `Lana`, `Joan`, `Hana`, `Warren`, `Harley`, `Ben`, `Jake`, `Kye`];
let user_ages = [14, 18, 13, 11, 27, 24, 21, 7, 3, 22];

/* going through the whole array of user_ages, and setting nested if condition so only number that is 18 or lower
will console log corresponding index in user_names array */
let counter = 0;
while (counter < user_ages.length) {
    if (user_ages[counter] >= 18) {
        console.log(`${user_names[counter]} you're atleast 18 years old`)
    }
    counter++;
}
/* exactly the same as above but using for loop to search through user-ages array for number smaller than 18, and using
corresponding index for the user_names to be printed to console log */
for (let counter = 0; counter < user_ages.length; counter++) {
    if (user_ages[counter] < 18) {
        console.log(`${user_names[counter]} you're under 18 years old`)
    }
}

