

const HomeInfo = () => {
    return (
        <>
            <div>
                <h2 className="animate__animated animate__fadeIn">About me</h2>
                <h4 className="animate__animated animate__fadeIn">I am a software developer specialiaing in MERN stack, and Java Spring/boot development. I strive to make software that solves everyday issues
                    people encounter, links to my projects are available in the portfolio page! Get in touch with me on the connect page!
                </h4>
            </div>

            <style jsx>{`
               h2 {
                color: #DEDEDE;
               text-align: center;
            }


            h4 {
                color: #DEDEDE;
            }
            `}</style>
        </>
    )
}

export default HomeInfo;