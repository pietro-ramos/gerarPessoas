const casual = require('casual');

function generatePerson() {
    return {
        fullName: `${casual.first_name} ${casual.last_name}`,
        street: casual.street,
        city: casual.city,
        country: casual.country,
        zip: casual.zip,
    };
}

function printPersonData(person) {
    console.log(`Nome e Sobrenome: ${person.fullName}`);
    console.log(`Rua: ${person.street}`);
    console.log(`Cidade: ${person.city}`);
    console.log(`País: ${person.country}`);
    console.log(`CEP: ${person.zip()}`);
    console.log('------------------------------------');
}

module.exports = {
    generatePerson,
    printPersonData
};