<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <div class="">
    <div class="mb-10">
      <h1 class="text-2xl text-[#212529]">Signup</h1>
      <p class="text-gray-800">Enter your details below to create your account</p>
    </div>

    <div>
      <Form v-slot="{ processing, errors }" route="new_account.store">
        <div>
          <label for="fullName" class="text-[#212529]!">Full name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            :data-invalid="errors.fullName ? 'true' : undefined"
          />
          <div v-if="errors.fullName">{{ errors.fullName }}</div>
        </div>

        <div>
          <label for="email" class="text-[#212529]!">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autocomplete="email"
            :data-invalid="errors.email ? 'true' : undefined"
          />
          <div v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div>
          <label for="password" class="text-[#212529]!">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autocomplete="new-password"
            :data-invalid="errors.password ? 'true' : undefined"
          />
          <div v-if="errors.password">{{ errors.password }}</div>
        </div>

        <div>
          <label for="passwordConfirmation" class="text-[#212529]!">Confirm password</label>
          <input
            id="passwordConfirmation"
            type="password"
            name="passwordConfirmation"
            autocomplete="new-password"
            :data-invalid="errors.passwordConfirmation ? 'true' : undefined"
          />
          <div v-if="errors.passwordConfirmation">{{ errors.passwordConfirmation }}</div>
        </div>

        <div>
          <button type="submit" class="text-[#212529]! w-full hover:bg-gray-400!" :disabled="processing">Sign up</button>
        </div>
      </Form>
    </div>
  </div>
</template>
