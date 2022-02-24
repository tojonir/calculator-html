(()=>{
    const dataInput = document.getElementsByClassName("input-data")
    var display = []

    for (let i = 0; i < dataInput.length; i++) {
        const element = dataInput[i];
        element.addEventListener("click",()=>{
            setDisplay(element.innerHTML)
        })
        
    }

    function setDisplay(data){
        switch (data) {
            case "C":
                display = []
                document.getElementsByClassName("data")[0].innerHTML = ""
                document.getElementsByClassName("result")[0].innerHTML = ""
                break;
            case "&lt;=":
                display.pop()
                break;
            case "=":
                document.getElementsByClassName("data")[0].innerHTML = display.join("")
                document.getElementsByClassName("result")[0].innerHTML = eval(display.join(""))
                console.log("=")
                break;     
            default:
                display.push(data)
                break;
        }
        
        document.getElementsByClassName("input")[0].innerHTML = display.join("")
    }


})()