// URL of the raw file in the GitHub repository
let url = "https://raw.githubusercontent.com/pellestor/Test-iOS-GitHub/main/hello-world.js";

// Create a new request to fetch the content
let req = new Request(url);

// Fetch the content of the file
let scriptContent = await req.loadString();

// Define the HTML content with "Hello, World!"
let htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <pre>${scriptContent}</pre>
</body>
</html>
`;

// Encode the HTML content as a data URL
let dataURL = `data:text/html,${encodeURIComponent(htmlContent)}`;

// Open the data URL in Safari
Safari.open(dataURL);
