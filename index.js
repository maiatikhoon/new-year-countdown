

const countdownDate = new Date("2024-01-01 , 00:00:00").getTime() ; 


setInterval( ()=> { 
     
    const now = new Date().getTime() ;  
    const diff = countdownDate - now  ; 

    const days = Math.floor( diff / (1000 * 60 * 60 *24) ) ;  
    const hours = Math.floor( diff % (1000 * 60 * 60 * 24) / (1000 *60*60)) ; 
    const minutes = Math.floor( diff % (1000 *60* 60) / (1000* 60)) ; 
    const seconds = Math.floor( (diff % (1000*60)) / 1000) ; 

    document.getElementById("days").innerHTML = days; 
    document.getElementById("hours").innerHTML = hours; 
    document.getElementById("minutes").innerHTML = minutes; 
    document.getElementById("seconds").innerHTML = seconds;  


    if(diff < 0) {
         clearInterval(x) ;
         document.getElementById("days").innerHTML = "00"; 
         document.getElementById("hours").innerHTML = "00"; 
         document.getElementById("minutes").innerHTML = "00"; 
         document.getElementById("seconds").innerHTML = "00"; 
    }
    
    
    
} , 1000)