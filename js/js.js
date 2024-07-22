const demo = document.querySelector(".demo");
const btn = document.querySelector(".btn");

btn.addEventListener("click" , async ()=>{
    
        const config ={
            headers: {
                Accept: 'application/json',
              },
        }
        const res = await fetch('https://icanhazdadjoke.com', config)
        const data = await res.json()
        demo.innerHTML = data.joke
    
})



