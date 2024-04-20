let currentmode = "dark";
function dark() {
    let theme = document.querySelector(".fa-moon");
    let theme1 = document.querySelector(".fa-solid");
    // let theme = document.querySelector(".fa-moon");
    let chng = document.querySelector("body");
    console.log(currentmode);
    if(currentmode=== "dark") {
        currentmode = "dark";
 
         chng.style.color="black";
    chng.style.background="white";
    
    }
    else 
    {
        currentmode = "white";
         chng.style.color="white";

    chng.style.backgroundColor="black";
    }
}
