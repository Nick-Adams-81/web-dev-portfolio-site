import Modal from "../Modal";

const UsePost = async(url, data) => {
        await fetch(url, {
            method: "POST",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            alert("Data Added!")
        }
        ).catch((err) => console.log(err));
}

export default UsePost;