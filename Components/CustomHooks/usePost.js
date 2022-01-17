

const usePost = (url, data) => {
  
        fetch(url, {
            method: "POST",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify(data)

        }).then(() => alert("new data added!")
        ).catch((err) => console.log(err));
    
}

export default usePost;