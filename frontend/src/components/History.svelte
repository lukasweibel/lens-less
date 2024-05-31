<script>
    import { onMount } from "svelte";
    let requests = [];

    async function fetchRequests() {
        try {
            const response = await fetch("http://127.0.0.1:5000/history");
            if (response.ok) {
                requests = await response.json();
            } else {
                console.error("Failed to fetch requests.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    onMount(async () => {
        alert("Hallo");
        await fetchRequests();
    });
</script>

<h1>History</h1>
<ul>
    {#each requests as request}
        <li>
            <p><strong>ID:</strong> {request._id}</p>
            <p><strong>Created:</strong> {new Date(request.created).toLocaleString()}</p>
            <p><strong>Prompt:</strong> {request.prompt}</p>
            <p><strong>Picture ID:</strong> {request.pictureId}</p>
            <p><strong>Original Data:</strong></p>
            <ul>
                <li>Latitude: {request.originalData.latitude}</li>
                <li>Longitude: {request.originalData.longitude}</li>
                <li>Temperature: {request.originalData.temperature}°C</li>
                <li>Brightness: {request.originalData.brightness}</li>
                <li>Population: {request.originalData.population}</li>
                <li>Color Scheme: {request.originalData.colorscheme}</li>
                <li>Style: {request.originalData.style}</li>
            </ul>
        </li>
    {/each}
</ul>