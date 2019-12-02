<template>
    <v-content>
        <v-container>
            <v-layout row wrap>

                <div class="cart">
                    <v-icon color="info">shopping_cart</v-icon>
                    : {{ cart }}
                </div>

                <product :premium="premium" @add-to-cart="updateCart" @remove-from-cart="removeItem">
                </product>

                <div>
                <v-btn @click="free">
                    Frete: 0800
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="frete">
                    Frete: PAGO
                </v-btn>
                </div>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import Product from "../components/product";
    export default {
        components: {Product},
        data: () => ({
            premium: true,
            cart: 0
        }),
        computed:{
            //
        },
        watch:{
            //
        },
        methods:{
            free(){
                this.premium = true
            },
            frete(){
                this.premium = false
            },
            updateCart() {
                this.cart += 1
            },
            removeItem() {
                if (this.cart > 0) {
                    this.cart -= 1
                } else{
                    alert("Não há mais produtos no carrinho, impossivel remover!")
                }
            },
        }
    };
</script>

<style scoped>
    .cart {
        margin-right: 25px;
        float: right;
        border: 1px solid #d8d8d8;
        padding: 5px 20px;
    }
</style>