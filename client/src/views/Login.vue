    <template>

  <div class="container">
    <div class="row">
        <form class="loginform">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="row">
            <div class="col s2">
              <button type="button" @click="login" class="btn btn-danger btn-block">Login</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  

</template>

<script>
import axios from 'axios'
// import router from '../router.js'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      let account = {
        email: this.email,
        password: this.password
      }

      axios
        .post('http://localhost:3000/login', account)
        .then(response => {
          // console.log(response.data.token);
          localStorage.setItem('token', response.data.token)
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.loginform {
  color: rgb(241, 45, 78);
  border-radius: 5px;
  border: 1px solid rgb(253, 252, 252);
  padding: 50px 50px;
  margin-top: 18vh;
  -webkit-box-shadow: 11px 12px 23px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 12px 23px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 11px 12px 23px -9px rgba(0, 0, 0, 0.75);
}
</style>




    
