// JAVA ADD ACTIVE CLASS TO BUTTON WHEN CLICKED
// JAVA ADD ACTIVE CLASS TO SHARE-CONTAINER WHEN BUTTON IS CLICKED

const shareButton = document.querySelector(".share-button");
const shareButtonMobile = document.querySelector(".share-button-mobile");
const shareContainer = document.querySelector(".share-container");
const shareContainerMobile = document.querySelector(".share-container-mobile");
const previewFooter = document.querySelector(".preview-footer");

function handleShareClick() {
    if(shareButton.classList.contains("active")) {
        shareButton.classList.toggle("active");
        shareButtonMobile.classList.toggle("active");
        shareContainer.classList.toggle("active");
        shareContainerMobile.classList.toggle("active");
        previewFooter.classList.toggle("active");
    }
    else {
        shareButton.classList.add("active");
        shareButtonMobile.classList.add("active");
        shareContainer.classList.add("active");
        shareContainerMobile.classList.add("active");
        previewFooter.classList.add("active");
    }
}

shareButton.addEventListener("click", () => {
    handleShareClick();
});

shareButtonMobile.addEventListener("click", () => {
    handleShareClick();
});
