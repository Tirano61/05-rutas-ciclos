

<template>
    <h1>Pokemon : {{ id }}</h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">
        <p>{{ pokemon.name }}</p>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type: Number,
            required: true
        }
    },
    data(){
        return{
            //id: this.$route.params
            pokemon: null
        }
    },
    created(){
        // const { id } = this.$route.params
        // console.log(id)
        // this.id = id
        this.getpokemon()
    },
    methods:{
        async getpokemon(){
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json() );
                console.log(pokemon)
                this.pokemon = pokemon
                
            } catch (error) {
                this.$router.push('/')
            }
            
        },
    },
    watch:{
        id(){
            this.getpokemon()
        }
    }
}
</script>
