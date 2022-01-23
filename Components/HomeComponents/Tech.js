

const Tech = () => {

    return (

        <>
            <h2 className="animate__animated animate__fadeIn">Tech</h2>
            <ul>
                <li className="animate__animated animate__fadeIn">HTML</li>
                <li className="animate__animated animate__fadeIn">CSS</li>
                <li className="animate__animated animate__fadeIn">JavaScript</li>
                <li className="animate__animated animate__fadeIn">Python</li>
                <li className="animate__animated animate__fadeIn">Java</li>
                <li className="animate__animated animate__fadeIn">React</li>
            </ul>

            <style jsx>{`
              h2 {
                color: #4B4E4B;
               text-align: center;
            }


            li {
                color: #4B4E4B;
                margin-left: 50px;
            }
            `}</style>
        </>


    )




}

export default Tech;