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
                background-color: var(--bg-primary);
                min-height: 100vh;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-top: 56px;
                padding: 2rem 0;
            }
            `
            }
            </style>
        </>
    )

}

export default Connect