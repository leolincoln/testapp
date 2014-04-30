
var g1,g2,g3,g4,g5,g6;
window.onload=function(){
    console.log("in g1");
    var g1=new JustGage({id:"g1",value:getRandomInt(0,100),min:0,max:100,title:"E bounce rate",label:"",levelColors:["#990000","#ffa500","#008000"]});

    var g2=new JustGage({id:"g2",value:getRandomInt(0,100),min:0,max:100,title:"E page/visit",label:"",levelColors:["#990000","#ffa500","#008000"]});
    var g3=new JustGage({id:"g3",value:getRandomInt(0,100),min:0,max:100,title:"E %new",label:"",levelColors:["#990000","#ffa500","#008000"]});
    var g4=new JustGage({id:"g4",value:getRandomInt(0,100),min:0,max:100,title:"%search",label:"",levelColors:["#990000","#ffa500","#008000"]});
    var g5=new JustGage({id:"g5",value:getRandomInt(0,100),min:0,max:100,title:"%social",label:"",levelColors:["#990000","#ffa500","#008000"]});
    var g6=new JustGage({id:"g6",value:getRandomInt(0,100),min:0,max:100,title:"%referral",label:"",levelColors:["#990000","#ffa500","#008000"]});

    setInterval(function() {
            g1.refresh(getRandomInt(0, 100));
            g2.refresh(getRandomInt(34, 65));          
            g3.refresh(getRandomInt(66, 100));
            g4.refresh(getRandomInt(66, 100));
            g5.refresh(getRandomInt(66, 100));
            g6.refresh(getRandomInt(66, 100));
            
            
            }, 2500);


}
