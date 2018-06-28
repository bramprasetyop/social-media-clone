<template>
  <nav>
    <div class="nav-wrapper">
      <img src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697029-twitter-512.png" class="img-responsive" alt="">
      <ul id="nav-mobile" class="right hide-on-med-and-down">

        <li>
          <button @click="logout" id="logout" class="waves-effect waves-light btn tiny">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
<style>
#logo {
  border: 1px solid black;
}
img {
  max-width: 100%;
  max-height: 100%;
}
#logout {
  margin-right: 15px;
}
</style>






