document.addEventListener("DOMContentLoaded", ()  => {

    const btn = document.getElementById('ggg');
    console.log(btn);

    btn.onclick = function () {
        document.querySelector('.h1').classList.toggle('red');
    }
       
    }
);


