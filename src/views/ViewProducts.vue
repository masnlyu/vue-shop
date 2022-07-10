<template>
    <div>
        <main style="background-color: #f2f2f2;">
            <div class="page-banner" :style="bgimg">
                <div style="background-color:rgba(0 ,0 ,0 ,0.5 ) ;">
                    <div class="container overlay">
                        <ul class="breadcrumb text-light">
                            <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="./product.html">Product</a></li>
                        </ul>
                        <h2>Product</h2>
                    </div>
                </div>
            </div>
            <div class="container product_page ">
                <div class="row">
                    <div class="col-md-3 ">
                        <ul class="product_list ">
                            <li class="product_list_li"><a href="#">所有商品

                                </a></li>
                            <li class="product_list_li">
                                <a href="#">植物</a>
                                <span data-bs-toggle="collapse" href="#productlist1" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">+</span>
                            </li>
                            <ul class="collapse" id="productlist1">
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                            </ul>
                            <li class="product_list_li">
                                <a href="#">植物</a>
                                <span data-bs-toggle="collapse" href="#productlist2" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">+</span>
                            </li>
                            <ul class="collapse" id="productlist2">
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                            </ul>
                            <li class="product_list_li">
                                <a href="#">植物</a>
                                <span data-bs-toggle="collapse" href="#productlist3" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">+</span>
                            </li>
                            <ul class="collapse" id="productlist3">
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                            </ul>
                            <li class="product_list_li">
                                <a href="#">植物</a>
                                <span data-bs-toggle="collapse" href="#productlist4" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">+</span>
                            </li>
                            <ul class="collapse" id="productlist4">
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                                <li><a href=""> 新品植物</a></li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-md-9 ">
                        <h2>所有商品</h2>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bgimg: {
                backgroundImage: "url(" + require("../assets/img/多肉2.jpg") + ")",
                marginBottom: ' 60px',
            }
        }
    }
}
</script>