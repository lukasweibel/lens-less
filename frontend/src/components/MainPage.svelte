<!-- MainPage.svelte -->
<script>
  import { onMount } from "svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";

  let imageUrl = "";
  let pictureId;

  function loadPicture(event) {
    event.preventDefault();

    fetch("/picture/" + pictureId)
      .then((response) => {
        if (!response.ok) {
          alert("Kein Bild verfügbar mit dieser Nummer!");
          throw new Error("No picture found: " + response.statusText);
        }
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
  <form>
    <input type="number" bind:value={pictureId} />
    <button on:click={loadPicture}>Foto anzeigen</button>
  </form>
  {#if imageUrl}
    <FeedbackForm bind:pictureId {loadPicture}></FeedbackForm>
    <div class="image-container">
      <img src={imageUrl} alt="Fetched Image" class="fetched-image" />
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    flex-shrink: 0;
  }

  input,
  button {
    max-width: 200px;
    width: 100%;
    padding: 8px;
    margin: 5px auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input:focus,
  button:focus {
    border-color: #0056b3;
    outline: none;
  }

  button {
    background-color: #0056b3;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #003875;
  }

  .image-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img.fetched-image {
    max-width: 100%;
    max-height: 90%;
    height: auto;
    width: auto;
    border-radius: 4px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    display: block;
  }
</style>
