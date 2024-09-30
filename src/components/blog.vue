<template>
    <div class = "blog">
        <h1>{{ title }}</h1>
        <h4>{{author}}</h4>
    </div>
</template>

<script>
export default{
    name: "blog",
    data(){
        return{
            title:"This is the Blog page",
            author: "By: Gabrielle Delos Santos"
        }
    }
}
</script>

<style scoped>
</style>