async function getImage() {
    try {
        const name = document.getElementById("characterName").value
        let url = "https://api.disneyapi.dev/character?name=" + name

        const headers = new Headers();
        headers.append("Accept", "application/json");

        const response = await fetch(url, {headers:headers});
        
        const json = await response.json();
        console.log(json);
        const imageHolder = document.getElementById("imageHolder");
        imageHolder.src = json.data[1].imageUrl;
    }
    catch(error) {
        console.log(error)
    }
}