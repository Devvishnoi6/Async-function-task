const button = document.getElementById('callback-button');
const resultDiv = document.getElementById('callback-result');
const Main = document.getElementById('main');

button.addEventListener('click', function() {
    setTimeout(function() {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const dataarr= data.posts;
                Main.innerText="";
                dataarr.map((D)=> {
                    const tag = document.createElement('p');
                    tag.innerText=D.title;
                    resultDiv.appendChild(tag)});
            })
            .catch(error => console.error(error));
    }, 5000);
});


button.addEventListener('click' , function(){
    Main.textContent=`Results will be available after 5 seconds`;
    console.log(Main);
});