<template>
      <div class="grid grid-cols-3 h-full m-1 gap-3 segment p-10">
        <div class="col-span-2 h-full">
            <Login />
            <QuickView />
        </div>
        <div class="form-container h-full w-full"> 
            <Signup />
        </div>
      </div>
</template>

<script setup lang="ts">
import Login from './login.vue';
import Signup from './signup.vue';
import QuickView from './QuickView.vue';

</script>
