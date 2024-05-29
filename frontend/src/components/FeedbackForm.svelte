<script>
  export let pictureId;
  export let loadPicture;

  let feedbackText = "";
  let isSubmitting = false;

  $: pictureId;

  async function sendFeedback(event) {
    event.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    isSubmitting = true;

    try {
      const response = await fetch("/feedback/" + pictureId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: feedbackText }),
      });

      if (!response.ok) {
        alert("Es ist ein Fehler aufgetreten");
        throw new Error("Error");
      }

      const responseData = await response.json();
      pictureId = responseData.pictureId;
      loadPicture(event);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      isSubmitting = false;
      feedbackText = "";
    }
  }
</script>

<h1>Feedback Form</h1>
<form>
  <input type="text" bind:value={feedbackText} required />
  <button on:click={sendFeedback} disabled={isSubmitting}
    >Feedback senden</button
  >
</form>
