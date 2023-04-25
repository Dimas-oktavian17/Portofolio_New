<script>
import emailjs from "@emailjs/browser";
export default {
  setup() {
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
    };
  },
};
</script>
<template>
  <div
    class="flex flex-col-reverse items-center justify-center pt-64 lg:flex-row-reverse lg:justify-center"
  >
    <form
      class="w-full max-w-xs space-y-6 lg:w-1/2"
      @submit.prevent="sendEmail"
    >
      <h1
        class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DC79FF] to-[#256BFA]"
      >
        Send message
      </h1>
      <div>
        <!-- result -->
        <!-- name -->
        <label
          for="text"
          class="block mb-2 text-sm font-medium text-primary dark:text-secondary/70"
        >
          Your name
        </label>
        <input
          required
          v-model="name"
          type="text"
          name="name"
          class="dark:text-secondary/70 text-sm rounded-lg focus:outline-1 capitalize gradientForm block w-full p-2.5"
          placeholder="Oktaa"
        />
      </div>
      <!-- email -->
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-primary dark:text-secondary/70"
        >
          Your email
        </label>
        <input
          required
          v-model="email"
          type="email"
          name="email"
          placeholder="Okta@gmail.com"
          class="normal-case dark:text-secondary/70 text-sm rounded-lg focus:outline-1 gradientForm block w-full p-2.5"
        />
      </div>
      <!-- text area -->
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-primary dark:text-secondary/70"
      >
        Your message
      </label>
      <textarea
        required
        v-model="msg"
        name="msg"
        rows="4"
        class="normal-case dark:text-secondary/70 text-sm rounded-lg focus:outline-1 gradientForm block w-full p-2.5"
        placeholder="Leave a message..."
      ></textarea>
      <button
        type="submit"
        value="Send"
        class="w-full gradientForm hover:scale-95 rounded-lg text-base px-5 py-2.5 text-center transition-all duration-500 mt-4 text-black dark:text-secondary/70"
      >
        Send message
      </button>
    </form>
    <picture class="w-full max-w-xs lg:w-1/2">
      <nuxt-img
        loading="lazy"
        format="webp"
        provider="cloudinary"
        src="/v1681986620/portofolio/email.png"
      />
    </picture>
  </div>
</template>
