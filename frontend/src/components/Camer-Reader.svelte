<script>
  import { onMount, onDestroy } from "svelte";

  let videoElement;

  // Function to start the camera
  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoElement) {
        videoElement.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  }

  // Start the camera when the component mounts
  onMount(() => {
    startCamera();
  });

  // Cleanup the stream when the component is destroyed
  onDestroy(() => {
    if (videoElement && videoElement.srcObject) {
      videoElement.srcObject.getTracks().forEach((track) => track.stop());
    }
  });
</script>

<h1>Camera</h1>
<video bind:this={videoElement} autoplay playsinline></video>
