const input = document.getElementById("file-input");
const button = document.getElementById("tombol");
const image = document.getElementById("file-preview");
const hasil = document.getElementById("hasil");

const process = (idx, confidence) => {
  const label = [
    "cacar air",
    "cacar ular",
    "impetigo",
    "infeksi cacing tambang",
    "jamur kuku",
    "kurap",
    "kutu air",
    "selulitis",
  ];
  if (confidence > 0.94) {
    return [label[idx], confidence];
  } else {
    return ["tidak dapat dikenali", confidence];
  }
};
const main = async () => {
  const model = await tf.loadGraphModel("model.json");
  const img = tf.browser
    .fromPixels(image, 3) // imageElement, videoElement, ImageData
    .toFloat()
    .resizeBilinear([150, 150]) // mobilenet dims
    .div(tf.scalar(255)) // mobilenet [0,1] normalization
    .expandDims();
  const { values, indices } = model.predict(img).topk();
  const label = indices.dataSync()[0];
  const confidence = values.dataSync()[0];
  console.log(label, confidence);
  if (label) {
    const [lab, conf] = process(label, confidence);
    console.log(lab, conf);
    hasil.innerHTML = `<h5 class="blockquote">Classification Result :</h5>
              <div>Classification Label : <b>${lab}</b></div>
              <div>Classification Confidence : <b>${conf}</b></div>`;
    hasil.style.display = "block";
  }
};

const previewPhoto = () => {
  const file = input.files;
  if (file) {
    const fileReader = new FileReader();
    const preview = document.getElementById("file-preview");
    fileReader.onload = (event) => {
      preview.setAttribute("src", event.target.result);
    };
    fileReader.readAsDataURL(file[0]);
    hasil.style.display = "none";
  }
};
input.addEventListener("change", previewPhoto);
button.addEventListener("click", main);
