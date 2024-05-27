//predkrm
document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from predkrm.csv
    fetch('../data/predkrm.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            // Find the index of each column
            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');

            // Select the #predkrm div
            const predkrmDiv = document.getElementById('predkrm');

            // Loop through rows and create HTML content
            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];

                // Create a div for each item and append to #predkrm
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p class="cena"><strong>${price} Kč</strong></p>
                    </div>
                `;
                predkrmDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//hlavní jídlo
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/hlavnijidla.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');

            const hlavnijidlaDiv = document.getElementById('hlavni');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p class="cena"><strong>${price} Kč</strong></p>
                    </div>
                `;
                hlavnijidlaDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//dezert
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/dezert.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');

            const dezertDiv = document.getElementById('dezert');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p class="cena"><strong>${price} Kč</strong></p>
                    </div>
                `;
                dezertDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//polevka
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/polevka.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');

            const polevkaDiv = document.getElementById('polevka');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p class="cena"><strong>${price} Kč</strong></p>
                    </div>
                `;
                polevkaDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//napoje
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/napoje.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');

            const napojeDiv = document.getElementById('napoje');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p class="cena"><strong>${price} Kč</strong></p>
                    </div>
                `;
                napojeDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

