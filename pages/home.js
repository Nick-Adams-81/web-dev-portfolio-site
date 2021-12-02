import Layout from "../Components/Layout";

const Home = () => {
    return (
        <>
            <Layout>
                <div className="body">
                    <h1>homepage test</h1>
                </div>
            </Layout>

            <style>{
                `
                 .body {
                     background-color: black;
                     height: 750px;
                 }
            `}

            </style>

        </>
    )

}

export default Home;