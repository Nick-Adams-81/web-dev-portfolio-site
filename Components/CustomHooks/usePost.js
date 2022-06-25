

const UsePost = (url, data) => {
  
        fetch(url, {
            method: "POST",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify(data)

        }).then(() => alert("Your data has been added!")
        ).catch((err) => console.log(err));
    
}

export default UsePost;