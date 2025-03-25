const findTheOldest = function(people) {
    const oldest = people.sort((a,b) => {
        const thisYear = new Date().getFullYear();
        const lastGuy = (!a.yearOfDeath) ? thisYear - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
        const nextGuy = (!b.yearOfDeath) ? thisYear - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth;
        
        return (lastGuy > nextGuy) ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
