// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++, "DurgeshKumar", "", "./pmg/DurgeshKumar/1.bmp", "./pmg/DurgeshKumar/2.bmp", "./pmg/DurgeshKumar/3.bmp", "./pmg/DurgeshKumar/4.bmp", "./pmg/DurgeshKumar/5.bmp"],
  [i++, "Himanshu", "", "./pmg/Himanshu/1.bmp", "./pmg/Himanshu/2.bmp", "./pmg/Himanshu/3.bmp", "./pmg/Himanshu/4.bmp", "./pmg/Himanshu/5.bmp"],
  [i++, "Jayshyam", "", "./pmg/Jayshyam/1.bmp", "./pmg/Jayshyam/2.bmp", "./pmg/Jayshyam/3.bmp", "./pmg/Jayshyam/4.bmp", "./pmg/Jayshyam/5.bmp"],
  [i++, "khushi Bano", "", "./pmg/khushi Bano/1.bmp", "./pmg/khushi Bano/2.bmp", "./pmg/khushi Bano/3.bmp", "./pmg/khushi Bano/4.bmp", "./pmg/khushi Bano/5.bmp"],
  [i++, "Lajo", "", "./pmg/Lajo/1.bmp", "./pmg/Lajo/2.bmp", "./pmg/Lajo/3.bmp", "./pmg/Lajo/4.bmp", "./pmg/Lajo/5.bmp"],
  [i++, "LajoSharma", "", "./pmg/LajoSharma/1.bmp", "./pmg/LajoSharma/2.bmp", "./pmg/LajoSharma/3.bmp", "./pmg/LajoSharma/4.bmp", "./pmg/LajoSharma/5.bmp"],
  [i++, "Muskan bano", "", "./pmg/Muskan bano/1.bmp", "./pmg/Muskan bano/2.bmp", "./pmg/Muskan bano/3.bmp", "./pmg/Muskan bano/4.bmp", "./pmg/Muskan bano/5.bmp"],
  [i++, "Nidhi", "", "./pmg/Nidhi/1.bmp", "./pmg/Nidhi/2.bmp", "./pmg/Nidhi/3.bmp", "./pmg/Nidhi/4.bmp", "./pmg/Nidhi/5.bmp"],
  [i++, "Pooja", "", "./pmg/Pooja/1.bmp", "./pmg/Pooja/2.bmp", "./pmg/Pooja/3.bmp", "./pmg/Pooja/4.bmp", "./pmg/Pooja/5.bmp"],
  [i++, "Prinsu", "", "./pmg/Prinsu/1.bmp", "./pmg/Prinsu/2.bmp", "./pmg/Prinsu/3.bmp", "./pmg/Prinsu/4.bmp", "./pmg/Prinsu/5.bmp"],
  [i++, "Priti", "", "./pmg/Priti/1.bmp", "./pmg/Priti/2.bmp", "./pmg/Priti/3.bmp", "./pmg/Priti/4.bmp", "./pmg/Priti/5.bmp"]
];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
