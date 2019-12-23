<template>
    <v-content>
        <v-container>
            <v-layout row wrap>

                <v-btn @click="contador++">
                    <v-icon>add</v-icon>
                    You clicked me {{ contador }} times.
                </v-btn>
                
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data: () => ({
            contador: 0,
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