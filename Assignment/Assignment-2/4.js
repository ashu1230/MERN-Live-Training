// Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu

function validateEmailAddress(email) {
  if (email.indexOf('@') === -1) {
    return false;
  }
  const validDomains = ['.com', '.org', '.edu'];
  let validDomain = false;
  for (let i = 0; i < validDomains.length; i++) {
    if (email.endsWith(validDomains[i])) {
      validDomain = true;
      break;
    }
  }
  return validDomain;
}

undefined
const email = 'test@example.com';
console.log(validateEmailAddress(email));

VM1103:2 true
undefined
const email = 'example.org';
console.log(validateEmailAddress(email)); 
VM1115:2 false
undefined
const email = 'test@example.net';
console.log(validateEmailAddress(email));
