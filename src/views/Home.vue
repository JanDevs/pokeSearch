<template>
    <div>
        asd
    </div>
</template>
<script>
import api from '@/api'
export default {
    name: 'Home',
    props: ['Holis'],
    data(){
        return {
            isLoading: false,
            pokemon: []
        }
    },
    created(){
        this.isLoading = true;
        api.getPokemon()
            .then(pokemon => (this.pokemon = pokemon))
            .finally(() => this.isLoading = false)
    }
}
</script>