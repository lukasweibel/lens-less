<script>
  import { onMount } from "svelte";
  let requests = [];
  let fullscreenImageUrl = null;

  async function fetchRequests() {
    try {
      const response = await fetch("/history");
      if (response.ok) {
        const data = await response.json();
        requests = JSON.parse(data);
        for (let i = 0; i < requests.length; i++) {
          await loadPicture(requests[i].pictureId, i);
        }
      } else {
        console.error("Failed to fetch requests.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function loadPicture(pictureId, index) {
    try {
      const response = await fetch("/picture/" + pictureId);
      if (!response.ok) {
        throw new Error("No picture found: " + response.statusText);
      }
      const blob = await response.blob();
      requests[index].imageUrl = URL.createObjectURL(blob);
    } catch (error) {
      console.error("Fetch error:", error);
      requests[index].imageUrl = null;
    }
  }

  function openFullscreen(imageUrl) {
    fullscreenImageUrl = imageUrl;
  }

  function closeFullscreen() {
    fullscreenImageUrl = null;
  }

  onMount(async () => {
    await fetchRequests();
  });
</script>

<h1>History</h1>
<ul class="history-list">
  {#each requests as request, index}
    <li class="history-item">
      <div class="request-info">
        <p>
          <strong>Created:</strong>
          {new Date(request.created).toLocaleString()}
        </p>
        <p><strong>Prompt:</strong> {request.prompt}</p>
        <p><strong>Picture ID:</strong> {request.pictureId}</p>
        <details>
          <summary><strong>Original Data:</strong></summary>
          <ul>
            <li>
              <strong>Brightness: </strong>{request.originalData.brightness}
            </li>
            <li><strong>Latitude: </strong>{request.originalData.latitude}</li>
            <li>
              <strong>Longitude: </strong>{request.originalData.longitude}
            </li>
            <li>
              <strong>Temperature: </strong>{request.originalData.temperature}°C
            </li>
            <li>
              <strong>Population Density: </strong>{request.originalData
                .population}
            </li>
            <li>
              <strong>Color Scheme: </strong>{request.originalData.colorscheme}
            </li>
            <li><strong>Style: </strong>{request.originalData.style}</li>
          </ul>
        </details>
      </div>
      <div class="image-container">
        {#if request.imageUrl}
          <img
            src={request.imageUrl}
            alt={`Image generated from prompt: ${request.prompt}`}
            class="thumbnail"
            on:click={() => openFullscreen(request.imageUrl)}
          />
        {:else}
          <p>No image available.</p>
        {/if}
      </div>
    </li>
  {/each}
</ul>

{#if fullscreenImageUrl}
  <div class="fullscreen-overlay" on:click={closeFullscreen}>
    <img
      src={fullscreenImageUrl}
      alt="Fullscreen image"
      class="fullscreen-image"
    />
  </div>
{/if}

<style>
  .history-list {
    list-style-type: none;
    padding: 0;
  }

  .history-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .history-item:hover {
    transform: scale(1.02);
  }

  .request-info {
    flex: 1;
  }

  .image-container {
    margin-left: 20px;
  }

  .thumbnail {
    width: 150px;
    height: auto;
    border-radius: 4px;
    cursor: pointer;
  }

  .thumbnail:hover {
    opacity: 0.8;
  }

  details summary {
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }

  details summary:hover {
    color: #007bff;
  }

  .fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .fullscreen-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
  }
</style>
