import Layout from "../Components/Layout";
import projects1 from "./projects.json";


const projects = () => {


    return (
        <>
            <Layout>
                <div className="body">
                    <div>
                        {projects1.map(project => {
                            return (
                                <div key={project.id} className="project-card">
                                    <p className="top-p-tag">{project.title}</p>
                                    <a href={project.link}>View project</a>
                                </div>
                            )

                        })}
                    </div>

                </div>


            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: black;
                     height: 750px;
                 }

                .project-card {
                    padding: 35px;

                }

                a {
                    text-decoration: none;
                }

                
               
            `}

            </style>

        </>
    )
}

export default projects;