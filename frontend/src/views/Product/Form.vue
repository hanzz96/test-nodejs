<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <ErrorAlert :message="errorMessage" :visible="showErrorAlert" @close="closeErrorAlert" />
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" md="12" sm="12">
                        <v-text-field v-model="modelIssue.title" label="Title" required
                            :rules="titleRules"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" sm="12">
                        <v-text-field v-model="modelIssue.description" label="Description" required
                            :rules="descriptionRules"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
            </v-btn>

        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
    name: 'FormProduct',
    data() {
        return {
            errorMessage: '',
            showErrorAlert: false,
            titleRules: [
                value => {
                    if (value?.length >= 3) return true
                    return 'First name must be at least 3 characters.'
                },
            ],
            descriptionRules: [
                value => {
                    if (value?.length >= 3) return true
                    return 'Serial Number must be at least 5 characters.'
                },
            ],
        }
    },
    computed: {
        ...mapState('product', {
            modelIssue: state => state.modelIssue,
        }),
        ...mapGetters('product', ['allIssues']),
        formTitle() {
            return Object.hasOwn(this.modelIssue, '_id') ? 'Edit Product' : 'New Product';
        }
    },
    methods: {
        ...mapActions('product', ['addIssue', 'editIssue']),
        save() {
            if (Object.hasOwn(this.modelIssue, '_id')) {
                this.editIssue(this.modelIssue);
            } else {
                this.addIssue(this.modelIssue);
            }
            this.$emit('save');
        },
        close() {
            this.$emit('close');
        },
    },
};
</script>