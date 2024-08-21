import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLinks from '../HomeComponents/HomeLinks'

const Footer = () => {
    return(
        <>
        <div id="footer">
            <HomeLinks />
            <h4>Nick Adams 2022</h4>

        </div>

           <style jsx>{`
           #footer {
               width: 100%;
               background-color: black;
               border: .5px solid grey;
               border-radius: 1%;
           }
           h4 {
               text-align: center;
               color: #DEDEDE;
               padding: 20px;
           }
        `}

        </style>
        </>

     
    )
}

export default Footer;