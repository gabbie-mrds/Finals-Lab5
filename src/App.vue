<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg"  style = "background-color: #93CCEA">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to = "/">Home
                <span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to = "/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to = "/gallery">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to = "/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to = "/contact">Contact</router-link>
            </li>
           
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search" style = "background-color: white">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
    <img src = "./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
