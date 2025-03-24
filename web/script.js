document.getElementById("generateButton").addEventListener("click", async () => {
    const userInput = document.getElementById("userInput").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Generating...";
  
    try {
      const response = await fetch("/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      });
  
      const data = await response.json();
      if (data.result) {
        resultDiv.innerHTML = data.result;
      } else {
        resultDiv.innerHTML = "Error generating the jingle.";
      }
    } catch (error) {
      console.error("Error:", error);
      resultDiv.innerHTML = "Error generating the jingle.";
    }
  });