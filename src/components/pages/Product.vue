<template>
  <div class>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right">
      <button class="btn btn-primary mt-4" @click="openModal(true)">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="products != null && products.length > 0">
          <tr v-for="(item, key) in products" :key="key">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ item.origin_price | currency}}
            </td>
            <td class="text-right">
              {{ item.price | currency}}
            </td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelProductModal(item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <pagination :pagination="pagination" @emitPages="getProducts"></pagination>
 <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile()"
                  />
                </div>
                <img
                  v-bind:src="tempProduct.imageUrl"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct()">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import pagination from '../PagiNation.vue'
import $ from "jquery"; //導入jquery才可使用$
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  components:{
    pagination
  },
  methods: {
    //取得新的列表
    getProducts(page) {
      const vm = this;
      vm.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/mason/admin/products?page=${page}`;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        console.log("重新取得商品列表: ", response.data);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
        console.log("新增產品資訊");
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
        console.log("編輯取得產品資訊ID:" + this.tempProduct.id);
      }
      $("#productModal").modal("show");
    },
    updateProduct() {
      const vm = this;
      vm.isLoading = true;
      let apiurl = "";
      let httpMethod = "";
      //判斷是否為新產品，是的話
      if (vm.isNew) {
        apiurl = "https://vue-course-api.hexschool.io/api/mason/admin/product";
        httpMethod = "post";
        this.$http[httpMethod](apiurl, { data: vm.tempProduct }).then(
          (response) => {
            console.log(response.data.message);
            console.log(response);
            if (response.data.success) {
              $("#productModal").modal("hide");
              vm.getProducts();
              this.$bus.$emit('message:push','新增成功','success')
            } else {
              $("#productModal").modal("hide");
              vm.getProducts();
              console.log("新增失敗");
            }
            vm.products = response.data.products;
          }
        );
      } else {
        apiurl = `https://vue-course-api.hexschool.io/api/mason/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
        this.$http[httpMethod](apiurl, { data: vm.tempProduct }).then(
          (response) => {
            console.log(response.data.message + "產品ID:" + vm.tempProduct.id);
            console.log(response);
            if (response.data.success) {
              $("#productModal").modal("hide");
              vm.getProducts();
              this.$bus.$emit('message:push','修改成功','success')
            } else {
              $("#productModal").modal("hide");
              vm.getProducts();
              console.log("編輯失敗");
            }
            vm.products = response.data.products;
          }
        );
      }
    },
    //打開確認移除視窗
    openDelProductModal(item) {
      const vm = this;
      $("#delProductModal").modal("show");
      vm.tempProduct = Object.assign({}, item);
      console.log("確認移除視窗");
    },
    //移除項目
    delProduct() {
      const vm = this;
      vm.isLoading = true;
      const apiurl = `https://vue-course-api.hexschool.io/api/mason/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(apiurl).then((response) => {
        console.log(response.data.message);
        $("#delProductModal").modal("hide");
        this.getProducts();
        this.$bus.$emit('message:push','已移除項目','success')
      });
    },
    //上傳檔案
    uploadFile() {
      console.log(this);
      const uploadFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      const apiurl =
        "https://vue-course-api.hexschool.io/api/mason/admin/upload";
      vm.status.fileUploading = true;
      this.$http
        .post(apiurl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;
            // console.log(vm.tempProduct.imageUrl);

            //$set強制寫入，將response.data.imageUrl寫入vm.tempProduct的imageUrl
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
            vm.status.fileUploading = false;
          }else{
            this.$bus.$emit('message:push',response.data.message,'danger')
          }
        });
    },
  },
  created() {
    // 因跨域問題由前端主動提供cookie
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log("向後端傳送Cookie:", myCookie);
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.getProducts();
  },
};
</script>