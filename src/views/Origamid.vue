<template>
    <v-content>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex>
                    <v-btn :disabled="estoque === 0 ? true :false" color="success" @click="incrementdar">
                        <v-icon>add</v-icon>
                    </v-btn>
                    <v-btn :disabled="carrinho === 0 ? true :false" color="error" @click="decrementar">
                        <v-icon>remove</v-icon>
                    </v-btn>
                    <br>
                    <strong>Carrinho: {{carrinho}}</strong>
                    <br>
                    <strong>Estoque: {{estoque}}</strong>
                </v-flex>
                <v-flex>
                    <v-btn :color="api ? 'green' : 'red'" @click="pegar">pegar da api</v-btn>
                    <v-flex>
                        <strong>dados da api: {{api}}</strong>
                        <ul v-for="(dados,i) in api" :key="i">
                            <li>
                                {{dados}}
                            </li>
                        </ul>
                    </v-flex>
                </v-flex>
                <v-flex>
                    <v-btn :color="bol ? 'green' : 'red'" @click="bol = !bol">{{bol}}</v-btn>
                    <p v-html="site"></p>
                    <p v-text="site"></p>
                    <p v-text="bol"></p>
                    <p v-html="h"></p>
                </v-flex>
                <v-flex v-for="(item, i) in states" :key=i>
                    <strong>
                        {{item.name}}
                    </strong>
                </v-flex>
                <v-flex>
                    <v-btn @click="c">pegar da api</v-btn>
                    <strong>API: {{cep}}</strong>
                    <ul v-for="(dados,i) in cep" :key="i">
                        <li>
                            {{dados}}
                        </li>
                    </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data: () => ({
            carrinho: 0,
            estoque: 6,
            site: "<a href='https://www.google.com/'>Google</a>",
            bol: false,
            h: "<h1>h1</h1>",
            api: undefined,
            cep: undefined,
            states: [
                { name: 'Florida', abbr: 'FL', id: 1 },
                { name: 'Georgia', abbr: 'GA', id: 2 },
                { name: 'Nebraska', abbr: 'NE', id: 3 },
                { name: 'California', abbr: 'CA', id: 4 },
                { name: 'New York', abbr: 'NY', id: 5 },
            ],
        }),
        computed:{
            //
        },
        watch:{
            //
        },
        methods: {
            incrementdar(){
                this.carrinho++
                this.estoque--
            },
            decrementar(){
                this.carrinho--
                this.estoque++
            },
            c(){
                fetch("https://viacep.com.br/ws/04538133/json/")
                    .then(response => response.json())
                    .then(json => {
                        this.cep = json;
                    })
            },
            pegar (){
                fetch("https://jsonplaceholder.typicode.com/users/6")
                    .then(response => response.json())
                    .then(json => {
                        this.api = json;
                    })
            }
        }
    }
</script>

<style scoped>
</style>