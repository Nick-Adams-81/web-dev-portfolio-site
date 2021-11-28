import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {

  return (
    <>
      <div id="nav">
        <a id="link-1" href="">Test</a>
        <a>Test 2</a>

      </div>

      <style jsx>
        {`
        #nav {
          width: 100%;
          height: 50px;
          background-color: red;
        }

        a { 
          padding: 5px;

        }
      
        `}
      </style>
    </>
  )

}

export default Nav;