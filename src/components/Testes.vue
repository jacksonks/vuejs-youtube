<template>
    <v-content>
        <v-container fluid>
            <v-layout row wrap>
                <v-card>
                    <v-card-title>
                        <span class="headline">Use Google's location service?</span>
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.</v-card-text>
                    <v-card-actions>
                        <v-btn color="error" text @click="closeDialog">Disagree</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="success" text @click="null">Agree</v-btn>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
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
            closeDialog: function() {
                this.$emit('close-dialog')
            }
        }
    };
</script>

<style scoped>
</style>