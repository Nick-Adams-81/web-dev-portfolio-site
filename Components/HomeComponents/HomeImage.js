import Image from 'next/image';
import Pic from '../../public/images/nick.jpg';

const HomeImage = () => {
    return (
        <>

            <div className="mx-auto" id="image-container" style={{ display: "flex", justifyContent: "center" }}>
                <Image src={Pic}
                    height={350}
                    width={280}
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