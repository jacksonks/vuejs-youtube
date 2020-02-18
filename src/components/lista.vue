<template>
    <v-content>
        <v-container>
            <v-layout>
                <v-flex>
                    <ul>
                        <li v-for="(cor,i) in cores" :key="i">{{cor}}</li>
                    </ul>
                    {{estatico}}
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        props:['cores', 'estatico'],
        data: () => ({
            //
        }),
        computed:{
            //
        },
        watch:{
            //
        },
        methods: {
            //
        }
    };
</script>

<style scoped>
</style>