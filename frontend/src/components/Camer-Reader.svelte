<script>
  import { onMount, onDestroy } from "svelte";

  let videoElement;
  let canvas, context;
  let brightnessDisplay;
  let animationFrameId;
  let brightnessHistory = []; // Array to store history of brightness values

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      videoElement.srcObject = stream;
      videoElement.play();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  }

  function processFrame() {
    if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      let avgBrightness = calculateAverageBrightness(imageData);
      brightnessDisplay.textContent = `Average Brightness: ${avgBrightness.toFixed(2)}`;
      brightnessHistory.push(avgBrightness); // Store the brightness value
      animationFrameId = requestAnimationFrame(processFrame);
    }
  }

  function calculateAverageBrightness(imageData) {
    let totalBrightness = 0;
    let totalPixels = imageData.data.length / 4; // Each pixel has 4 parts: R, G, B, A
    for (let i = 0; i < imageData.data.length; i += 4) {
      let luminance =
        0.299 * imageData.data[i] +
        0.587 * imageData.data[i + 1] +
        0.114 * imageData.data[i + 2];
      totalBrightness += luminance;
    }
    return totalBrightness / totalPixels; // Average brightness
  }

  onMount(() => {
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = 640;
    canvas.height = 480;
    document.body.appendChild(canvas);
    brightnessDisplay = document.querySelector("#brightness");
    startCamera();
  });

  onDestroy(() => {
    if (videoElement && videoElement.srcObject) {
      videoElement.srcObject.getTracks().forEach((track) => track.stop());
      videoElement.srcObject = null;
    }
    if (canvas) {
      document.body.removeChild(canvas);
    }
    cancelAnimationFrame(animationFrameId);
  });
</script>

<h1>Camera</h1>
<video bind:this={videoElement} autoplay playsinline style="display: none;"
></video>
<p id="brightness">Average Brightness: 0.00</p>
