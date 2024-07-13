const fetchButton = document.getElementById('fetch-button');
const dataContainer = document.getElementById('data-container');

fetchButton.addEventListener('click', fetchData);

function fetchData() {
    dataContainer.textContent = 'Loading...';
    dataContainer.classList.add('loading');

    const fetchPromise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject('Operation timed out.');
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => {
                clearTimeout(timeout);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error.message));
    });


    fetchPromise
    .then(data => {
        console.log(data);
        const dataarr= data.posts;
        dataContainer.innerText="";
        dataarr.map((D)=> {
           const tag = document.createElement('p');
           tag.innerText=D.title;
           dataContainer.appendChild(tag);
        })
    })
    .catch(error => {
        dataContainer.textContent = `Error: ${error}`;
    });
}



