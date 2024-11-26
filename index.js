const { generatePerson, printPersonData } = require('./pessoas');

function main() {
    const peopleCount = 10;
    const people = Array.from({ length: peopleCount }, generatePerson);

    people.forEach(printPersonData);
}

main();
