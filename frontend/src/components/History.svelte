<script>
  import { onMount } from "svelte";
  let requests = [];

  async function fetchRequests() {
    try {
      const response = await fetch("/history");
      if (response.ok) {
        const data = await response.json();
        requests = JSON.parse(data);
        for (let i = 0; i < requests.length; i++) {
          await loadPicture(requests[i].pictureId, i);
        }
        console.log(requests[0]);
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

  onMount(async () => {
    await fetchRequests();
  });
</script>

<h1>History</h1>
<ul>
  {#each requests as request, index}
    <li>
      <p>
        <strong>Created:</strong>
        {new Date(request.created).toLocaleString()}
      </p>
      <p><strong>Prompt:</strong> {request.prompt}</p>
      <p><strong>Picture ID:</strong> {request.pictureId}</p>
      <p><strong>Original Data:</strong></p>
      <ul>
        <li>
          <strong>Brightness: </strong>
          <p>{request.originalData.brightness}</p>
        </li>
        <li>
          <strong>Latitude: </strong>
          <p>{request.originalData.latitude}</p>
        </li>
        <li>
          <strong>Longitude: </strong>
          <p>{request.originalData.longitude}</p>
        </li>
        <li>
          <strong>Temperature: </strong>
          <p>{request.originalData.temperature}°C</p>
        </li>
        <li>
          <strong>Population Density: </strong>
          <p>{request.originalData.population}</p>
        </li>
        <li>
          <strong>Color Scheme: </strong>
          <p>{request.originalData.colorscheme}</p>
        </li>
        <li>
          <strong>Style: </strong>
          <p>{request.originalData.style}</p>
        </li>
      </ul>
      {#if request.imageUrl}
        <img src={request.imageUrl} alt="Picture" class="thumbnail" />
      {:else}
        <p>No image available.</p>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .thumbnail {
    width: auto; /* Adjust the width as needed */
    height: 450px; /* Maintain the aspect ratio */
  }
</style>
