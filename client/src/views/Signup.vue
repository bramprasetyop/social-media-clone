    <template>

  <div class="container">
    <div class="row">
      <div class="col s6">
        <form class="loginform">

          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" v-model="username" class="form-control" id="username" aria-describedby="username">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" v-model="emailsignup" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="passwordsignup" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="row">
            <div class="col s3">

              <button type="button" @click="signup" class="btn btn-danger btn-block">Signup</button>
            </div>
            <div class="col s1">
              <h6>OR</h6>
            </div>

            <div class="col s3">
              <a href="/login">
                <button type="button" class="btn btn-danger btn-block">Login</button>
              </a>

            </div>
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'signup',
  data() {
    return {
      username: '',
      emailsignup: '',
      passwordsignup: ''
    }
  },
  methods: {
    signup() {
      let account = {
        username: this.username,
        email: this.emailsignup,
        password: this.passwordsignup
      }

      axios
        .post('http://localhost:3000', account)
        .then(response => {
          // console.log(response.data.token);
          this.$router.push('/login')
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




    
