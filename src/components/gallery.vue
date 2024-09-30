<template>
    <div class = "gallery">
        <h1>{{ title }}</h1>
        <h4>{{author}}</h4>
    </div>
</template>

<script>
export default{
    name: "gallery",
    data(){
        return{
            title:"This is the Gallery page",
            author: "By: Gabrielle Delos Santos"
        }
    }
}
</script>

<style scoped>
</style>