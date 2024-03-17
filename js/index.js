const faq = document.querySelectorAll(".faq");


for (var i = 0; i<faq.length; i++){


    faq[i].addEventListener( "click" , function (){

        for (var i = 0; i<faq.length; i++){
            faq[i].classList.remove("active")
        }

        this.classList.toggle("active");

    });

};