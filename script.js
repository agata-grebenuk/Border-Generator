window.addEventListener("load", border);

function border(){
    const preview = document.getElementById("item");
    const resultCss = document.getElementById("result-css");
    const  btnCopy= document.getElementById("btn-copy");
    const inputs = document.querySelectorAll(".border-property");


    inputs.forEach(inp => inp.addEventListener("input", generateBorder));
    btnCopy.addEventListener("click", copyCss);
    
    function generateBorder(){
        const borderThickness = document.getElementById("thickness").value;
        const borderType = document.getElementById("border-type").value;
        const borderColor = document.getElementById("border-color").value;
        const borderColorOpacity = document.getElementById("border-color-opacity").value;
        
        let borderGen = '';
        
        borderGen = `${borderThickness}px ${borderType} ${hexToRGBA(borderColor,borderColorOpacity)}`;
        preview.style.border = borderGen;
        resultCss.textContent = `border: ${borderGen};`;
    }

    function hexToRGBA(color, opacity){
        const red = parseInt(color.substr(1,2),16);
        const green = parseInt(color.substr(3,2),16);
        const blue = parseInt(color.substr(5,2),16);
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`
    }

    function copyCss(){
        resultCss.select();
        document.execCommand("copy");
        alert("Css copid to clipboard");
    }
}


