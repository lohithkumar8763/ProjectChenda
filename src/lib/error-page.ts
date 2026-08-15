export function renderErrorPage(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Something went wrong</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      color: #222;
    }

    .error-container {
      max-width: 500px;
      padding: 40px;
      text-align: center;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 32px;
      margin-bottom: 12px;
    }

    p {
      color: #666;
      line-height: 1.6;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      background: #222;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <h1>Something went wrong</h1>
    <p>
      We couldn't load this page right now.
      Please try again.
    </p>
    <button onclick="window.location.reload()">
      Try Again
    </button>
  </div>
</body>
</html>
`;
}