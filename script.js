 function calculate(percentage) {
    const marketPrice = parseFloat(document.getElementById('marketPrice').value);
    const purchaseAmount = parseFloat(document.getElementById('purchaseAmount').value);

    if (!marketPrice || !purchaseAmount) {
        alert('시장가와 구매금액을 모두 입력해주세요.');
        return;
    }

    const profitPrice = marketPrice * (1 + percentage / 100);
    const lossPrice = marketPrice * (1 - percentage / 100);

    const profitAmount = purchaseAmount * (1 + percentage / 100);
    const lossAmount = purchaseAmount * (1 - percentage / 100);

    document.getElementById('profitPrice').textContent =
        `${profitPrice.toLocaleString('ko-KR')}원`;
    document.getElementById('lossPrice').textContent =
        `${lossPrice.toLocaleString('ko-KR')}원`;
    document.getElementById('profitAmount').textContent =
        `수익: +${(profitAmount - purchaseAmount).toLocaleString('ko-KR')}원`;
    document.getElementById('lossAmount').textContent =
        `손실: ${(lossAmount - purchaseAmount).toLocaleString('ko-KR')}원`;
}

function reset() {
    document.getElementById('marketPrice').value = '';
    document.getElementById('purchaseAmount').value = '';
    document.getElementById('profitPrice').textContent = '-';
    document.getElementById('lossPrice').textContent = '-';
    document.getElementById('profitAmount').textContent = '-';
    document.getElementById('lossAmount').textContent = '-';
} 
