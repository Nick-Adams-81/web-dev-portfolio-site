import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {

  return (
    <>
      <div id="nav">
        <a href="/home"><h2>NickAdams.com</h2></a>
        <a id="link-1" href="/"></a>
        <a id="link-2" href="/home">Home</a>
        <a id="link-3" href="/projects">Projects</a>
      </div>

      <style jsx>
        {`

        #nav {
          width: 100%;
          height: 90px;
          background-color: black;
          display: flex;
        }

        a { 
         margin: 20px;
         color: #373434;
         text-decoration: none;
        }

        a:hover {
          color: #11560A;
        }

        #link-2 {
          margin-top: 29px;
        }

        #link-3 {
          margin-top: 29px;
        }

        `}
      </style>
    </>
  )

}

export default Nav;