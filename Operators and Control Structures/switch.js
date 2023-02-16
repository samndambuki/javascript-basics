var answer = window.prompt("Type Yes, No, Maybe and click OK.");

switch(answer){
    case "YES":
        console.log("You said yes");
        break;
    case "MAYBE":
        console.log("You said maybe. I dont know what to make of that");
        break;
    case "NO":
        console.llog("You said no");
        break;
    default:
        console.log("You rebel, you");
        break;        
}
