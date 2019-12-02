<template>
    <v-container>
        <v-layout row wrap>

            <div class="product">

                <div class="product-image">
                    <img :src="image" />
                </div>

                <div class="product-info">
                    <h1>{{ product }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <p>Tamanhos: {{ details }}</p>

                    <div class="color-box"
                         v-for="(variant, index) in variants"
                         :key="variant.variantId"
                         :style="{ backgroundColor: variant.variantColor }"
                         @mouseover="updateProduct(index)"
                    >
                    </div>

                    <v-btn v-on:click="addToCart"
                           :disabled="!inStock"
                           color="success"
                    >
                        <v-icon>add_shopping_cart</v-icon>
                        <v-icon>exposure_plus_1</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="removeFromCart"
                           color="error"
                    >
                        <v-icon>remove_shopping_cart</v-icon>
                        <v-icon>exposure_neg_1</v-icon>
                    </v-btn>

                </div>

                <div>
                    <p v-if="!reviews.length">There are no reviews yet.</p>
                    <ul v-else>
                        <li v-for="(review, index) in reviews" :key="index">
                            <p>{{ review.name }}</p>
                            <p>Rating:{{ review.rating }}</p>
                            <p>{{ review.review }}</p>
                        </li>
                    </ul>
                </div>

                <product-review @review-submitted="addReview"></product-review>

            </div>
        </v-layout>
    </v-container>
</template>

<script>
    import ProductReview from "./productReview";
    export default {
        components: {ProductReview},
        props: {
            premium: {
                type: Boolean,
                required: true
            }
        },
        data: () => ({
            reviews: [],
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['P','M','G','GG'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0
        }),

        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image(){
                return this.variants[this.selectedVariant].variantImage
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity
            },
            shipping() {
                if (this.premium) {
                    return "Free"
                }
                return 2.99
            }
        },

        methods: {
            addToCart: function() {
                this.$emit('add-to-cart')
            },
            updateProduct: function(index) {
                this.selectedVariant = index
            },
            removeFromCart: function() {
                this.$emit('remove-from-cart')
            },
            addReview(productReview) {
                this.reviews.push(productReview)
            }
        },
    };
</script>

<style scoped>
    body {
        font-family: tahoma;
        color:#282828;
        margin: 0px;
    }

    img {
        border: 1px solid #d8d8d8;
        width: 20%;
        margin: 40px;
        box-shadow: 0px .5px 1px #d8d8d8;
    }

    .product-image {
        flex-basis: 700px;
    }

    .product-info {
        margin-top: 10px;
        flex-basis: 500px;
    }

    .color-box {
        width: 40px;
        height: 40px;
        margin-top: 5px;
    }

    button {
        margin-top: 30px;
        border: none;
        background-color: #1E95EA;
        color: white;
        height: 40px;
        width: 100px;
        font-size: 14px;
    }

    input {
        width: 100%;
        height: 25px;
        margin-bottom: 20px;
    }

    textarea {
        width: 100%;
        height: 60px;
    }
</style>