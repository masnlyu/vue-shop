 <template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn-primary" @click="modalShow(true)">建立新的優換券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <th>名稱</th>
        <th>優惠碼</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th class="text-right">編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.due_date">
          <td class="align-middle">{{ item.title }}</td>
          <td class="align-middle">{{ item.code }}</td>
          <td class="align-middle">{{ item.percent }}</td>
          <td class="align-middle">{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="text-right">
            <button class="btn btn-outline-primary" @click="modalShow(false, item)">編輯</button>
            <button class="btn btn-outline-danger" @click="delModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pagination="pagination" @emitPages="getCoupon" v-if="pagination.total_pages > 1"></pagination>
    <!-- 編輯/新增Coupon Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增優惠券</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題" />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code" placeholder="請輸入優惠碼" />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date" v-model="tempCoupon.due_date" />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control" id="price" v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比" />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                  v-model="tempCoupon.is_enabled" id="is_enabled" />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" @click="addCoupon">更新優惠券</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.code }}</strong> 優惠碼(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery'
import pagination from "../PagiNation.vue";
export default {
  components: {
    pagination
  },
  data() {
    return {
      isLoading: false,
      coupons: [], //這邊是儲存取得商品列表資料
      tempCoupon: {}, //存放新增/編輯時資料
      isNew: false,
      pagination: {}
    };
  },
  // watch:{
  //     due_date(){
  //         const vm =this;
  //         const timestamp =Math.floor(new Date(vm.due_date) / 1000);
  //         vm.tempCoupon.due_date =timestamp;
  //     }
  // },
  methods: {
    getCoupon(page = 1) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/mason/admin/coupons?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.coupons = response.data.coupons; //開啟console.log確認是否成功
        vm.pagination = response.data.pagination; //將變數存入
      });
    },
    addCoupon() {
      const vm = this;
      const timestamp = new Date(vm.tempCoupon.due_date); //取得時間物件
      console.log(timestamp);  //Fri Oct 25 2019 08:00:00 GMT+0800 (台北標準時間)
      // vm.tempCoupon.due_date = Math.floor(new Date(vm.tempCoupon.due_date)) / 1000; //取得timestamp格式
      // console.log(vm.tempCoupon.due_date)
      vm.isLoading = true;
      let httpMethod = "post";
      let api = `https://vue-course-api.hexschool.io/api/mason/admin/coupon`;
      if (!vm.isNew) {
        api = `https://vue-course-api.hexschool.io/api/mason/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#couponModal").modal("hide");
          vm.isLoading = false;
          vm.getCoupon();
        } else {
          $("#couponModal").modal("hide");
          vm.isLoading = false;
          console.log("新增失敗");
        }
      });
    },
    modalShow(isNew, item) {
      if (isNew) {
        this.tempCoupon = {},
          this.isNew = true; //將isNew存入實體中
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      $("#couponModal").modal("show");
    },
    //忘記添加進來this.tempCoupon =item;
    delModal(item) {
      this.tempCoupon = item;   //透過傳進item，可以刪除指定id
      $("#deleteModal").modal("show");
    },
    delCoupon() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/mason/admin/coupon/${vm.tempCoupon.id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        if (response.data.success) {
          $("#deleteModal").modal("hide");
          vm.getCoupon();
        } else {
          $("#deleteModal").modal("hide");
          console.log('刪除失敗')
        }
      });
    }
  },
  created() {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.getCoupon();
  }
};
</script>