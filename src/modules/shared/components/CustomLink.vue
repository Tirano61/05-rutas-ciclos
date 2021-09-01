

<template>
    <a v-if="isExternalLink" target="_blank" :href="link.to">{{link.name}}</a>
    <router-link 
    v-else :to="routeComputed"
    v-slot="{ isActive }">
    
    <a :class="isActive ? 'is-active' : 'normal-link'" >
        {{ link.name }}
    </a>
    </router-link>

</template>

<script>
export default {
    props: {
        link:{
            type: Object,
            required: true,
        }
    },
    computed:{
        isExternalLink(){
            return this.link.to.startsWith('http')
        },
        routeComputed(){
            return this.link.id === undefined
                ? {name: this.link.to}
                : {name: this.link.to, params:{id: this.link.id} }
        }
    }
}
</script>

<style scope>
.is-active{
    color: #42b983
}
.normal-link{
    color: #616161
}
</style>