<template>
      <div class="grid grid-cols-2 h-full m-1 p-10 gap-3 segment">
        <div class="h-full flex flex-col gap-3 items-center justify-center">
            <Login />
            <QuickView />
        </div>
        <div class="form-container h-full w-full flex flex-col gap-3 items-center justify-center"> 
            <Signup />
        </div>
      </div>
</template>

<script lang="ts">
import Login from './login.vue';
import Signup from './signup.vue';
import QuickView from './QuickView.vue';

export default {
    components: {
        Login,
        Signup,
        QuickView
    }
}
</script>
