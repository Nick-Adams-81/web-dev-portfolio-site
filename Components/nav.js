import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {

  return (
    <>
      <div id="nav">
        <a href="/"><h2>NickAdams.com</h2></a>
        <a id="link-1" href="/"></a>
        <a id="link-2" href="/home">Home</a>
        <a id="link-3" href="/projects">Projects</a>
        <a id="link-4" href="/connect">Connect</a>
      </div>

      <style jsx>
        {`

        #nav {
          width: 100%;
          height: 90px;
          background-color: black;
          display: flex;
          border: 1px solid grey;
          position: fixed;
          top: 0;
          z-index: 2;
          border-radius: 2%;
        }

        a { 
         margin: 20px;
         color: #4F4F4F;
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

        #link-4 {
          margin-top: 29px;
        }

        `}
      </style>
    </>
  )

}

export default Nav;