<template>
    <div class="flex-col" >
        
        <table>
            <thead>
            <tr>
                <th>No.</th>
                <th>Nombre</th>
                <th>img</th>
            </tr>
            </thead>
            <tbody>
                <td></td>
                <td></td>
                <tr v-for="a in pokemon" :key="a" >
                    <td>
                        #{{ a.id }}
                    </td>
                    <td>
                        <b> {{ a.name }} </b>
                    </td>
                    <td>
                        <img :src="a.sprites.front_default">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
import api from '@/api'
export default {
    name: 'PxAssetsTable',
    props: {
        pokemon: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            asset: {}
        }
    },
    methods: {
        buscar(url){
            api.getInfo(url);
        }
    }

    
}
</script>

<style scoped>
td{
    padding: 10px;
    text-align: center;
}
</style>