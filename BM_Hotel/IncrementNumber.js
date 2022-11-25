

window.onscroll = function() {
    if(this.scrollY >= 400) {
        const number = document.querySelectorAll('.number');
        const speed = 800;

        number.forEach(e => {
            incNumber(e);
        });

        function incNumber(e){
            let text =+ e.innerText;
            const value =+ e.getAttribute("data-target");
            const inc = Math.ceil(value/speed);
            if(text < value){
                e.innerText = inc + text;
                setTimeout(() => {
                    incNumber(e);
                }, 30);
            }else{
                e.innerText = value;
            }
        }
    }
}