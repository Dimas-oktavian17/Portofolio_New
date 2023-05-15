<script>
import Swal from "sweetalert2";
import { reset } from "@formkit/core";

export default {
  setup() {
    const form = ref("");
    const WEB3FORMS_ACCESS_KEY = `7886fbe6-943b-46af-8d97-ec0f2dd7619e`;
    async function sendEmail(value) {
      const response = await useFetch("https://api.web3forms.com/submit", {
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
      // console.log(response);

      const result = await response.data["_rawValue"].message;
      if (result === "Email sent successfully!") {
        Swal.fire("Thank you!", "Email sent successfully!", "success");
        reset("myForm", "");
      } else {
        Swal.fire("Sorry!", "Email not sent successfully!", "error");
      }
      //   return result === "Email sent successfully!"
      //     ? Swal.fire("Thank you!", "Email sent successfully!", "success")
      //     : Swal.fire("Sorry!", "Email not sent successfully!", "error");
    }
    return {
      form,
      sendEmail,
    };
  },
};
</script>
<template>
  <div
    class="flex flex-col-reverse items-center justify-center pt-64 lg:flex-row-reverse lg:justify-center"
  >
    <!-- form parent -->
    <FormKit
      id="myForm"
      ref="form"
      type="form"
      submit-label="Send message"
      @submit="sendEmail"
      :classes="{
        outer: 'mb-2',
        inner: 'w-full lg:w-1/2 max-w-xs space-y-6',
      }"
    >
      <!-- title form -->
      <h1
        class="mb-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DC79FF] to-[#256BFA]"
      >
        Send message
      </h1>
      <div>
        <!-- name -->
        <FormKit
          label="Your name"
          required
          validation="required|length:3|matches:/^[a-zA-Z ]+$/"
          type="text"
          name="name"
          placeholder="Oktaa"
          validation-visibility="live"
          :classes="{
            outer: 'mb-2',
            label:
              'block mb-2 text-sm font-medium text-primary dark:text-secondary/70',
            inner: 'focus:outline-1',
            input:
              'normal-case dark:text-secondary/70 text-sm rounded-lg block gradientForm w-full p-2.5',
          }"
        />
      </div>
      <!-- email -->
      <div>
        <FormKit
          required
          label="Your email"
          type="email"
          name="email"
          placeholder="Okta@gmail.com"
          validation="required|email|ends_with:.com"
          validation-visibility="live"
          :classes="{
            outer: 'mb-2',
            label:
              'block mb-2 text-sm font-medium text-primary dark:text-secondary/70',
            inner: 'focus:outline-1',
            input:
              'normal-case dark:text-secondary/70 text-sm rounded-lg block gradientForm w-full p-2.5',
          }"
        />
      </div>
      <!-- message -->
      <FormKit
        label="Your message"
        type="textarea"
        required
        name="msg"
        rows="4"
        placeholder="Leave a message..."
        validation="required|length:5"
        validation-visibility="live"
        :classes="{
          label:
            'block mb-2 text-sm font-medium text-primary dark:text-secondary/70',
          inner: 'focus:outline-1',
          input:
            'normal-case dark:text-secondary/70 text-sm rounded-lg block gradientForm w-full p-2.5',
        }"
      />
      <!-- <FormKit
        label="Send message"
        type="submit"
        value="Send"
        :classes="{
          input:
            'w-full gradientForm hover:scale-95 rounded-lg text-base px-5 py-2.5 text-center transition-all duration-500 mt-4 text-black dark:text-secondary/70',
        }"
      /> -->
    </FormKit>

    <picture class="w-full max-w-xs lg:w-1/2">
      <nuxt-img
        alt="message"
        loading="lazy"
        format="webp"
        provider="cloudinary"
        src="/v1681986620/portofolio/email.png"
      />
    </picture>
  </div>
</template>
