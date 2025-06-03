
import type { ProjectData } from '~/types/stepper';

export const galleryStore = () => {
    const route = useRouter();
    const showModal = ref<boolean>(false);
    const currentModalProject = ref<ProjectData | null>(null);
    const toogle = ref<string>("Work Experience"); // default value

    const setToogle = (value: string) => {
        toogle.value = value;
    };
    const realtToggle = computed(() => toogle.value === "Work Experience");

    // Modal Actions
    function openProjectModal(project: ProjectData) {
        currentModalProject.value = project;
        showModal.value = true;
    }
    function closeModal(routeName: string) {
        showModal.value = false;
        currentModalProject.value = null; // Clear the project data when closed  
        route.push({name: routeName})
    }
    // Return the state, getters, and actions
    return {
        // State
        showModal,
        currentModalProject,
        toogle,
        realtToggle,
        // Actions
        setToogle,
        openProjectModal,
        closeModal
    };
};