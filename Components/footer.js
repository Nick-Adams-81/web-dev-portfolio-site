import 'bootstrap/dist/css/bootstrap.min.css';

const footer = () => {
    return(
        <>
        <div id="footer">
            <p>Copyright ©Nick Adams 2022</p>
            

        </div>

           <style jsx>{`
           #footer {
               width: 100%;
               background-color: black;
               height: 100%;
           }

           p {
               color: #4F4F4F;
               padding: 10px;
           }
        `}

        </style>
        </>

     
    )
}

export default footer;