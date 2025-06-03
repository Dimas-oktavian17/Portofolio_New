import { defineNuxtPlugin } from '#app'

// export default defineNuxtPlugin(() => {
//     return {
//         provide: {
//             formatDate: (dateStr) => (dateStr ? Intl.DateTimeFormat('us-EN', { dateStyle: 'full' }).format(new Date(dateStr)) : undefined)
//         }
//     };
// });
// import { defineNuxtPlugin } from 'nuxt';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate: (dateStr:any) =>
        dateStr
          ? new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
              new Date(dateStr)
            )
          : undefined,
    },
  };
});
