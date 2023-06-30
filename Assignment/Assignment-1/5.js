//5.WAP to find out if 1st January will be a Sunday between 2000 and 2030


function isJanuaryFirstSunday() {
  for (let year = 2000; year <= 2030; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      console.log(`Frist January ${year} is Sunday.`);
    }
  }
}


isJanuaryFirstSunday();


VM2880:5 Frist January 2006 is Sunday.
VM2880:5 Frist January 2012 is Sunday.
VM2880:5 Frist January 2017 is Sunday.
