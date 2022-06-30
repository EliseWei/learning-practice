const person1 = {
  firstName: 'Dorothy',
  lastName: 'Gale',
  age: 13,
  address: {
    street: '123 Twister Grove',
    suburb: 'Lawrence',
    region: 'Kansas'
  },
  family: [
    {
      relationship: 'aunt',
      name: 'Em'
    },
    {
      relationship: 'uncle',
      name: 'Henry'
    },
    {
      relationship: 'pet',
      name: 'Toto'
    },
  ],
  friends: ['Cowardly Lion', 'Scarecrow', 'Tin Woodsman']
}

const person2 = {
  firstName: 'Nicole',
  lastName: 'Miller',
  age: 35,
  address: {
    street: '25 Q Road',
    suburb: 'Auckland CBD',
    region: 'Auckland'
  },
  family: [
    {
      relationship: 'partner',
      name: 'Maeve'
    },
    {
      relationship: 'sibling',
      name: 'Morgan'
    },
    {
      relationship: 'sibling',
      name: 'Eddie'
    },
    {
      relationship: 'sibling',
      name: 'Kate'
    },
    {
      relationship: 'sibling',
      name: 'Zoe'
    },
    {
      relationship: 'child',
      name: 'Pele'
    },
    {
      relationship: 'child',
      name: 'Kiri'
    }
  ],
  friends: ['Carla', 'Harper']
}

// Given a "person" shaped object as the first parameter, use
// destructuring to complete the following functions.
// You may destructure in the parameters, or inside the function body.

function greetPerson() {
  console.log(`Hello, ${firstName} ${lastName}`)
}

function listFriends() {
  friends.forEach(friend => {
    console.log(`${friend} is a friend of ${firstName}`)
  })
}

function getRegion() {
  return region
  // See about doing this in one go:
  // https://stackoverflow.com/questions/40622385/es6-deep-nested-object-destructuring
}

function listFamily() {
  family.forEach(() => {
    console.log(`${name} is ${firstName}'s ${relationship}`)
    // There are a couple opportunities to destructure, in this function
  })
}

function getSiblingCount() {
  const sibs = family.filter(() => relationship === 'sibling')
  // There are a couple opportunities to destructure, in this function, too
  return sibs.length
}

// This one will accept the person as the first argument and a postal code as the second
// For example addPostalCodeToAddress(person2, '1010')
// It should return a *copy* of the address property as a new object, with a new
// 'postalCode' property added.
// Hint: this can be done neatly in one line
function addPostalCodeToAddressCopy() {
  return {}
}

// This should return a new copy of the person object with their pets (if any), removed
function deletePets() {
  // There are several ways to go about this. Consider using the 'foreach' or 'filter' array methods.
  return personObjCopy
}