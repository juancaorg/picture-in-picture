const VIDEO_ELEMENT = document.getElementById("video");
const BUTTON = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play it.
async function selectMediaStream() {
	try {
		const MEDIA_STREAM = await navigator.mediaDevices.getDisplayMedia();
		VIDEO_ELEMENT.srcObject = MEDIA_STREAM;
		VIDEO_ELEMENT.onloadedmetadata = () => {
			VIDEO_ELEMENT.play();
		};
	} catch(error) {
		console.log(`We have encountered an error: ${error}`);
	}
}

BUTTON.addEventListener("click", async () => {
	// Disable the button.
	BUTTON.disable = true;

	// Start Picture in Picture.
	await VIDEO_ELEMENT.requestPictureInPicture();

	// Reset the button.
	BUTTON.disable = false;
});

// On load.
selectMediaStream();