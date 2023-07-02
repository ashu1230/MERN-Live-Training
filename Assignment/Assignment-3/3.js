// 3.Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army

function areAnagrams(str1, str2) {
    
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');
    
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
    
  return str1 === str2;
}

console.log(areAnagrams('Mary', 'Army')); 
VM1665:12 true
