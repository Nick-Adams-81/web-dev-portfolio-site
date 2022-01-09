import Layout from "../Components/Layout";
import Form from '../Components/form';


const Connect = () => {

    return (
        <>
            <Layout>
                <div id="body">
                    <Form />
                </div>

            </Layout>
            <style jsx>{
                `
            #body {
                background-color: black;
                height: 800px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        
            `
            }

            </style>


        </>
    )

}

export default Connect