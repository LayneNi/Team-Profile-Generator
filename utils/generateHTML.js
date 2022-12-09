
function generateCards(data) {
 console.log(data);
  const allCards = [];
  
    function generateManagerCards(manager) {
     
  
      return `<div class="card border-0 border-primary rounded p-5 justify-content-center" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary text-center"><i class="fa-sharp fa-solid fa-briefcase fa-2xl"></i><h3>Manager </br>${manager.getName()}</h3></div>
      <div class="card-body text-black bg-light">
        <h4 class="card-text">ID: ${manager.getId()} </br>Email: ${manager.getEmail()} </br>Office Number: ${manager.getOffice()}</h4>
      </div>
    </div>`
    }
    function generateEngineerCards(engineer) {
      return `<div class="card border-0 border-primary rounded p-5 justify-content-center" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary text-center"><i class="fa-sharp fa-solid fa-user-secret fa-2xl"></i><h3>Engineer </br>${engineer.getName()}</h3></div>
      <div class="card-body text-black bg-light">
        <h4 class="card-text">ID: ${engineer.getId()} </br>Email: ${engineer.getEmail()} </br>Github Username: ${engineer.getGithub()}</h4>
      </div>
    </div>`
    }
    function generateInternCards(intern) {
      return `<div class="card border-0 border-primary rounded p-5 justify-content-center" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary text-center"><i class="fa-sharp fa-solid fa-pencil fa-2xl"></i><h3>Intern </br>${intern.getName()}</h3></div>
      <div class="card-body text-black bg-light">
        <h4 class="card-text">ID: ${intern.getId()} </br>Email: ${intern.getEmail()} </br>School: ${intern.getSchool()}</h4>
      </div>
    </div>`
    }
  for (let i = 0; i < data.length; i++) {
    const emp = data[i]; 
    if (emp.getRole() === "manager"){
      allCards.push(generateManagerCards(emp))
    } if (emp.getRole() === "Engineer"){
      allCards.push(generateEngineerCards(emp))
    } if (emp.getRole() === "Intern"){
      allCards.push(generateInternCards(emp))
    }
  }


    return allCards.join("")
  }
  

function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Team Profile Builder</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://kit.fontawesome.com/8638d0ac87.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./styles.css">
  <style>
  .bg-1 {
    background-color: #F04003; /* Orange */
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