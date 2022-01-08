import 'bootstrap/dist/css/bootstrap.min.css';

const footer = () => {
    return(
        <>
        <div id="footer">
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

export default footer;