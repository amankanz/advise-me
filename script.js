async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      header: {
        Accept: "application/json",
      },
    });

    const adviceData = await response.json();
    document.getElementById("loadingAdvice").textContent =
      adviceData.slip.advice;
    console.log(adviceData);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("loadAdviceBtn").addEventListener("click", getAdvice);
