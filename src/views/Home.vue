<template>
    <div>
        <px-assets-table :pokemon="pokemon" />
    </div>
</template>
<script>
import api from '@/api'
import pxAssetsTable from '@/components/PxAssetsTable'
export default {
    name: 'Home',
    components: { pxAssetsTable },
    data(){
        return {
            isLoading: false,
           
            pokemon: [],
            that: this      
        }
    },
    beforeCreate(){
      
        this.isLoading = true;
        for (let index = 0; index < 50; index++) {
            api.getPokemon(index)
                .then(a => this.pokemon.push(a));

        }
    },
    mounted(){
     
    },
}
</script>