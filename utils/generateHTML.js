
function generateCards(data) {
 console.log(data);
  const allCards = [];
  
    function generateManagerCards(manager) {
     
  
      return `<div class="card border-0 border-primary rounded p-5 justify-content-center" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">${manager.getName()} </br>Manager</div>
      <div class="card-body text-black bg-light">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">ID: ${manager.getId()} </br>Email: ${manager.getEmail()} </br>Office Number: ${manager.getOffice()}</p>
      </div>
    </div>`
    }
  
    function generateEngineerCards(engineer) {
      return `<div class="card border-0 border-primary rounded p-5 justify-content-center" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">${engineer.getName()} </br>Engineer</div>
      <div class="card-body text-black bg-light">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">${engineer.getName()}</p>
      </div>
    </div>`
    }
  
  
    function generateInternCards(intern) {
      return `<div class="card border-0 border-primary rounded p-5 justify-content-center" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">${intern.getName()} </br>Intern</div>
      <div class="card-body text-black bg-light">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">${intern.getName()}</p>
      </div>
    </div>`
    }
  for (let i = 0; i < data.length; i++) {
    const emp = data[i]; 
    console.log(emp.getRole());
    if (emp.getRole() === "manager"){
      allCards.push(generateManagerCards(emp))
    } if (emp.getRole() === "Engineer"){
      allCards.push(generateEngineerCards(emp))
    } if (emp.getRole() === "Intern"){
      allCards.push(generateInternCards(emp))
    }
  }
  console.log(allCards);

    return allCards.join("")
  }
  

function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Theme Simply Me</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="./styles.css">
  <style>
  .bg-1 {
    background-color: #1abc9c; /* Green */
    color: #ffffff;
  }
  </style>
</head>
<body>

<section class="container-fluid bg-2 text-center bg-1">
<h3>My Team</h3>
</section>

<section class="team-cards d-flex justify-content-center row align-items-center" >

${generateCards(data)}




<section>

</body>
</html>
    `
}

module.exports = generateHTML;