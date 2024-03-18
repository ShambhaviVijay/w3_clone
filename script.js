function runDemo() {
    var htmlCode = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <!-- Your HTML code goes here -->
                    </body>
                    </html>`;

    // Get the code block element
    var codeBlock = document.getElementById('codeContent');

    // Set the inner text of the code block to the HTML code
    codeBlock.innerText = htmlCode;
}
