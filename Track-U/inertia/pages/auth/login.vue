<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
    <div class="form-container bg-(--surface) rounded-xs p-8 text-[#f8f9fa] container-shadow w-[75%]">
    <div class="mb-auto">
      <p class="text-6xl font-bold text-[#f8f9fa]">Login</p>
      <hr class="text-gray-400">
      <p class="text-gray-300">Enter your details below to login to your account</p>
    </div>

    <div class="mt-10">
      <Form v-slot="{ processing, errors }" route="session.store">
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autocomplete="username"
            :data-invalid="errors.email ? 'true' : undefined"
          />
          <div v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div>
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autocomplete="current-password"
            :data-invalid="errors.password ? 'true' : undefined"
          />
          <div v-if="errors.password">{{ errors.password }}</div>
        </div>
        
        <div>
          <button type="submit" class="w-full mt-10" :disabled="processing">Login</button>
        </div>
      </Form>
    </div>
  </div>
</template>
