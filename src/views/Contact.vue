<template>
    <div>
            <main style="background-color: #f2f2f2;">
        <div class="page-banner" :style="bgimg">
            <div style="background-color:rgba(0 ,0 ,0 ,0.5 ) ;">
                <div class="container overlay">
                    <ul class="breadcrumb text-light">
                        <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="./contact.html">Contact</a></li>
                    </ul>
                    <h2>Contact</h2>
                </div>
            </div>
        </div>
        <div class="container" style="max-width: 900px;  background:#fff; margin:auto; padding:30px 30px;">
            <div class="form_title">
                <p>如果您有任何問題、意見或是需求，請告訴我們，我們將竭誠為您服務。</p>

                <p>為了提供您更好的服務品質，請填妥以下表格，服務人員會儘速與您連繫。</p>
            </div>
            <form class="row" action="#" style="">
                <div class="col-sm-3 ">
                    <label class="c_label" for="" style="width:100%;">聯絡人姓名</label>
                </div>
                <div class="col-sm-9 ">
                    <input class="c_input" type="text" style="width:100%;">
                </div>
                <div class="col-sm-3 ">
                    <label class="c_label" for="" style="width:100%;">性別</label>
                </div>
                <div class="col-sm-9 ">
                    <div class="c_input">
                        <input type="radio" name="sex" value="男">男
                        <input type="radio" name="sex" value="女">女
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <label class="c_label" for="" style="width:100%;">連絡電話</label>
                </div>
                <div class="col-sm-9 ">
                    <input class="c_input" type="text" style="width:100%;">
                </div>
                <div class="col-sm-3 ">
                    <label class="c_label" for="" style="width:100%;">信箱</label>
                </div>
                <div class="col-sm-9 ">
                    <input class="c_input" type="text" style="width:100%;">
                </div>
                <div class="col-sm-3">
                    <label class="c_label" for="" style="width:100%;">縣市</label>
                </div>
                <div class="col-sm-9">
                    <select class="c_input" name="city" id="">
                        <option>請選擇</option>
                        <option value="基隆市">基隆市</option>
                        <option value="台北市">台北市</option>
                        <option value="新北市">新北市</option>
                        <option value="桃園市">桃園市</option>
                        <option value="新竹市">新竹市</option>
                        <option value="新竹縣">新竹縣</option>
                        <option value="宜蘭縣">宜蘭縣</option>
                        <option value="苗栗縣">苗栗縣</option>
                        <option value="台中市">台中市</option>
                        <option value="南投縣">南投縣</option>
                        <option value="彰化縣">彰化縣</option>
                        <option value="嘉義市">嘉義市</option>
                        <option value="台南市">台南市</option>
                        <option value="台南縣">台南縣</option>
                        <option value="高雄市">高雄市</option>
                        <option value="屏東縣">屏東縣</option>
                        <option value="花蓮縣">花蓮縣</option>
                        <option value="台東縣">台東縣</option>
                        <option value="澎湖縣">澎湖縣</option>
                    </select>
                </div>
                <div class="col-sm-3">
                    <label class="c_label" for="" style="width:100%;">主旨</label>
                </div>
                <div class="col-sm-9 ">
                    <input class="c_input" type="text" style="width:100%;">
                </div>
                <div class="col-sm-3">
                    <label class="c_label" for="" style="width:100%;">留言訊息</label>
                </div>
                <div class="col-sm-9 ">
                    <textarea class="c_input" name="" id="" cols="30" rows="10" style="width:100%;"></textarea>
                </div >
                <div class="form_btn">
                    <button class="btn btn-primary " type="submit">確認送出</button>
                </div>
            </form>
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