import Layout from "../Components/Layout";
import projects1 from "./projects.json";

const projects = () => {


    return (
        <>
            <Layout>
                <div className="body">
                    <div className="project-card">
                        {projects1.map(project => {
                            return (
                                <div key={project.id}>
                                    <p>{project.title}</p>
                                    <p>{project.content}</p>
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
                     margin: 10px;
                 }
               
            `}

            </style>

        </>
    )
}

export default projects;