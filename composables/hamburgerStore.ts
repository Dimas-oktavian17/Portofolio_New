export const hamburgerStore = () => {
    const showGrid = ref<boolean>(false);
    const isVideo = ref<boolean>(false)
    const setGrid = () => showGrid.value = !showGrid.value;
    
    const setVideo = (value?: boolean) => {
        if (value !== undefined) {
            isVideo.value = value;
        } else {
            isVideo.value = !isVideo.value;
        }
      }
    // Return the state, getters, and actions
    return {
        // State
        showGrid,
        isVideo,
        // Actions
        setGrid,
        setVideo
    };
};