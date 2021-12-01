import "animate.css";


const Links = () => {
    return (
        <>
            <div id="body">
                <a href="/home" id="href-1" className="animate__animated animate__fadeIn">Home</a>
                <a href="" id="href-2" className="animate__animated animate__fadeIn">Projects</a>
                <a href="" id="href-3" className="animate__animated animate__fadeIn">Connect</a>
            </div>
            <style>
                {`

      #body {
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 700px;
      }

  
      #href-1 {
        display: inline-block;
        font-size: 30px;
        margin: 2%;
        --animate-duration: 2500ms;
        
      }


      #href-2 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        --animate-duration: 4500ms;
      }

      #href-3 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        --animate-duration: 6500ms;
      }


    `}
            </style>
        </>
    )
}

export default Links;


