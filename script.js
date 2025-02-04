// 숫자 포맷팅 함수
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자만 입력받는 함수
function onlyNumbers(str) {
    return str.replace(/[^\d]/g, '');
}

// 입력 필드에 숫자 포맷팅 적용
function formatInput(element) {
    let value = onlyNumbers(element.value);
    if (value) {
        element.value = formatNumber(value);
    }
}

// 입력 필드 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', function () {
    const inputs = ['marketPrice', 'purchaseAmount'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        element.addEventListener('input', () => formatInput(element));
    });
});

function calculate(percentage) {
    const marketPrice = parseFloat(document.getElementById('marketPrice').value.replace(/,/g, ''));
    const purchaseAmount = parseFloat(document.getElementById('purchaseAmount').value.replace(/,/g, ''));

    if (!marketPrice || !purchaseAmount) {
        alert('Please enter both Market Price and Purchase Amount.');
        return;
    }

    const profitPrice = marketPrice * (1 + percentage / 100);
    const lossPrice = marketPrice * (1 - percentage / 100);

    const profitAmount = purchaseAmount * (1 + percentage / 100);
    const lossAmount = purchaseAmount * (1 - percentage / 100);

    document.getElementById('profitPrice').textContent =
        `₩${formatNumber(Math.round(profitPrice))}`;
    document.getElementById('lossPrice').textContent =
        `₩${formatNumber(Math.round(lossPrice))}`;
    document.getElementById('profitAmount').textContent =
        `+₩${formatNumber(Math.round(profitAmount - purchaseAmount))}`;
    document.getElementById('lossAmount').textContent =
        `-₩${formatNumber(Math.round(Math.abs(lossAmount - purchaseAmount)))}`;
}

function reset() {
    const inputs = ['marketPrice', 'purchaseAmount'];
    const outputs = ['profitPrice', 'lossPrice', 'profitAmount', 'lossAmount'];

    inputs.forEach(id => {
        document.getElementById(id).value = '';
    });

    outputs.forEach(id => {
        document.getElementById(id).textContent = '-';
    });
} 
