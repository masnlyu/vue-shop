<template>
  <div class="about">
    <main class="aboutpage">
        <div class="page-banner" :style="bgimg">
          <!-- <img src="../assets/img/多肉3.jpg" alt=""> -->
            <div style="background-color:rgba(0 ,0 ,0 ,0.5 ) ;">
                <div class="container overlay">
                    <ul class="breadcrumb text-light">
                        <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                        <li class="breadcrumb-item active"><a href="./about.html">About</a></li>
                    </ul>
                    <h2>About</h2>
                </div>
            </div>
        </div>
        <div class="container about-introduce">
            <div class="row py-5">
                <div class="col-md-3 about_we">
                    <ul>
                        <li>關於我們</li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <h3>關於森林</h3>
                        <div class="col-md-6">
                            <p>在一個充滿自然香氣的香草園中<br>

                                是一件令人放鬆的事情<br>
                                
                                所以我們堅持無農藥、無除草劑<br>
                                
                                只用天然有機資材、香草精油來防治病蟲害<br>
                                
                                不論是香草植物或是室內植物<br>
                                
                                讓您與您的家人都可以接觸植物而沒有負擔</p>
                            <p> 

                                森林有塊田主要有兩個種植基地<br>
                                
                                微電腦控制的溫室<br>
                                
                                是我們第一個基地<br>
                                
                                一部分嬌貴的花卉盆栽或是室內植物<br>
                                
                                都在這個基地呵護著<br>
                                
                                第二個基地擁有獨特的山區泉水<br>
                                
                                以最純淨的水源<br>
                                
                                最天然的方式<br>
                                
                                種植著喜歡戶外的植物</p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid" src="../assets/img/about1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div> 
            
            <div class="row ">
                <div class="col-md-6 map_iframe map_info">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.6400841918762!2d120.6898217852684!3d24.13908354798452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d4006bb9653%3A0x1bbaf0762d54877d!2z5Y-w5Lit56uZ5YmN56eA5rOw5b2x5Z-OIFNob3d0aW1lIENpbmVtYXM!5e0!3m2!1szh-TW!2stw!4v1655388450854!5m2!1szh-TW!2stw"
                     style="border:0;" allowfullscreen="" loading="lazy" width="100%" height="400"
                    referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                <div class="col-md-6 map_info">
                    <h3>旗艦店</h3>
                    <p>森林有塊田居位於台中市中心，三層樓舒適的展示空間陳列精選精盆栽與智能溫室系統體驗。一定可找到適合您的花卉，建構綠健康與綠生活美學，竭誠歡迎追求品味的您蒞臨參觀。</p>
                    <ul>
                        <li>
                            <i></i>
                            地址: 401台中市東區南京路76號
                        </li>
                        <li>
                            <i></i>
                            電話: 04-1234-5678
                        </li>
                        <li>
                            <i></i>
                            E-mail: forest@forest.com.tw
                        </li>
                        <li>
                            <i></i>
                            營業時間: 10:00AM-20:00PM
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 map_iframe map_info">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.6400841918762!2d120.6898217852684!3d24.13908354798452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d4006bb9653%3A0x1bbaf0762d54877d!2z5Y-w5Lit56uZ5YmN56eA5rOw5b2x5Z-OIFNob3d0aW1lIENpbmVtYXM!5e0!3m2!1szh-TW!2stw!4v1655388450854!5m2!1szh-TW!2stw"
                         style="border:0;" allowfullscreen="" loading="lazy" width="100%" height="400"
                        referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                    <div class="col-md-6 map_info">
                        <h3>旗艦店</h3>
                        <p>森林有塊田居位於台中市中心，三層樓舒適的展示空間陳列精選精盆栽與智能溫室系統體驗。一定可找到適合您的花卉，建構綠健康與綠生活美學，竭誠歡迎追求品味的您蒞臨參觀。</p>
                        <ul>
                            <li>
                                <i></i>
                                地址: 401台中市東區南京路76號
                            </li>
                            <li>
                                <i></i>
                                電話: 04-1234-5678
                            </li>
                            <li>
                                <i></i>
                                E-mail: forest@forest.com.tw
                            </li>
                            <li>
                                <i></i>
                                營業時間: 10:00AM-20:00PM
                            </li>
                        </ul>
                    </div>
            </div>
        </div>

    </main>
  </div>
</template>
<script>
export default{
  data(){
    return {
      bgimg:{
          backgroundImage: "url(" + require("../assets/img/多肉3.jpg") + ")",
          marginBottom:' 60px',
      }
    }
  }
}
</script>