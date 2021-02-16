let findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    })
}

const getAge = function(yearOfBirth, yearOfDeath){
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath-yearOfBirth;
}

module.exports = findTheOldest
