<template>
  <main>
    <section class="bg-white p-10 m-10 rounded-[20px]">
      <div class="flex items-center gap-5">
        <h1 class="text-[32px]">Contact information</h1>
        <img v-if="!store.edit" @click="store.edit = true" class="cursor-pointer" src="@/assets/svg/edit.svg" alt="" />
        <img v-else @click="store.edit = false" class="cursor-pointer mt-2" src="@/assets/svg/edit_save.svg" alt="" />
      </div>
      <ul v-if="!store.edit" class="space-y-10 py-10">
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/phone.svg" alt="" />
            Phone
          </h1>
          <div class="space-y-2">
            <p>+123 456 789 101</p>
            <p>+321 101 987 654</p>
          </div>
        </li>
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/email.svg" alt="" />
            E-mail
          </h1>
          <div class="space-y-2">
            <p>contact@localbiz.com</p>
          </div>
        </li>
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/connect.svg" alt="" />
            Connect with
          </h1>
          <div class="flex items-center gap-2">
            <img src="@/assets/contact/instagram.svg" alt="" />
            <img src="@/assets/contact/twitter.svg" alt="" />
          </div>
        </li>
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/location.svg" alt="" />
            Address
          </h1>
          <div class="space-y-2">
            <p>123 Main Street San Francisco, CA 94103</p>
          </div>
        </li>
      </ul>
      <ul v-else class="space-y-10 py-10">
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/phone.svg" alt="" />
            Phone
          </h1>
          <div class="space-y-2">
            <input
              class="bg-transparent block border-b-2 border-black p-0 rounded-none"
              type="tel"
              placeholder="Phone"
            />
            <input
              class="bg-transparent block border-b-2 border-black p-0 rounded-none"
              type="tel"
              placeholder="Phone"
            />
          </div>
        </li>
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/email.svg" alt="" />
            E-mail
          </h1>
          <div class="space-y-2">
            <input
              class="bg-transparent border-b-2 border-black p-0 rounded-none"
              type="email"
              placeholder="E-mail"
            />
          </div>
        </li>
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/connect.svg" alt="" />
            Connect with
          </h1>
          <div class="space-y-2">
            <p class="flex items-center gap-2">
              <img src="@/assets/contact/instagram.svg" alt="" />
              <input
                class="w-1/2 bg-transparent border-b-2 border-black p-0 rounded-none"
                type="text"
                placeholder="Instagram"
              />
            </p>
            <p class="flex items-center gap-2">
              <img src="@/assets/contact/twitter.svg" alt="" />
              <input
                class="w-1/2 bg-transparent border-b-2 border-black p-0 rounded-none"
                type="text"
                placeholder="Twitter"
              />
            </p>
          </div>
        </li>
        <li class="text-lg space-y-5">
          <h1 class="flex items-center gap-2 text-[#B1B1B1]">
            <img src="@/assets/contact/location.svg" alt="" />
            Address
          </h1>
          <div class="space-y-2">
            <input
              class="bg-transparent border-b-2 border-black p-0 rounded-none"
              type="text"
              placeholder="Address"
            />
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
const store = reactive({
    edit: false,
})
</script>

<style lang="scss" scoped></style>
