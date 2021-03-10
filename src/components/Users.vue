<template>
    <div>
        <h1>Users Page</h1>
        <p>Team id is {{ $route.params.teamId }}</p>
    </div> 
</template>

<script>
export default {

    watch(){
        // '$route' (to, from){
        //     alert('From: '+from.param.teamId+' To: '+to.param.teamId)
        // }
    },

    created() {
        alert(this.$route.params.teamId);
    },

    // beforeMount() {
    //     alert('Before mounted '+this.$route.params.teamId);
    // }
    // this.$route.params
}
</script>