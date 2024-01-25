<template>
  <div id="app">
    <div class="header">
      <b-container class="d-flex justify-content-center align-items-center ">
        <div class="log">
          <router-link to="/">
            <h1>Mo<span>V</span>ies</h1>
          </router-link>
          <router-view />
        </div>
      </b-container>
    </div>
  </div>
</template>
<style scoped>
#app {
  position: relative;
}

a {
  text-align: center;
}

.header {
  background-color: rgba(0, 0, 0, 0.836);
  height: 80px;
  z-index: 1111;
}

h1 {
  color: rgba(216, 216, 216, 0.948);
  font-size: 50px;
  font-family: cursive;
}

span {
  color: rgba(96, 142, 127, 0.692);
}
</style>