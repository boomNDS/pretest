let categories = ['Home & Garden', 'Clothing', 'Entertainment', 'Food']

axios.get('https://api.publicapis.org/categories').then(function (response) {
    // api doesn't work when i'm coding
    // categories = response.data
})
    .catch(function (error) {
        console.log(error);
    })
let displayTable = document.getElementById('displayTable')
setDisplayTable(categories)

function setCategories(fliterData) {
    let newCategories = categories.filter((categorie) => {
        isMatch = categorie.toLowerCase() == fliterData
        return isMatch
    })
    setDisplayTable(newCategories)
}


function setDisplayTable(categories) {
    displayTable.innerHTML = `<tr><th>Fliter result</th></tr>`
    categories.forEach((categorie) => {
        const tableRow = document.createElement("tr");
        const tableData = document.createElement("td");
        tableData.textContent = categorie
        tableRow.appendChild(tableData)
        displayTable.appendChild(tableRow)
    });
}