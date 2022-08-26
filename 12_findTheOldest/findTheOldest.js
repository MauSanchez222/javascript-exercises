const findTheOldest = function(array) {
    const alive = array.some( (person) =>{
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = (new Date().getFullYear())
        }
       return 'yearOfDeath' in person
    })

    if (alive){
        const ordered = array.sort( (a,b) => {
            if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
              return -1
            }
                else{
              return 1
            }
          })
           return ordered[0]
        }
    }
        

// Do not edit below this line
module.exports = findTheOldest;
