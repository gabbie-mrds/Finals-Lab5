<template>
    <div class = "contact">
        <h1>{{ title }}</h1>
        <h4>{{author}}</h4>
    </div>
</template>

<script>
export default{
    name: "contact",
    data(){
        return{
            title:"This is the Contact page",
            author: "By: Gabrielle Delos Santos"
        }
    }
}
</script>

<style scoped>
</style>