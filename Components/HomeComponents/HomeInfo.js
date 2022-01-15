

const HomeInfo = () => {
    return (
        <>
            <div>
                <h2 className="animate__animated animate__fadeIn">About me</h2>
                <h4 className="animate__animated animate__fadeIn">I am a software developer based out of Dallas, TX, I strive to make software that solves everyday issues
                    people encounter, links to my portfolio are available in the portfolio page! Connect with me on the connect page!
                </h4>
            </div>

            <style jsx>{`
               h2 {
                color: #4B4E4B;
               text-align: center;
            }


            h4 {
                color: #4B4E4B;
            }
            `}</style>
        </>
    )
}

export default HomeInfo;