'use strict'

// let testScore = 60;

// if(testScore >= 80){
//     document.write("合格です！おめでとう！");
// }else if(testScore>=70){
//     document.write("惜しい！あと少し頑張って！");
// }else{
//     document.write("不合格です！勉強して再挑戦しましょう！")
// }

// let i = 2;
// if(i===1){
//     console.log("真です");
// }

// let nameList =['田中','山田','林','佐藤']

// for(let i = 0;i < nameList.length;i++){
//     console.log(`${i+1}.${nameList[i]}`);
// }

// //continue文
// for (let i = 0; i <10; i++){
//     if(i % 2 ===0) continue;
//     console.log(i);
// }

// //break文
// for(let i =1; i < 1000; i++){
//     if(i>10)break;
//     console.log(i);
// }

function scoreCheck(){
    let testScore = document.getElementById('score').value
    if(testScore >= 80){
        document.write("合格です！おめでとう！");
    }else if(testScore>=70){
        document.write("惜しい！あと少し頑張って！");
    }else{
        document.write("不合格です！勉強して再挑戦しましょう！");
    }
}
