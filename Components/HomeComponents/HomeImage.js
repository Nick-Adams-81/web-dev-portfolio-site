import Image from 'next/image';
import Pic from '../../public/images/Nick_Adams.jpg';

const HomeImage = () => {
    return (
        <>

            <div className="mx-auto" id="image-container" style={{ display: "flex", justifyContent: "center" }}>
                <Image src={Pic}
                    height={300}
                    width={300}
                    alt=""
                    className="animate__animated animate__fadeIn center"
                />
            </div>

            <style jsx>{`
                #image-container {
                    margin-bottom: 20px;
                    border-radius: 3%;
                     --animate-duration: 3500ms;
                    
                }
                
            `}</style>
        </>
    )
}

export default HomeImage;