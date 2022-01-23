import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return(
        <>
        <div id="footer" className="fixed-bottom" style={{height: 50}}>
            <h4>© Nick Adams 2022</h4>

        </div>

           <style jsx>{`
           #footer {
               width: 100%;
               background-color: black;
               height: 100%;
               border: .5px solid grey;
               position: bottom;
               z-index: 1;
               border-radius: 2%;
           }

           h4 {
               text-align: center;
               color: #4F4F4F;
               padding: 10px;
           }
        `}

        </style>
        </>

     
    )
}

export default Footer;