//creating JS Modal
const radioBtn = document.querySelector('.radio-btn1');
const radioBtn2 = document.querySelector('.radio-btn2')
const radioBtn3 = document.querySelector('.radio-btn3')
const answer1 = document.querySelector('.acordion-answer');
const answer2 = document.querySelector('.acordion-answer2');
const answer3 = document.querySelector('.acordion-answer3');

const container1 = document.querySelector('.content-container-1');
const container2 = document.querySelector('.content-container-2');
const container3 = document.querySelector('.content-container-3');

const closeIcon = document.querySelector('.close-icon');
const acordionEl = document.querySelector('.acordions');


const btn1 = document.querySelector('.box3-btn1');
const btn2 = document.querySelector('.box3-btn2');
const btn3 = document.querySelector('.box3-btn3');


const acordionBtn1 = document.querySelector('.acordion-btn');
const acordionBtn2 = document.querySelector('.acordion2-btn');
const acordionBtn3 = document.querySelector('.acordion3-btn');


const thanyouContainer = document.querySelector('.thankyou-container');
const thankyouBtn = document.querySelector('.thankyou-btn')

// buttons



    btn1.addEventListener('click', function(){

      

       acordionEl.style.display = 'block'
        
       answer1.style.display = 'none'
       container1.style.height = '17%' 

       answer2.style.display = 'none'
       container2.style.height = '24%'

       answer3.style.display = 'none'
       container3.style.height = '24%'


       radioBtn.style.backgroundColor = 'white'
       radioBtn2.style.backgroundColor = 'white'
       radioBtn3.style.backgroundColor = 'white'
    
    });

    btn2.addEventListener('click', function(){
        acordionEl.style.display = 'block'


        answer1.style.display = 'none'
       container1.style.height = '17%'

        answer2.style.display = 'none'
        container2.style.height = '24%'


        answer3.style.display = 'none'
        container3.style.height = '24%'


        radioBtn.style.backgroundColor = 'white'
        radioBtn2.style.backgroundColor = 'white'
        radioBtn3.style.backgroundColor = 'white'
    });
    
    btn3.addEventListener('click', function(){
        alert("Sorry, this product is currently unavailable as it's out of stock. Please check back later or explore other available options.")
    });



//acordions
  radioBtn.addEventListener('click', function(){
      answer1.style.display = 'block'
      container1.style.height = '20%'  

      radioBtn.style.backgroundColor = 'hsl(176, 50%, 47%)'
    });


    radioBtn2.addEventListener('click', function(){
        answer2.style.display = 'block'
        container2.style.height = '30%'


        radioBtn2.style.backgroundColor = 'hsl(176, 50%, 47%)'
    });


    radioBtn3.addEventListener('click', function(){
        answer3.style.display = 'block'
        container3.style.height = '30%'

        radioBtn3.style.backgroundColor = 'hsl(176, 50%, 47%)'
    });

    closeIcon.addEventListener('click', function(){
        acordionEl.style.display = 'none'
    
        
    });

    //THANKYOU

    acordionBtn1.addEventListener('click', function(){
        acordionEl.style.display = 'none'
        thanyouContainer.style.display = 'block'

    });

    acordionBtn2.addEventListener('click', function(){
        acordionEl.style.display = 'none'
        thanyouContainer.style.display = 'block'

    });
    
    acordionBtn3.addEventListener('click', function(){
        acordionEl.style.display = 'none'
        thanyouContainer.style.display = 'block'

    });

    thankyouBtn.addEventListener('click', function(){
        thanyouContainer.style.display = 'none'
    })




//for burger menu

    const bugerMenu = document.querySelector('.icon-png');
    const burgerUl = document.querySelector('.burger-ul');

    bugerMenu.addEventListener('click', function(){
        if(burgerUl.classList.contains('icon-png')){
            burgerUl.classList.remove('icon-png')
        }else{
            burgerUl.classList.add('icon-png')
        }
       
        
        
    })
    









