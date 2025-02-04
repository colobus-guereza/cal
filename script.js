
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <title>Make some profit!</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="container">
        <h1>Make some profit!</h1>
        <div class="calculator">
            <div class="input-group">
                <input type="tel" id="marketPrice" placeholder="Market Price" pattern="[0-9]*">
                <div class="neon-line"></div>
            </div>
            <div class="input-group">
                <input type="tel" id="purchaseAmount" placeholder="Purchase Amount" pattern="[0-9]*">
                <div class="neon-line"></div>
            </div>
            <div class="fee-checkbox">
                <input type="checkbox" id="feeCheck" onchange="handleFeeChange()">
                <label for="feeCheck">Include Trading Fee (₩5,000)</label>
            </div>
            <div class="percentage-buttons">
                <button onclick="calculate(2)">2%</button>
                <button onclick="calculate(3)">3%</button>
                <button onclick="calculate(4)">4%</button>
                <button onclick="calculate(5)">5%</button>
            </div>
            <button class="reset-btn" onclick="reset()">Reset</button>
            <div class="result">
                <div class="profit">
                    <h3>Earning</h3>
                    <p id="profitPrice">-</p>
                    <p id="profitAmount">-</p>
                    <p id="profitTotal">-</p>
                </div>
                <div class="loss">
                    <h3>Loss</h3>
                    <p id="lossPrice">-</p>
                    <p id="lossAmount">-</p>
                    <p id="lossTotal">-</p>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
