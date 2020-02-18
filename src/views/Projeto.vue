<template>
    <v-content>
        <v-container>
            <v-layout>

                <v-flex>
                    <v-btn color="primary" dark @click="dialog = true">Dialog</v-btn>

                    <v-dialog v-model="dialog" width="350px" text>
                        <Testes @close-dialog="dialog = false"></Testes>
                    </v-dialog>
                    <br>
                    <p>valor do v-model do dialog do component: <strong>{{dialog}}</strong></p>
                </v-flex>

                <v-flex>
                    <lista :cores="listadecores" estatico="string estatica"></lista>
                </v-flex>

            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import Testes from "../components/Testes";
    import Lista from "../components/lista";
    export default {
        components: {Lista, Testes},
        data: () => ({
            dialog: false,
            listadecores: ['azul', 'verde', 'amarelo', 'vermelho']
        }),
        computed:{
            //
        },
        watch:{
            //
        },
        methods: {
            closeDialog(){
                this.dialog = false
            }
        }
    };
</script>
<style scoped>
</style>
<!--
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
-->