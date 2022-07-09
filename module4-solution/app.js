var arr = ["Jason", "kaylin", "ben", "suzi", "johnson", "talyor", "Kane", "Broad", "john", "yakoov"];

for(var i=0; i<arr.length; i++ ){

    if(arr[i].charAt(0)==='J' || arr[i].charAt(0)==='j'){
        console.log("Goodbye "+ arr[i])
    }
    else{
        console.log("Hello "+ arr[i])
    }
}