getData();

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    
    for(item of data) {
        const root = document.createElement('div');
        const names = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
    
        names.textContent = `names: ${item.names}`;
        geo.textContent = `${item.lat}, ${item.lon}`;
        const dateString = new Date(item.timestamp).toLocaleString();
        // data.textContent = dateString;

        root.append(names, geo, date, dateString);
        // document.body.append(root);
        document.getElementById("wrapper").append(root);
    
        root.classList.add('container');
        names.classList.add('names');
    }
    console.log(data);
}