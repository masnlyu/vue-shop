<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                <div class="card border-0 shadow-sm">
                    <div style="height: 150px; background-size: cover; background-position: center"
                        :style="{ backgroundImage: `url(${item.imageUrl})` }">
                    </div>
                    <div class="card-body">
                        <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                        <h5 class="card-title">
                            <a href="#" class="text-dark">{{ item.title }}</a>
                        </h5>
                        <p class="card-text">{{ item.content }}</p>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                            <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                        </div>
                    </div>
                    <div class="card-footer d-flex">
                        <button type="button" class="btn btn-outline-secondary btn-sm"
                            @click.prevent="getproduct(item.id)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                            查看更多
                        </button>
                        <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                            @click.prevent="addtoCart(item.id)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                            加到購物車
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="product.imageUrl" class="img-fluid" alt="">
                        <blockquote class="blockquote mt-3">
                            <p class="mb-0">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                        </blockquote>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                            <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
                        </div>
                        <select name="" class="form-control mt-3" v-model="product.num">
                            <option :value="num" v-for="num in 10" :key="num">
                                選購 {{ num }} {{ product.unit }}
                            </option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                            小計 <strong v-if="product.num >= 1">{{ product.num * product.price }}</strong> <span
                                v-else>0</span>元
                        </div>
                        <button type="button" class="btn btn-primary" @click="addtoCart(product.id, product.num)">
                            <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                            加到購物車
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-5 row justify-content-center">
            <div class="col-md-6" v-if="cart.total">
                <table class="table">
                    <thead>
                        <th></th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </thead>
                    <tbody>
                        <!-- v-if="cart.carts" -->
                        <tr v-for="item in cart.carts" :key="item.id">
                            <td class="align-middle">
                                <button type="button" class="btn btn-outline-danger btn-sm"
                                    @click="removeCartItem(item.id)">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </td>
                            <td class="align-middle">
                                {{ item.product.title }}
                                <div class="text-success" v-if="item.coupon">
                                    已套用優惠券
                                </div>
                            </td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">總計</td>
                            <td class="text-right">{{ cart.total }}</td>
                        </tr>
                        <tr v-if="cart.final_total !== cart.total">
                            <td colspan="3" class="text-right text-success">折扣價</td>
                            <td class="text-right text-success">{{ cart.final_total }}</td>
                        </tr>
                    </tfoot>
                </table>
                <div class="input-group mb-3 input-group-sm">
                    <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                            套用優惠碼
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="useremail">Email</label>
                    <input type="email" class="form-control" name="email" id="useremail"
                         v-model="form.user.email" placeholder="請輸入 Email" required>
                    <span class="text-danger">
                                        </span>
                </div>
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username"
                         v-model="form.user.name" required
                        placeholder="輸入姓名">
                    <span class="text-danger" v-if="!form.user.name">姓名必須輸入</span>
                </div>

                <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                </div>

                <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="address" class="form-control" name="address"
                         id="useraddress" v-model="form.user.address"
                        required placeholder="請輸入地址">
                    <span class="text-danger">地址欄位不得留空</span>
                </div>

                <div class="form-group">
                    <label for="useraddress">留言</label>
                    <textarea name="" id="" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                    <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data() {
        return {
            products: [],
            status: {
                loadingItem: ''
            },
            product: {},
            isLoading: false,
            cart: {},
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            coupon_code: '',
        }
    },
    methods: {
        getproducts(page = 1) {
            const vm = this;
            vm.isLoading = true;
            const api = `https://vue-course-api.hexschool.io/api/mason/products?page=${page}`;
            vm.$http.get(api).then((response) => {
                vm.isLoading = false;
                console.log("重新取得商品列表: ", response.data);
                vm.products = response.data.products;
            });
        },
        getproduct(id) {
            const vm = this;
            vm.status.loadingItem = id
            const api = `https://vue-course-api.hexschool.io/api/mason/product/${id}`;
            vm.$http.get(api).then((response) => {
                vm.product = response.data.product;
                console.log(response.data);
                $('#productModal').modal('show');
                vm.status.loadingItem = ''
            });
        },
        addtoCart(id, qty = 1) {
            const vm = this;
            vm.status.loadingItem = id
            const api = `https://vue-course-api.hexschool.io/api/mason/cart`;
            const cart = {
                product_id: id,
                qty,
            }
            vm.$http.post(api, { data: cart }).then((response) => {
                console.log(response.data);
                vm.status.loadingItem = ''
                vm.getCart()
                $('#productModal').modal('hide');
            });
        },
        getCart() {
            const vm = this;
            vm.isLoading = true;
            const api = `https://vue-course-api.hexschool.io/api/mason/cart`;
            vm.$http.get(api).then((response) => {
                console.log("取得購物車", response);
                vm.cart = response.data.data;
                vm.isLoading = false;
            });
        },
        removeCartItem(id) {
            const vm = this;
            const api = `https://vue-course-api.hexschool.io/api/mason/cart/${id}`;
            vm.isLoading = true;
            this.$http.delete(api).then(() => {
                vm.getCart();
                vm.isLoading = false;
            });
        },
        addCouponCode() {
            const vm = this;
            const api = `https://vue-course-api.hexschool.io/api/mason/coupon`;
            const coupon = {
                code: vm.coupon_code,
            };
            vm.isLoading = true;
            this.$http.post(api, { data: coupon }).then((response) => {
                console.log(response);
                vm.getCart();
                vm.isLoading = false;
            });
        },
        createOrder() {
            const vm = this;
            const api = `https://vue-course-api.hexschool.io/api/mason/order`;
            const order = vm.form;
            vm.isLoading = true;
                    this.$http.post(api, { data: order }).then((response) => {
                        console.log('訂單已建立', response);
                        if (response.data.success) {
                            vm.$router.push(`/cheakOrder/${response.data.orderId}`);
                        }
                        vm.getCart();
                        vm.isLoading = false;
                    });
            }
    },
    created() {
        this.getproducts()
        this.getCart()
    }
}
</script>