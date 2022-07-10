<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light navbarbg1" id="navbar">
                <div class="container">
                    <router-link class="" to="/">
                        <img src="../assets/img/logo.jpg" alt="" style="max-width: 200px;">
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 mb-lg-0 fs-5">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/news">
                                    最新消息
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/viewproducts">
                                    所有產品
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about">
                                    關於森林
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contact">
                                    聯絡我們
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/login">
                                    後台登入
                                </router-link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>