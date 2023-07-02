const tempconvert = ()=>{
    const inputtemp = document.getElementById('input').value;
    const tempselected = document.getElementById('ttype');
    const valuetemp= ttype.options[tempselected.selectedIndex].value;
    
    const celtofah = (cel) =>{
        let fahrenhiet = ((cel*9/5)+32).toFixed(1);
        return fahrenhiet;
    }

    const fahtocel = (fah) =>{
        let celcius = ((fah-32)*5/9).toFixed(1);
        return celcius;
    }

    if(valuetemp == 'cel'){
        document.getElementById('result').innerHTML=celtofah(inputtemp)+ "&#176; F";
    }

    if(valuetemp == 'fah'){
        document.getElementById('result').innerHTML=fahtocel(inputtemp)+ "&#176; C";
    }
}