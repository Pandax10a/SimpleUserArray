let user_names = [`Maisy`, `Josie`, `Lana`, `Joan`, `Hana`, `Warren`, `Harley`, `Ben`, `Jake`, `Kye`];
let user_ages = [14, 18, 13, 11, 27, 24, 21, 7, 3, 22];

let counter = 0;
while (counter < user_ages.length) {
    if (user_ages[counter] >= 18) {
        console.log(`${user_names[counter]} you're atleast 18 years old`)
    }
    counter++;
}