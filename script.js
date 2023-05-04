let displayContainer = document.getElementById('displayContainer');
let card = document.getElementById("card");
let url = "https://api.openbrewerydb.org/v1/breweries";

function createNode(element) {
    return document.createElement(element);
}

async function getData() {

    try {
        let obj = await fetch(url);
        let data = await obj.json();
        console.log(data);
        let html =  "";
        data.forEach(e => {
            html+=
            `<div class="alert alert-warning p-2 m-3">
                         <h3>Name: ${e.name}</h3>
                        <h4>Brewery type: ${e.brewery_type}</h4>
                        <p><b>Address:</b> ${e.street}, ${e.address_1}, ${e.country}, ${e.postal_code}</p>
                        <p><b>Phone:</b> ${e.phone}</p>
                        <a href="${e.website_url}" target="_blank">Website link</a>
                        


            </div>
            `
           
       });
       displayContainer.innerHTML = html;
       
    } catch (error) {
        alert(error);
    }
}

getData();