//=== comparision
alert("page is live")
let input;

input = "n"

switch(input){
    case 1: //if(input=== 1)
    document.write("continue...")
    break;

    case "y": //if input === "y"
    document.write("Continue...");
    break;

    case "yes": // if inout is === "yes"
    document.write("continue...");
    break;

    case "n": // if input is ==="n"
    document.write("end...");
    break;

    case "no": // is inout is ==="no"
    document.write("End...");
    break;

    default : // wrong input
    document.write("Wrong Input")
}