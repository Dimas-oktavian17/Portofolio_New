<script>
// import email js & vee-validation
import emailjs from "@emailjs/browser";
// import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  // components: {
  //   Form,
  //   Field,
  //   ErrorMessage,
  // },

  setup() {
    //  v-model form
    let name = ref("");
    let email = ref("");
    let msg = ref("");

    const sendEmail = (e) => {
      try {
        emailjs.sendForm(
          "service_rgvnvgg",
          "template_vz0kpml",
          e.target,
          "Hv8LRxk1X5ZHFsgA7",
          {
            name: name,
            email: email,
            msg: msg,
          }
        );
        alert("sukses");
        e.target.reset();
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
    };
    return {
      name,
      email,
      msg,
      sendEmail,
      // regex,
      // validateEmail,
    };
  },
};
</script>
<template>
  <div
    class="flex flex-col-reverse items-center justify-center pt-64 lg:flex-row-reverse lg:justify-center"
  >
    <FormKit
      type="form"
      submit-label="Send message"
      @submit="sendEmail"
      :classes="{
        outer: 'mb-2',
        inner: 'w-full lg:w-1/2 max-w-xs space-y-6',
      }"
    >
      <h1
        class="mb-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DC79FF] to-[#256BFA]"
      >
        Send message
      </h1>
      <div>
        <!-- result -->
        <!-- name -->
        <!-- <label
          for="text"
          class="block mb-2 text-sm font-medium text-primary dark:text-secondary/70"
        >
          Your name
        </label> -->
        <FormKit
          label="Your name"
          required
          validation="required|length:3|matches:/^[a-zA-Z ]+$/"
          v-model="name"
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
        <!-- <label
          for="email"
          class="block mb-2 text-sm font-medium text-primary dark:text-secondary/70"
        >
          Your email
        </label> -->
        <FormKit
          required
          label="Your email"
          v-model="email"
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
      <!-- text area -->
      <!-- <label
        for="message"
        class="block mb-2 text-sm font-medium text-primary dark:text-secondary/70"
      >
        Your message
      </label> -->
      <FormKit
        label="Your message"
        type="textarea"
        required
        v-model="msg"
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

      <!-- <button
        type="submit"
        value="Send"
        class="w-full gradientForm hover:scale-95 rounded-lg text-base px-5 py-2.5 text-center transition-all duration-500 mt-4 text-black dark:text-secondary/70"
      >
        Send message
      </button> -->
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
