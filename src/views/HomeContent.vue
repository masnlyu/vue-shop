<template>
    <div>
        <main class="text-center">
            <!-- carousel -->
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/img/室內1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/img/室內2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item ">
                        <img src="../assets/img/室內3.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- carousel -->
            <!-- advantage -->
            <div class="advantage">
                <div class="container text-center ">
                    <h2 class="">永續森林</h2>
                    <div class="row">
                        <div class="col-md-4 advantage_card">
                            <img class=" img-fluid" src="../assets/img/優勢.jpg" alt="">
                            <p>陽光</p>
                        </div>
                        <div class="col-md-4 advantage_card">
                            <img class="img-fluid" src="../assets/img/優勢.jpg" alt="">
                            <p>空氣 </p>
                        </div>
                        <div class="col-md-4 advantage_card">
                            <img class=" img-fluid" src="../assets/img/優勢.jpg" alt="">
                            <p>自然</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- advantage -->
            <!-- product -->

            <div class="home_product container">
                <h2>所有商品</h2>
                <div class="row ">
                    <div class="col-md-6 p-3 product_card">
                        <div>
                            <router-link to="/viewproducts/order">
                                <div class="product_img">
                                    <img src="../assets/img/容易照顧植物.jpg" style="width:100%;">
                                </div>
                                <p class="product_p">容易照顧植物</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-6 p-3 product_card">
                        <div>
                            <router-link to="/viewproducts/order">
                                <div class="product_img">
                                    <img src="../assets/img/驅蟲植物.jpg" style="width:100%;" class="product_img">
                                </div>
                                <p class="product_p">驅蟲植物</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-6 p-3 product_card">
                        <div>
                            <router-link to="/viewproducts/order">
                                <div class="product_img">
                                    <img src="../assets/img/香草植物.jpg" style="width:100%;" class="product_img">
                                </div>
                                <p class="product_p">香草植物</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-6 p-3 product_card">
                        <div>
                            <router-link to="/viewproducts/order">
                                <div class="product_img">
                                    <img src="../assets/img/無土栽培植物.jpg" style="width:100%;" class="product_img">
                                </div>
                                <p class="product_p">無土植栽植物</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- product -->
        </main>
    </div>
</template>