<template>
    <v-content>
        <v-container>
            <v-layout>
                <template>
                    <v-data-table
                            :headers="headers"
                            :items="times"
                            :items-per-page="5"
                            class="elevation-1"
                    >

                        <template v-slot:item.name="{ item }">
                            <v-chip :color="getColor(item.pib)" dark>{{ item.name }}</v-chip>
                        </template>

                        <template v-slot:item.logo="{ item }">
                            <v-img
                                    :src="item.logo"
                                    class="my-1"
                                    contain
                                    height="50"
                            >
                                <v-divider vertical></v-divider>
                            </v-img>
                        </template>
                    </v-data-table>
                </template>

            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
    export default {
        data: () => ({
            headers: [
                {
                    text: 'Name',
                    sortable: false,
                    align: 'left',
                    value: 'name',
                },
                { text: 'Logo', value: 'logo' },
                { text: 'PIB', value: 'pib' },

            ],
            times: [
                {
                    name:'BRASIL',
                    logo: require('../assets/logo.svg'),
                    pib: 500,
                },
                {
                    name:'AFRICA',
                    logo: require('../assets/logo.png'),
                    pib: 150,
                }
            ],
        }),
        computed:{
            //
        },
        watch:{
            //
        },
        methods: {
            getColor (pib) {
                if (pib > 400) return 'red'
                else if (pib > 200) return 'orange'
                else return 'green'
            },
        }
    };
</script>

<style scoped>
</style>