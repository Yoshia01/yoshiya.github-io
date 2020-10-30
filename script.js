// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。

// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
let p = document.getElementById('q1-text');
console.log(p.textContent);

// Q 2

let a = document.getElementById('q2-text');
console.log(a.textContent);
a.textContent = 'あいうえお';
// // // Q 3

// function rasenngann(){
 let b= document.getElementById('q3-text');
 b.addEventListener('mouseover',function rasenngan(){ b.style.color="red"})    


//      b.style.color="red";}


// // Q 4 (難)
// // // 「for of」を使います。
// let list= document.querySelectorAll('q4-text');.style.color="red";

function tidori(){
      let c = document.querySelectorAll('.q4-text');
      console.log(c)
      for (var i = 0; i < 3; i++) 
      {
      	c[i].style.color = 'red'
      }
}

// Q5
// let list =document.getElementById('q5-text').style.backgroundColor="red";
let d = document.querySelectorAll('.q5-text');


console.log(d)
for (var i = 0;i < 3; i++) {

	d[i].style.backgroundColor = 'red'
}

// Q 6
let g = document.querySelector('#q6-text');
a.addEventListener('click',function raikiri(){a.style.color="red"})

// Q 7
let r = document.querySelector('#q7-text');
r.addEventListener('mouseover',function tukuyomi(){r.style.color="red";
	                                               r.style.backgroundColor="blue"});


// Q 8
let w = document.querySelector('#q8-text');
w.addEventListener('mouseover',function amaterasu(){w.style.backgroundColor='red'})
w.addEventListener('mouseleave',function amaterasu(){w.style.backgroundColor=''});
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　// ↑打ち消し


// mouseleave
// Q 9
let m = document.querySelector('#q9-btn');
m.addEventListener('click',function susanoo(){
                                            let n = document.querySelector('#q9-input')
                                            let s = document.querySelector('#q9-result')
                                            s.textContent = n.value
});

// Q 10
let botan = document.querySelector('.q10-btn');
botan.addEventListener('click',function kirin(){
                                            let input = document.querySelector('#q10-input')                                        
                                            let result = document.querySelector('#q10-result')                                           
                                            if(input.value <= 20){result.textContent = '20歳未満は禁止'}
                                            else{result.textContent = input.value}
                                            
});

// Q 11
let btn = document.querySelector('.q11-btn');
btn.addEventListener('click',function(){
              let q11age = document.querySelector('#q11-input-age')
              let q11age_result = document.querySelector('#q11-result-age')


              q11age_result.value = q11age.textContent


              if(q11age.value < 20){
                q11age_result.textContent = "20歳未満は禁止"
              }else{
                q11age_result.textContent = q11age.value
              }

             let q11name = document.querySelector('#q11-input-name')
             let q11name_result = document.querySelector('#q11-result-name')
             // q11name_result.textContent = q11name.value
             if(q11name.value === ''){
              q11name_result.textContent = "空欄です" 
              q11name_result.style.color='red'
             }else{
              q11name_result.textContent = q11name.value
             }
});

// Q 12
let q_12btn = document.querySelector('.q12-btn')
q_12btn.addEventListener('click',function(){
                         let nakiko = document.createElement('p')
                         nakiko.textContent = q_12btn.textContent
                         let oyako =document.querySelector('.q12-result')
                         console.log(oyako)
                         oyako.appendChild(nakiko)
});
// Q 13
// 飛ばしていいです。
let q13_btn = document.querySelector('.q13-btn')
q13_btn.addEventListener('click',function(){
                          let ringo = document.createElement('li')
                          ringo.textContent ="リンゴ"
                          
                          let oya = document.querySelector('#q13-box')
                          
                          let melon = document.querySelector('#melon')      
                          oya.insertBefore(ringo,melon)
                          
})
// Q 14
let q14_btn =document.querySelector('.q14-btn')
                                 q14_btn.addEventListener('click',function(){
                                let chikin =document.querySelector('#chicken')
                                chikin.remove()
})
// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。

