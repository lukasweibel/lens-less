<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import CamerReader from "./components/Camer-Reader.svelte";

  let imageUrl = "";
  let responseMessage = '';
  let uploadStatus = '';
  let downloadLink = '';
  let file;
  let pictureId; 
  let sensorData = {
    latitude: 40.748817, // Beispielwert
    longitude: -73.985428, // Beispielwert
    temperature: 25, // Beispielwert
    brightness: 3, // Beispielwert (0-5)
    population: 4, // Beispielwert (0-5)
    colorscheme: "colourfull", // Beispielwert (blackwhite, colourfull)
    style: "realistic" // Beispielwert (realistic, futuristic, vintage, drawing)
  };

  async function generateImage() {
    const response = await fetch('http://127.0.0.1:5000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sensorData)
    });
    if (response.ok) {
      const data = await response.json();
      if (data.status === "success") {
        pictureId = data.picture_id; 
        imageUrl = `http://127.0.0.1:5000/picture/${pictureId}`;
        responseMessage = "Image generated successfully!";
      } else {
        responseMessage = data.message || "Failed to generate image.";
      }
    } else {
      const data = await response.json();
      responseMessage = data.message || "Failed to generate image.";
    }
  }

  async function uploadPicture() {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://127.0.0.1:5000/picture', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      const data = await response.json();
      uploadStatus = data.status;
      if (data.status === "success") {
        pictureId = data.picture_id; 
        imageUrl = `http://127.0.0.1:5000/picture/${data.picture_id}`;
      }
    } else {
      uploadStatus = "Upload failed.";
    }
  }

  async function downloadPicture() {
    const response = await fetch('http://127.0.0.1:5000/picture', {
      method: 'GET'
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      downloadLink = url;
    }
  }

  function loadPicture(event) {
    event.preventDefault();

    fetch("/picture/" + pictureId)
      .then((response) => {
        if (!response.ok) {
          alert("Kein Bild verfügbar mit dieser Nummer!");
          throw new Error("No picture found: " + response.statusText);
        }
        console.log(response);
        return response.blob();
      })
      .then((blob) => {
        imageUrl = URL.createObjectURL(blob);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
</script>

<main>
  <Header></Header>
  <CamerReader></CamerReader>
  <form>
    <input type="number" bind:value={pictureId} />
    <button on:click={loadPicture}>Foto anzeigen</button>
  </form>
  {#if imageUrl}
    <img src={imageUrl} alt="Fetched Image" style="height: 200px; width: 300px;" />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 2em;
    max-width: 320px;
    margin: 30px auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,
  button {
    width: calc(100% - 20px); /* Adjust width to fit inside the form padding */
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
  }

  input:focus,
  button:focus {
    border-color: #007bff;
    outline: none; /* Removes the default outline and replaces it with a border color change */
  }

  button {
    background-color: #007bff;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    color: #28a745;
    margin-top: 20px;
  }

  img {
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
</style>