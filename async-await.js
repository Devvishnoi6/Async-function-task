const fetchbutton=document.getElementById('fetchButton')
fetchbutton.addEventListener('click',fetchData);

async function fetchData(){
    const contentdiv= document.getElementById('content');
    contentdiv.textContent='Loading...';
    contentdiv.classList.add('loading');
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        console.log(data);
        const dataarr= data.posts;
        contentdiv.innerText="";
        dataarr.map((D)=>{
            const tag = document.createElement('p');
           tag.innerText=D.title;
           contentdiv.appendChild(tag);
        })
        contentdiv.classList.remove('loading');
    } catch (error) {
        contentdiv.textContent = `Error: ${error.message}`;
        contentdiv.classList.add('error');
    }
}
