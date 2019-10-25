<template>
    <v-content>
        <v-container>
            <v-layout>
                <hello-world></hello-world>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
    import HelloWorld from "../components/HelloWorld";
    export default {
        components: {HelloWorld},
        data: () => ({
            //
        }),
    };
</script>
<style scoped>
</style>