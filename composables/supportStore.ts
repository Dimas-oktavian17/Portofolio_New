import type { MediumProps } from '~/types/support';

export const supportStore = () => {
    const supportCta = useState<MediumProps[]>("support", () => [
        {
            id: 2,
            title: "Medium",
            style:
                "rounded flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60",
            link: `https://medium.com/@dimas.ooktavian.17`,
            icon: "mdi:medium",
            iconS: `text-[#8C007E]/80 dark:text-[#ECEDEE]`,
        },
        {
            id: 1,
            title: "linkendin",
            style:
                "rounded flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#F0D6FF] to-[#D3CDFF] text-[#5C1BAE]/80 dark:text-[#ECEDEE] dark:from-[#FF2497]  dark:to-[#8D2DE3] transition-all duration-500 hover:opacity-60",
            link: `https://www.linkedin.com/in/dimas-oktavian/`,
            icon: "mdi:linkedin",
            iconS: `text-[#5C1BAE]/80 dark:text-[#ECEDEE]`,
        },

    ]);
    const supportBtn = useState<MediumProps[]>("support-btn", () => [
        {
            id: 1,
            title: "Work Experience",
            style: "rounded max-w-xs flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60",
            icon: "material-symbols:home-work-outline",
            iconS: `text-[#5C1BAE]/80 dark:text-[#ECEDEE]`,
        },
        {
            id: 2,
            title: "Education Experience",
            style:"rounded max-w-xs flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60",
            icon: "mdi:school",
            iconS: `text-[#8C007E]/80 dark:text-[#ECEDEE]`,
        },
    ]);
    const toogle = ref<string>("Work Experience"); // default value
    const setToogle = (value: string) => {
        toogle.value = value;
    };
    const realtToggle = computed(() => toogle.value === "Work Experience");

    // Return the state, getters, and actions
    return {
        // State
        supportCta,
        supportBtn,
        toogle,
        realtToggle,
        // Actions
        setToogle,
    };
};