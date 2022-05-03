(function () {
    "use strict";
    const ionic_calc = document.querySelector("#calculate"),
        ionic_reset = document.querySelector("#reset"),
        ionic_height = document.querySelector("#height-input"),
        ionic_weight = document.querySelector("#weight-input"),
        result = document.getElementById("result");

    function resetBtn() {
        ionic_height.value = "";
        ionic_weight.value = "";
        result.innerHTML = '';
    }

    function getValue() {
        const numHeight = +ionic_height.value,
            numWeight = +ionic_weight.value;
        const total = parseFloat(numHeight) / parseFloat(numWeight ** 2);

        if (isNaN(total)) {
            alert("pls add Number");
            return;
        }

        const ionic_card = document.createElement("ion-card");
        ionic_card.innerHTML = `
          <ion-card-content>
            <h3>${total.toFixed(3)}</h3>
        </ion-card-content>

        `;
        result.innerHTML = '';
        result.appendChild(ionic_card);
    }

    ionic_reset.addEventListener("click", resetBtn);
    ionic_calc.addEventListener("click", getValue);
})();
