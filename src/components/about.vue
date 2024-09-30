<template>
    <div class = "about">
        <h1>{{ title }}</h1>
        <h4>{{author}}</h4>
    </div>
</template>

<script>
export default{
    name: "about",
    data(){
        return{
            title:"This is the About page",
            author: "By: Gabrielle Delos Santos"
        }
    }
}
</script>

<style scoped>
</style>