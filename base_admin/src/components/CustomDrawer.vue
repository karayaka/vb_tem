<template>
    <v-navigation-drawer
        v-model="appStore.togleValue"
        :rail="mini"
        temporary
    >
        <v-list-item class="px-2">
            <v-list>
                <v-list-item @click="mini = !mini"
                    prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                    title="Sandra Adams"
                    subtitle="sandra_a88@gmailcom"
                >
                <template v-slot:append>
                    <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="mini = !mini"
                    ></v-btn>
                </template>
                </v-list-item>
            </v-list>
        </v-list-item>
        <v-divider></v-divider>
            <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
        
    </v-navigation-drawer>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { useAppStore } from "@/store/app";

const appStore=useAppStore();

const mini=ref(false)


</script>