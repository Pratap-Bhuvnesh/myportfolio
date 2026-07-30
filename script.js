
fetch("data/projects.json").then(response => response.json()).then(projects => {

    let container = document.getElementById(
        "project-container"
    );


    projects.forEach(project => {


        container.innerHTML += `


                                    <div class="card">


                                    <img src="${project.image}" alt="${project.title}">


                                    <h3>
                                    ${project.title}
                                    </h3>



                                    <p>
                                    ${project.description}
                                    </p>




                                    <h4>
                                    Tech Stack
                                    </h4>


                                    <div class="tags">

                                    ${project.techStack.map(skill =>

                                                `<span>${skill}</span>`

                                            ).join("")}

                                    </div>





                                    <h4>
                                    Key Features
                                    </h4>


                                    <ul>

                                    ${project.features.map(item =>

                                                `<li>✅ ${item}</li>`

                                            ).join("")}

                                    </ul>






                                    <h4>
                                    Full Stack Contributions
                                    </h4>


                                    <ul class="achievement">

                                    ${project.contributions.map(item =>

                                                `<li>🚀 ${item}</li>`

                                            ).join("")}


                                    </ul>







                                    <h4>
                                    Performance Impact
                                    </h4>


                                    <ul>

                                    ${project.performance.map(item =>

                                                `<li>⚡ ${item}</li>`

                                            ).join("")}


                                    </ul>






                                    <h4>
                                    Deployment
                                    </h4>


                                    <ul>

                                    ${project.deployment.map(item =>

                                                `<li>☁️ ${item}</li>`

                                            ).join("")}


                                    </ul>





                                    <a href="${project.demo}" class="project-btn">
                                    Live Demo
                                    </a>


                                    <a href="${project.github}" class="project-btn">
                                    GitHub
                                    </a>



                                    </div>


                                `;


            });

        }).catch(error => {
        console.log( "Project loading error:",error);
    });