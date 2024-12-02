// Fetch data from given API url, returns the results
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Display data inside a table in HTML
function displayData(data) {
  data.forEach(d => {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    const year = document.createElement('td');
    const sem = document.createElement('td');
    const program = document.createElement('td');
    const nat = document.createElement('td');
    const college = document.createElement('td');
    const num = document.createElement('td');

    year.textContent = d.year;
    sem.textContent = d.semester;
    program.textContent = d.the_programs;
    nat.textContent = d.nationality;
    college.textContent = d.colleges;
    num.textContent = d.number_of_students;
    
    tr.appendChild(year);
    tr.appendChild(sem);
    tr.appendChild(program);
    tr.appendChild(nat);
    tr.appendChild(college);
    tr.appendChild(num);

    tbody.appendChild(tr);
  });
}

// Call getData
// The result is wrapped in a Promise object, so we use 'then' to get the actual result and display it
getData("https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100").then(data => {
  displayData(data);
});