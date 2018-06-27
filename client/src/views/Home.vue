    <template>

  <div>

    <Navbar/>

    <!-- Page Layout here -->
    <div class="row">

      <div id="left" class="col s12 m4 l3">

        <div id="boxleft" class="col s12">
          <div class="col s12" id="oit">

            <div class="col s5">
              <div id="oii">
                <img src="https://tse2.mm.bing.net/th?id=OIP.CImmIgSpRjmCuYcieLYSiwHaH0&pid=15.1&P=0&w=300&h=300" class="img-responsive" alt="">
              </div>
            </div>

            <div id="rightprofile" class="col s7">

              <h6>
                <b>Bram Prasetyo</b>
              </h6>
              <div class="row">
                <div id="actionprofile" class="col s6">
                  <p>Followers 12.4K</p>
                </div>
                <div id="actionprofile" class="col s6">
                  <p> Tweets 1134</p>
                </div>
              </div>

            </div>

          </div>
          <div id="leftright">
            <h4>
              <strong>Trends for you</strong>
            </h4>
            <h6>#PilkadaSerentak2018 <br>
              <b>13.4K Tweets</b>
            </h6>
            <h6>#OdedYanaMenang</h6>
            <h6>#JabarMilihOpat</h6>
            <h6>16 Besar <br>
              <b>8,318 Tweets</b>
            </h6>
            <h6>Kota Tangerang Ke TPS <br>
              <b>9,974 Tweets</b>
            </h6>
            <h6>Arapaima <br>
              <b>1,570 Tweets</b>
            </h6>
            <h6>#PilkadaBermartabat <br>
              <b>3,366 Tweets</b>
            </h6>
            <h6>#JanganGolput</h6>
            <h6>#KavendaDiPRO2FM</h6>
          </div>
        </div>

      </div>
      <!-- body tengah -->
      <div id="centerbody" class="col s12 m8 l6">
        <div class="col s12">
          <div class="row">
            <div class="col s9">
              <textarea v-model="tweet" placeholder="What's happening?" id="textarea2" class="materialize-textarea" data-length="120"></textarea>

            </div>
            <div class="col s3">
              <button @click="postTweet" class="btn waves-effect waves-light" type="submit" name="action">Tweet
                <i class="material-icons right">send</i>
              </button>
            </div>

          </div>

          <!-- ======= container tweet ========= -->
          <div id="comment" class="row" v-for="tweet in result" :key="tweet">

            <div id="photo" class="col s2">

              <img src="https://tse2.mm.bing.net/th?id=OIP.CImmIgSpRjmCuYcieLYSiwHaH0&pid=15.1&P=0&w=300&h=300" class="img-responsive" alt="">

              <!-- <img v-bind:src="item.image" class="img-responsive"> -->

            </div>
            <div class="col s10">
              <div class="content">
                <p>

                  {{tweet.tweet}}
                </p>
                <hr>
                <div id="likebutton" class="col s12">
                  <div id="like" class="col s2 right">
                    <button @click="deleteTweet(tweet._id)" class="waves-effect waves-light btn tiny">
                      <i class=" material-icons">delete</i>
                    </button>

                  </div>
                  <div id="like" class="col s3 right">

                    <div id="totallike" class="col s4 right">
                      <h6>0</h6>
                    </div>

                    <button class="waves-effect waves-light btn tiny">
                      <i class=" material-icons">favorite</i>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <!-- ======= container tweet ========= -->

        </div>

        <!-- body tengah -->
      </div>

      <div id="right" class="col s12 m4 l3">
        <div id="boxright" class="col s12">
          <div id="leftright">
            <h4>
              <strong>Who to follow</strong>
            </h4>
            <div v-for="user in users" :key="user">
              <div class="row">
                <div id="follow" class="col s5">
                  <h6 id="usernametwitter"> {{user.username}}
                  </h6>
                </div>
                <div id="followus" class="col s4">
                  <button class="waves-effect waves-light btn tiny">
                    <i class=" material-icons">person_add</i>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Navbar from '../components/navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data() {
    return {
      tweet: '',
      result: [],
      users: []
    }
  },
  created: function() {
    this.getdata()
    this.getUser()
  },
  methods: {
    postTweet() {
      let addTweet = {
        tweet: this.tweet
      }
      // console.log(addTodo)

      axios
        .post('http://localhost:3000/home', addTweet, {
          headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
          this.result.push(response.data.tweet)
          this.result.reverse()

          // this.$router.push('/home')

          this.tweet = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    getdata() {
      // console.log('kepanggil')
      axios
        .get('http://localhost:3000/home/tweets')
        .then(response => {
          // console.log(response.data.tweet);

          this.result = response.data.tweet.reverse()

          // this.$(router).push("/home");
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUser() {
      // console.log('kepanggil')
      axios
        .get('http://localhost:3000/home/users')
        .then(({ data }) => {
          // console.log(data.users);

          this.users = data.users.reverse()

          // this.$(router).push("/home");
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTweet(id) {
      // console.log('kepanggil')
      axios
        .delete(`http://localhost:3000/home/tweets/delete/${id}`, {
          headers: { authorization: localStorage.getItem('token') }
        })
        .then(({ data }) => {
          // console.log(data.users);
          this.getdata()

          // this.users = data.users.reverse()

          // this.$(router).push("/home");
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.textArea {
  border-radius: 5px;
  border: none;
}

.nav-wrapper {
  background-color: rgb(236, 243, 243);
  height: 100px;
}

#centerbody {
  margin-top: 15px;
  /* border: 1px solid black; */
  height: auto;
  background-color: rgb(249, 253, 253);
  padding: 50px 50px;
}

#right {
  margin-top: 15px;
}
#left {
  margin-top: 15px;
}

#boxright {
  /* border: 1px solid black; */
  background-color: rgb(249, 253, 253);
}
#boxleft {
  /* border: 1px solid black; */
  background-color: rgb(249, 253, 253);
}

#leftright {
  padding: 20px 20px;
}

#oii {
  align-content: left;
  /* border: 1px solid black; */
  padding: 5px 5px;
  height: auto;
}

#oit {
  /* border: 1px solid black; */
  border-radius: 5px;
  margin-top: 10px;
}

img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 125px;
}

/* #rightprofile {
  border: 1px solid black;
} */

#actionprofile {
  color: rgb(125, 210, 231);
}

/* .content {
  border: 1px solid black;
} */

#photo {
  /* border: 1px solid black; */
  height: 50px;
}

/* #comment {
  border: 1px solid black;
} */

#likebutton {
  /* border: 1px solid black; */
  margin-top: 10px;
}

/* #like {
  border: 1px solid black;
} */

#totallike {
  /* border: 1px solid black; */
  color: rgb(240, 94, 94);
}

/* #follow {
  border: 1px solid black;
} */
/* #followus {
  border: 1px solid black;
} */

#usernametwitter {
  color: rgb(125, 210, 231);
}
</style>




    
