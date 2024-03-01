localStorage.setItem("count",0);
localStorage.setItem("winflag",0);

function takeChance(c1)
{
    c = localStorage.getItem("count");
    wflag = localStorage.getItem("winflag");

    if(c1.value == "_" && wflag == 0){
        c++;
        localStorage.setItem("count",c);
        

        if(c % 2 == 0)
        {
            c1.value = "O";
            p="O"
            whoWin(p);
        }
        else{
            c1.value = "X"
            p="X"
            whoWin(p);
        }
        wflag = localStorage.getItem("winflag");

        
        document.getElementById("res").innerHTML="";
    }
    else{
        document.getElementById("res").innerHTML="Wrong move!"
    }

    if(wflag == 1){
        document.getElementById("res").innerHTML="Player "+p+" win";   
    }
    else if(wflag == 2){
        document.getElementById("res").innerHTML="Match draw!";
    }

}

function whoWin(player)
{
    c1 = document.getElementsByName("btn");

    //column

    flag=true;
    for(i=0;i<=6;i+=3)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    flag=true;
    for(i=1;i<=7;i+=3)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    flag=true;
    for(i=2;i<=8;i+=3)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    //row

    flag=true;
    for(i=0;i<=2;i++)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    flag=true;
    for(i=3;i<=5;i++)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    flag=true;
    for(i=6;i<=8;i++)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    //diagonal

    flag=true;
    for(i=0;i<=8;i+=4)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    flag=true;
    for(i=2;i<=6;i+=2)
    {
        if(c1[i].value!=player)
        {
            flag=false;
            break;
        }
    }
    if(flag){
        localStorage.setItem("winflag",1);
        return;
    }

    cntr = localStorage.getItem("count");

    if(cntr == 9){
        localStorage.setItem("winflag",2);
    }
}

//Reset Game

function resetGame(_c1) {
    
    document.getElementsById("btn").value = "";
   
}