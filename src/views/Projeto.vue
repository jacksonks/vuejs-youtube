<template>
    <v-container class="white">
        <v-card>
            <vue-editor v-model="text" />
        </v-card>
    </v-container>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    export default {
        components: { VueEditor },
        data: () => ({
            text: '',
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