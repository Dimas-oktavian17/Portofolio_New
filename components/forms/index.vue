<script setup>
import { reset } from "@formkit/core";
const loading = ref(false)
const loadingError = ref(false)
const config = useRuntimeConfig()
const form = ref("");
const WEB3FORMS_ACCESS_KEY = config.public.api_form

const AlertSucces = () => {
  reset("name");
  reset("email");
  reset("msg");

}
async function sendEmail(value) {
  loading.value = true
  try {
    const response = await $fetch(config.public.api_post, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        form: [[value.name], [value.email], [value.msg]],
      }),
    });
    const result = await response.data["_rawValue"]
    if (result === "Email sent successfully!") return loadingError.value = true
  } catch (err) {
    console.warn(err);
  } finally {
    loading.value = false;
    loadingError.value = false;
    AlertSucces()
  }
}

</script>

<template>
  <div class="flex flex-col-reverse items-center justify-center pt-64 lg:flex-row-reverse lg:justify-center">

    <!-- form parent -->
    <FormKit id="myForm" ref="form" type="form" submit-label="Send message" @submit="sendEmail" :classes="{
      outer: 'mb-2 py-4 bg-red-100',
      inner: 'py-4 bg-red-100 w-full lg:w-1/2 max-w-xs space-y-6',
      input: 'py-4 bg-red-100'
    }">
      <!-- title form -->
      <h1 class="mb-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DC79FF] to-[#256BFA]">
        Send message
      </h1>
      <h6 v-if="loading" class="py-2 text-lg text-green-500 transition-all">Message Send Succes Succesfully</h6>
      <h6 v-if="loadingError" class="py-2 text-lg text-red-500 transition-all">Message Failed To Send</h6>
      <div>
        <!-- name -->
        <FormKit id="name" label="Your name" required validation="required|length:3|matches:/^[a-zA-Z ]+$/" type="text"
          name="name" placeholder="Oktaa" validation-visibility="live" :classes="{
      outer: 'mb-2',
      label:
        'block mb-2 text-sm font-medium text-[#22242C] dark:text-[#ECEDEE]/70',
      inner: 'focus:outline-1',
      input:
        'normal-case dark:text-[#ECEDEE]/70 text-sm rounded-lg block gradientForm w-full p-2.5',
    }" />
      </div>
      <!-- email -->
      <div>
        <FormKit id="email" required label="Your email" type="email" name="email" placeholder="Okta@gmail.com"
          validation="required|email|ends_with:.com" validation-visibility="live" :classes="{
      outer: 'mb-2',
      label:
        'block mb-2 text-sm font-medium text-[#22242C] dark:text-[#ECEDEE]/70',
      inner: 'focus:outline-1',
      input:
        'normal-case dark:text-[#ECEDEE]/70 text-sm rounded-lg block gradientForm w-full p-2.5',
    }" />
      </div>
      <!-- message -->
      <FormKit id="msg" label="Your message" type="textarea" required name="msg" rows="4"
        placeholder="Leave a message..." validation="required|length:5" validation-visibility="live" :classes="{
      label:
        'block mb-2 text-sm font-medium text-[#22242C] dark:text-[#ECEDEE]/70',
      inner: 'focus:outline-1',
      input:
        'normal-case dark:text-[#ECEDEE]/70 text-sm rounded-lg block gradientForm w-full p-2.5',
    }" />
      <!-- <FormKit label="Send message" type="submit" value="Send" :classes="{
        input:
          'w-full gradientForm hover:scale-95 rounded-lg text-base px-5 py-2.5 text-center transition-all duration-500 mt-4 text-black dark:text-[#ECEDEE]/70',
      }" /> -->
    </FormKit>

    <picture class="w-full max-w-xs lg:w-1/2">
      <nuxt-img alt="message" loading="lazy" format="webp" provider="cloudinary"
        src="/v1681986620/portofolio/email.png" />
    </picture>
  </div>
</template>
