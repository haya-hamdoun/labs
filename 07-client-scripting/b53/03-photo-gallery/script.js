document.addEventListener("DOMContentLoaded", async function () {
  // const photos = [];

  async function addPhoto() {
    const res = await fetch("https://picsum.photos/480");
    let photo;
    if (res.ok) {
      photo = await res.blob();
    }
    // photos.push(photo);

    const img = document.createElement("img");
    img.src = URL.createObjectURL(photo);
    img.addEventListener("click", function () {
      // document.querySelector("#gallery").removeChild(img);
      img.parentNode.removeChild(img);
    });
    document.querySelector("#gallery").appendChild(img);
  }

  document.querySelector("#add-photo").addEventListener("click", addPhoto);
});
