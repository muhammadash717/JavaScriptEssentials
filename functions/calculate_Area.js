function calculateArea () {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    
    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
};