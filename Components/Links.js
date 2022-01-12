import "animate.css";


const Links = () => {
  return (
    <>
      <div id="container">
      
          <a href="/home" id="href-1" className="animate__animated animate__fadeIn">Home</a>
          <a href="/tech" id="href-4" className="animate__animated animate__fadeIn">Tech</a>
          <a href="/projects" id="href-2" className="animate__animated animate__fadeIn">Projects</a>
          <a href="/connect" id="href-3" className="animate__animated animate__fadeIn">Connect</a>
    
      </div>

      <style jsx>
        {`

      #container {
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 800px;
  
    
      }

      a {
        color: #4B4E4B;
        text-decoration: none;
      }

      a:hover {
        color: #063C06;
      }

  
      #href-1 {
        display: inline-block;
        font-size: 30px;
        margin: 2%;
        --animate-duration: 2500ms;
        margin-bottom: 25%;
        
      }


      #href-2 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        --animate-duration: 5500ms;
        margin-bottom: 25%;
      }

      #href-3 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        margin-bottom: 25%;
        --animate-duration: 6500ms;
      }

      #href-4 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        margin-bottom: 25%;
        --animate-duration: 4500ms;
      }

    


    `}
      </style>
    </>
  )
}

export default Links;


