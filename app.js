const initialPrice=document.querySelector("#initial-price");
const quantity=document.querySelector("#quantity");
const currentPrice=document.querySelector("#current-price");
const btn=document.querySelector(".btn");
const output=document.querySelector(".output");
//console.log(initialPrice);
function isValid(ip,q,cp){
   return ip<=0||q<=0||cp<=0 ?false:true
    
}
function changeColor(color){
    document.body.style.backgroundColor=color; 
}
function calculator(ip,q,cp){
    
    if(!isValid(ip,q,cp)){
        output.innerHTML="Please enter all the values carefully."
        changeColor("white");
    }else{
        var difference=ip-cp;
        if(difference>0){
            //loss
            var loss=(difference*q);
            var lossPercent=loss*100/(ip*q).toFixed(2)
            output.innerHTML="Hey,the loss is "+loss.toFixed(2)+" rupees for "+q+" stocks and the loss in percentage is "+lossPercent+"% per stock"
           changeColor("red");
        }else if(difference<0){
            //profit
            var profit=Math.abs(difference)*q;
            var profitPercent=(profit*100/(ip*q)).toFixed(2)
            output.innerHTML="Hey,the profit is "+profit.toFixed(2)+" rupees for "+q+" stocks and the profit in percentage is "+profitPercent+"% per stock"
            changeColor("green");
        }else{
            //nothing
            output.innerHTML="No loss No gain"
            changeColor("yellow");
            //document.body.style.backgroundColor="yellow"
        }
    }
}
function priceCalculator(){
    const ip=Number(initialPrice.value);
    const q=Number(quantity.value);
    const cp=Number(currentPrice.value);
    calculator(ip,q,cp);
}
btn.addEventListener('click',priceCalculator);
