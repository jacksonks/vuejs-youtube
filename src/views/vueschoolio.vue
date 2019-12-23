<template>
    <v-content>
        <v-container>
            <v-layout>
                <fundamentals></fundamentals>
                <componentes></componentes>

            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
    import Fundamentals from "../components/fundamentals";
    import Componentes from "../components/componentes";
    export default {
        components: {Componentes, Fundamentals},
        data: () => ({
            //
        }),
        computed: {
            //
        },
        watch:{
            //
        },
        methods: {
            //
        },
    };
</script>

<style scoped>
</style>