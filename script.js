document.getElementById("loader").hidden = true;

function loading() {
  document.getElementById("loadingAdvice").hidden = true;
  document.getElementById("loader").hidden = false;
}

function completeLoading() {
  document.getElementById("loadingAdvice").hidden = false;
  document.getElementById("loader").hidden = true;
}

async function getAdvice() {
  loading();
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      header: {
        Accept: "application/json",
      },
    });

    const adviceData = await response.json();

    document.getElementById("loadingAdvice").textContent =
      adviceData.slip.advice;

    completeLoading();
    console.log(adviceData);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("loadAdviceBtn").addEventListener("click", getAdvice);
