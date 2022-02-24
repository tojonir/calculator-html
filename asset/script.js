(()=>{
    const dataInput = document.getElementsByClassName("input-data")
    var display = []

    for (let i = 0; i < dataInput.length; i++) {
        const element = dataInput[i];
        element.addEventListener("click",()=>{
            setDisplay(element.innerHTML)
        })
        
    }
    document.addEventListener("keydown",(e)=>{
        setDisplay(e.key)
    })
    function setDisplay(data){
        const clear = ()=>{
            display = []
            document.getElementsByClassName("data")[0].innerHTML = ""
            document.getElementsByClassName("result")[0].innerHTML = ""
        }
        const setResult = ()=>{
            document.getElementsByClassName("data")[0].innerHTML = display.join("")
            document.getElementsByClassName("result")[0].innerHTML = eval(display.join(""))
        }
        switch (data) {
            case "C":
                clear()
                break;
            case "Backspace":
                display.pop()
                break;
            case "&lt;=":
                display.pop()
                break;
            case "=":
                setResult()
                break; 
            case "Enter":
                setResult()
                break;     
            default:
                if(!/[A-z]/.test(data)){
                    if (document.getElementsByClassName("data")[0].innerHTML=="") {
                        display.push(data)
                    } else {
                        clear()
                        display.push(data)
                    }
                }
                break;
        }
        
        document.getElementsByClassName("input")[0].innerHTML = display.join("")
    }


})()