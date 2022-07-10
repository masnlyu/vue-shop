<template>
    <div>
        <main style=" background-color: #f2f2f2;">
            <div class="page-banner" :style="bgimg">
                <div style="background-color:rgba(0 ,0 ,0 ,0.5 ) ;">
                    <div class="container overlay">
                        <ul class="breadcrumb text-light">
                            <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                            <li class="breadcrumb-item active"><a href="./news.html">News</a></li>
                        </ul>
                        <h2>News</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row ">
                    <div class="col-md-2 ">
                        <ul class="news_list">
                            <li><a href="#">最新消息</a></li>
                            <li><a href="#">優惠資訊</a></li>
                        </ul>
                    </div>
                    <div class="col-md-10 ">
                        <div class="row news_card">
                            <div class="col-md-4">
                                <div class="news_img">
                                    <img class="img-fluid" src="https://picsum.photos/300/300" alt="">
                                </div>
                            </div>
                            <div class="col-md-8 ">
                                <div class="news_info">
                                    <h4>news title</h4>
                                    <p>2022/06/06</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatum
                                        distinctio!
                                        Molestias, similique ex sit fugit et quia explicabo at voluptates odio repellat
                                        ut
                                        sunt fugiat molestiae assumenda saepe eius!</p>
                                    <button class="btn news_btn">詳細資訊</button>
                                </div>
                            </div>
                        </div>
                        <div class="row news_card">
                            <div class="col-md-4">
                                <div class="news_img">
                                    <img class="img-fluid" src="https://picsum.photos/300/300" alt="">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="news_info">
                                    <h4>news title</h4>
                                    <p>2022/06/06</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatum
                                        distinctio!
                                        Molestias, similique ex sit fugit et quia explicabo at voluptates odio repellat
                                        ut
                                        sunt fugiat molestiae assumenda saepe eius!</p>
                                    <button class="btn news_btn">詳細資訊</button>
                                </div>
                            </div>
                        </div>
                        <div class="row news_card">
                            <div class="col-md-4">
                                <div class="news_img">
                                    <img class="img-fluid" src="https://picsum.photos/300/300" alt="">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="news_info">
                                    <h4>news title</h4>
                                    <p>2022/06/06</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatum
                                        distinctio!
                                        Molestias, similique ex sit fugit et quia explicabo at voluptates odio repellat
                                        ut
                                        sunt fugiat molestiae assumenda saepe eius!</p>
                                    <button class="btn news_btn">詳細資訊</button>
                                </div>
                            </div>
                        </div>
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
          backgroundImage: "url(" + require("../assets/img/多肉1.jpg") + ")",
          marginBottom:' 60px',
      }
    }
  }
}
</script>