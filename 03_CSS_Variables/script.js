/* It give us a NodeList which is != than an array. We could, however, converte */
const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    // console.log(this.dataset) -> allow us to create HTML tag attributes
    // they must have the prefix: "data-" (in this case: data-sizing)
    // (OR is needed because the color input has no data-sizing)
    const suffix = this.dataset.sizing || '';

    // I can edit :root CSS using document.documentElement
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
