import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {

  return (
    <>
      <div id="nav">
        <a id="link-1" href="/">Test</a>
        <a id="link-2" href="/home">Test 2</a>

      </div>

      <style jsx>
        {`
        #nav {
          width: 100%;
          height: 50px;
          background-color: black;
        }

        a { 
          padding: 5px;
          si

        }
      
        `}
      </style>
    </>
  )

}

export default Nav;