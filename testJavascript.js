
var list=document.getElementById("list");
var PersonalProfile=document.getElementById("PersonalProfile");
var effort=document.getElementById("effort");
var TimeArrange=document.getElementById("TimeArrange")
var company=document.getElementById("company")
var overcome=document.getElementById("overcome")
var share=document.getElementById("share")
var other=document.getElementById("other")
var effort_btn=document.getElementById("effort_btn")
var effort_unbtn=document.getElementById("effort_unbtn")

var PersonalProfile_btn=document.getElementById("PersonalProfile_btn")
var PersonalProfile_unbtn=document.getElementById("PersonalProfile_unbtn")

var TimeArrange_btn=document.getElementById("TimeArrange_btn")
var TimeArrange_unbtn=document.getElementById("TimeArrange_unbtn")

var company_btn=document.getElementById("company_btn")
var company_unbtn=document.getElementById("company_unbtn")

var overcome_btn=document.getElementById("overcome_btn")
var overcome_unbtn=document.getElementById("overcome_unbtn")

var share_btn=document.getElementById("share_btn")
var share_unbtn=document.getElementById("share_unbtn")

var other_btn=document.getElementById("other_btn")
var other_unbtn=document.getElementById("other_unbtn")
// effort_btn.addEventListener("click",function(){
//      effort.innerHTML="good!!"
// }
// )
// effort_unbtn.addEventListener("click",function(){
//      effort.innerHTML=""

// })



function show(name,name1,name2,words){
     name1.addEventListener("click",function(){
          name.innerHTML=words;
     }
     )
     name2.addEventListener("click",function(){
          name.innerHTML="";
     })}




show(PersonalProfile,PersonalProfile_btn,PersonalProfile_unbtn,
     "您好，我的名字是陳柏辰。畢業於日文學系。雖然畢業於日文系，但因想學習第二專長，便開始自學Coding。\
     開始學習Coding的契機是因為認識到一些自動化的產品，如3D列印機的軟體、自動化機械手臂等，覺得Coding非常神奇。\
     於是我開始自學Coding，透過書籍及線上影片等方式學習。\
     未來兩年內我規畫要轉換跑道，因此報名了這次的計畫。"
     )
show(effort,effort_btn,effort_unbtn,
     "由於本人目前是自學的方式在學習，所以現階段主要是使用旗標出版社的《Python刷題訓練班》來練習題目。\
     除了刷題之外，也有寫了一些Code來將目前的工作內容自動化，如將原本需要大量手動key in計算的資料自動化轉成制式格式。\
"
     )
show(TimeArrange,TimeArrange_btn,TimeArrange_unbtn,
     "如果能順利錄取參加計畫的話，我計畫於年底結束目前的工作，並全心投入學習Coding。\
     時間安排是打算維持現在上班的節奏，每週星期一至星期六的九點開始學習至晚上七點，按照老師的計畫努力。\
由於自己不是本科系出身，因此會想花更多時間來練習。\
我的目標是預定在2023年的7月起開始找相關工作，且在9月前達成。")
show(company,company_btn,company_unbtn,
     "目前尚未著手研究軟體相關公司，只要有機會的話我很願意多方嘗試。")
show(overcome,overcome_btn,overcome_unbtn,
     "之前任職的工作遇到客戶比較不理性一點的狀況，但當時我僅是個新人。\
後來解決的方式是去問有經驗的前輩，並學習前輩處理事情的態度及方法，重新與客戶溝通解決問題。")
show(share,share_btn,share_unbtn,
     "其實我對於HTML,CSS,JAVASCRIPT這塊領域較陌生，所以為了這次的計畫申請，從頭開始學習。\
     之前自學大部分都幾乎是Python，雖然還是花了不少時間研究，但Coding的基本概念能夠相通。\
     在這次的申請網站中，學習到了GIT，是之前沒有接觸過的。\
     藉由這次的機會，對於GIT有新的認識，像是前端與後端相連可以及時互動是我覺得比較特別的地方，\
因此在網頁中加入了「open」、「hide」的功能。")
show(other,other_btn,other_unbtn,
     "很感謝WeHelp提供這樣的一個平台，讓非本科系出身的我也有機會可以往軟體工程師的路前進。\
如這次第三屆的分享會，讓我對於未來有比較具體的想像，也更有動力持續學習。\
")


