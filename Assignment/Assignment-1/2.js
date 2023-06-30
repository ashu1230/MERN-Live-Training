2.Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy..



  function date(){
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    var date = date.getDate();

    var Output = `${month+1} - ${date} - ${year}, ${month+1} / ${date} / ${year} or ${date} - ${month + 1} - ${year}, ${date}  / ${month + 1} / ${year}`;

    console.log(Output);
}

date();

6 - 30 - 2023, 6 / 30 / 2023 or 30 - 6 - 2023, 30  / 6 / 2023
