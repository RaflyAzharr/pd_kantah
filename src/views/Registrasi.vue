<template>
    <div>
        <form @submit.prevent="reg">
            <input v-model="email" type="text"> <br>
            <input v-model="pass" type="password"> <br>
            <button type="submit">kirim</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {supabase} from '../supabase'

const email = ref('')
const pass = ref('')

const reg = async () => {
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: pass.value
    })

    if(data) {
        console.log('registrasi berhasil')
        console.log(data)
    }
}
</script>
