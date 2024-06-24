var items = [
    { id: "skinnyFitPlainJeans", stockId: "skinnyFitPlainJeansStock" },
    { id: "rippedJeans", stockId: "rippedJeansStock" },
    { id: "straightFit", stockId: "straightFitStock" },
    { id: "wideLeg", stockId: "wideLegStock" },
    { id: "quotedShirts", stockId: "quotedShirtsStock" },
    { id: "vNeckWhiteShirt", stockId: "vNeckWhiteShirtStock" },
    { id: "ootdShirt", stockId: "ootdShirtStock" },
    { id: "plainShirt", stockId: "plainShirtStock" },
    { id: "blackSandoMen", stockId: "blackSandoMenStock" },
    { id: "coloredOotdSando", stockId: "coloredOotdSandoStock" },
    { id: "whiteSando", stockId: "whiteSandoStock" },
    { id: "spaghettiSandoWomen", stockId: "spaghettiSandoWomenStock" },
    { id: "chanel", stockId: "chanelStock" },
    { id: "lorDeJadore", stockId: "lorDeJadoreStock" },
    { id: "tiffanyCo", stockId: "tiffanyCoStock" },
    { id: "villain", stockId: "villainStock" },
    { id: "toyStoryToy", stockId: "toyStoryToyStock" },
    { id: "pikachuPlushie", stockId: "pikachuPlushieStock" },
    { id: "cuteMonsterPlushie", stockId: "cuteMonsterPlushieStock" },
    { id: "cuteGiraffeToy", stockId: "cuteGiraffeToyStock" },
];

function updateStocks() {
    var updatedStocks = [];
    var stocksAdded = false; // Flag to check if stocks were added

    items.forEach(function(item) {
        var input = document.getElementById(item.id + "Input");
        var stock = document.getElementById(item.stockId);

        if (input && stock) {
            var addStock = parseInt(input.value);
            if (!isNaN(addStock) && addStock > 0) {
                stock.textContent = parseInt(stock.textContent) + addStock;
                input.value = "";

                // Store the updated stock value
                updatedStocks.push({ id: item.id, stock: parseInt(stock.textContent) });
                stocksAdded = true; // Set flag to true since stocks were added

                // Update stock display in store.html (if needed)

                // Update stock display in stocks.html
                var stockElement = document.getElementById(`${item.id}Stock`);
                if (stockElement) {
                    stockElement.textContent = stock.textContent;
                }
            }
        }
    });

    // Save the updated stocks to localStorage
    localStorage.setItem("stocks", JSON.stringify(updatedStocks));

    // Show alert if no stocks were added
    if (!stocksAdded) {
        alert("No stocks added");
    } else {
        // Show alert for "STOCKS UPDATED"
        alert("STOCKS UPDATED");
    }
}
