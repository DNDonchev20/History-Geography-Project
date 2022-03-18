function switchMap(arg){
    switch (arg) {
        case "e39":
            document.getElementById("map1").style.backgroundImage = "url(images/europe_1939.svg)";
            document.querySelector('#map1').scrollIntoView({
                behavior: 'smooth'
            });
            break;
        case "e45":
            document.getElementById("map1").style.backgroundImage = "url(images/europe_1945.svg)";
            document.querySelector('#map1').scrollIntoView({
                behavior: 'smooth'
            });
            break;
        case "a39":
            document.getElementById("map2").style.backgroundImage = "url(images/asia_1939.svg)";
            document.querySelector('#map2').scrollIntoView({
                behavior: 'smooth'
            });
            break;
        case "a45":
            document.getElementById("map2").style.backgroundImage = "url(images/asia_1945.svg)";
            document.querySelector('#map2').scrollIntoView({
                behavior: 'smooth'
            });
            break;
    }
    
}