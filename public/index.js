
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }




    var sidemenu = document.getElementById("sidemenu");

    function  openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }



    const scriptURL = 'https://script.google.com/macros/s/AKfycbzwCFAtAV8nKgF3L_CBwk1OtmWJUUFsKK7kFGbUCgkTKfWfkDWs5qgoSBAzpcKTMxMjhA/exec'
    const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg");

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })
  
    const seeMoreButton = document.getElementById("see-more-button");
    const projects = document.querySelectorAll(".work");

    const numInitiallyVisibleProjects = 4;
    let numVisibleProjects = numInitiallyVisibleProjects;

    projects.forEach((project, index) => {
        if (index < numInitiallyVisibleProjects) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    seeMoreButton.addEventListener("click", () => {
        numVisibleProjects = projects.length;

        projects.forEach((project) => {
            project.style.display = "block";
        });

        seeMoreButton.style.display = "none";
    });


const skills=[
    {languages:"C",proficiency:80},
    {languages:"C++",proficiency:80},
    {languages:"Python",proficiency:80},
    {languages:"Javascript",proficiency:80},
    {languages:"Html/Html5",proficiency:80},
    {languages:"CSS",proficiency:80},
    {languages:"Node.js",proficiency:80},
    {languages:"SQL",proficiency:80},
    {languages:"MongoDB",proficiency:80},
    {languages:"Postgrad",proficiency:80},
    {languages:"DSA",proficiency:80},
    {languages:"UNIX/LINUX",proficiency:80},
    {languages:"Excel",proficiency:80},
    {languages:"Microsoft 365",proficiency:80},
    {languages:"Git",proficiency:80},
]

const skillList = document.getElementById("#skill-list");

skills.forEach(skill=>{
    const skillItem = document.createElement('li');
    const progressBar = document.createElement('div');
    progressBar.classList.add("progress-bar");

    if(skills.proficiency>50){
        progressBar.style.background="red";
    }else{
        progressBar.style.background=`hsl(${120 - (skill.proficiency * 1.2)}, 100%, 50%)`;
    }

    progressBar.style.width=`${skill.proficiency}%`;

    skillItem.innerHTML = `${skill.languages} <div class="progress">${progressBar.outerHTML}</div>`;
    skillItem.appendChild(skillItem);


})
