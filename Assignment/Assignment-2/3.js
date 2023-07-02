// Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long

function validatePhoneNumber(phoneNumber) {
  if (!phoneNumber.match(/^\d+$/)) {
    return false;
  }
  if (phoneNumber.length !== 10) {
    return false;
  }
  return true;
}

undefined
var phoneNumber = "1234567890";
var isPhoneNumberValid = validatePhoneNumber(phoneNumber);
if (isPhoneNumberValid) {
  console.log("phone number is valid.");
} else {
  console.log("phone number is invalid.");
}

VM976:4 phone number is valid.
