<template>
    <v-content>
        <v-container fluid fill-heigh>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-3">
                        <v-toolbar-title>Novo Usuário</v-toolbar-title>
                        <v-toolbar color="white" text class="elevation-0"><v-toolbar-title class="headline">Detalhes do Perfil</v-toolbar-title></v-toolbar>
                        <v-layout class="align-center justify-center">
                            <v-btn  color="blue" fab x-large dark>
                                <v-file-input prepend-icon=" " prepend-inner-icon="photo_camera" v-model="avatar"></v-file-input>
                            </v-btn>
                        </v-layout>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                        outlined
                                        clearable
                                        placeholder="Nome Completo"
                                        label="Nome Completo"
                                        v-model="name"
                                        prepend-icon="person"
                                        type="text"
                                        color="teal accent-3"
                                ></v-text-field>
                                <v-select
                                        outlined
                                        clearable
                                        placeholder="Função"
                                        label="Função"
                                        v-model="cargo"
                                        :items="cargos"
                                        prepend-icon="school"
                                        color="teal accent-3"
                                ></v-select>
                                <v-select
                                        outlined
                                        clearable
                                        placeholder="Localização"
                                        label="Localização"
                                        v-model="state"
                                        :items="stateOptions"
                                        prepend-icon="place"
                                        color="teal accent-3"
                                ></v-select>
                                <v-text-field
                                        placeholder="E-mail"
                                        outlined
                                        clearable
                                        label="E-mail"
                                        v-model="email"
                                        prepend-icon="alternate_email"
                                        type="email"
                                        color="teal accent-3"
                                ></v-text-field>
                                <v-text-field
                                        outlined
                                        clearable
                                        placeholder="Senha"
                                        label="Senha"
                                        v-model="password"
                                        prepend-icon="lock"
                                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                                        :type="show_password ? 'text' : 'password'"
                                        @click:append="show_password = !show_password"
                                        color="teal accent-3"
                                ></v-text-field>
                                <v-text-field
                                        v-mask="mask.telephone"
                                        v-model="telephone"
                                        label="Telefone"
                                        placeholder="Telefone"
                                        outlined
                                        prepend-icon="phone"
                                        clearable
                                ></v-text-field>
                                <v-layout align-center justify-center row wrap>
                                    <v-flex xs12>
                                        <div class="text-center">
                                            <v-btn
                                                    block
                                                    tile
                                                    color="blue"
                                                    :disabled="!formIsValid"
                                            >Cadastrar Usuário</v-btn>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import {mask} from 'vue-the-mask';
    export default {
        directives: {mask},
        data: () => ({
            mask: {
                telephone: '(##) #####-####',
            },
            telephone: undefined,
            name: undefined,
            avatar: undefined,
            cargo: undefined,
            cargos: [
                'Administrador',
                'Tarm',
                'Medico Regulador',
            ],
            state: undefined,
            stateOptions: [
                'Acre (AC)',
                'Alagoas (AL)',
                'Amapá (AP)',
                'Amazonas (AM)',
                'Bahia (BA)',
                'Ceará (CE)',
                'Distrito Federal (DF)',
                'Espírito Santo (ES)',
                'Goiás (GO)',
                'Maranhão (MA)',
                'Mato Grosso (MT)',
                'Mato Grosso do Sul (MS)',
                'Minas Gerais (MG)',
                'Pará (PA)',
                'Paraíba (PB)',
                'Paraná (PR)',
                'Pernambuco (PE)',
                'Piauí (PI)',
                'Rio de Janeiro (RJ)',
                'Rio Grande do Norte (RN)',
                'Rio Grande do Sul (RS)',
                'Rondônia (RO)',
                'Roraima (RR)',
                'Santa Catarina (SC)',
                'São Paulo (SP)',
                'Sergipe (SE)',
                'Tocantins (TO)'
            ],
            email: undefined,
            password: undefined,
            show_password: false,
        }),
        computed: {
            formIsValid() {
                return this.name && this.email && this.password && this.cargo && this.state && this.telephone
            },
        },
        watch:{
            //
        },
        methods: {
            //
        }
    }
</script>

<style>
</style>