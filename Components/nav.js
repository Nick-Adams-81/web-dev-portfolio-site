import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {

  return (
    <>
      <div id="nav">
        <h1 class="animate__animated animate__fadeIn">NickAdams.com</h1>
        <a id="link-1" href="/"></a>
        <a id="link-2" href="/home">Home</a>
        <a id="link-3" href="/projects">Projects</a>

      </div>

      <style jsx>
        {`

        #nav {
          width: 100%;
          height: 50px;
          background-color: black;
          display: flex;
        }

        a { 
         margin: 15px;
         color: #373434;
        }
      
        `}
      </style>
    </>
  )

}

export default Nav;