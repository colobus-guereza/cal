// 숫자 포맷팅 함수
function formatNumber(num) {
    try {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } catch (e) {
        console.error('Number formatting error:', e);
        return num.toString();
    }
}

// 숫자만 입력받는 함수
function onlyNumbers(str) {
    if (!str) return '';
    return str.toString().replace(/[^\d]/g, '');
}

// 입력 필드에 숫자 포맷팅 적용
function formatInput(element) {
    if (!element || !element.value) return;

    let value = onlyNumbers(element.value);
    if (value) {
        // setTimeout으로 비동기 처리
        setTimeout(() => {
            element.value = formatNumber(value);
        }, 0);
    }
}

// 입력 필드 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', function () {
    // iOS에서 터치 이벤트 최적화
    const addTouchStyle = (element) => {
        element.addEventListener('touchstart', function () {
            this.style.opacity = '0.7';
        });
        element.addEventListener('touchend', function () {
            this.style.opacity = '1';
        });
    };

    // 모든 버튼에 터치 스타일 적용
    document.querySelectorAll('button').forEach(addTouchStyle);

    // 입력 필드 이벤트 리스너 수정
    const inputs = ['marketPrice', 'purchaseAmount'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        // input, change 이벤트 모두 처리
        ['input', 'change'].forEach(eventType => {
            element.addEventListener(eventType, () => formatInput(element));
        });
    });
});

let lastPercentage = null; // 마지막으로 선택된 퍼센테이지 저장

function handleFeeChange() {
    if (lastPercentage !== null) {
        calculate(lastPercentage);
    }
}

function calculate(percentage) {
    try {
        lastPercentage = percentage;

        const marketPrice = parseFloat(document.getElementById('marketPrice').value.replace(/[^\d]/g, ''));
        const purchaseAmount = parseFloat(document.getElementById('purchaseAmount').value.replace(/[^\d]/g, ''));
        const includeFee = document.getElementById('feeCheck').checked;
        const fee = includeFee ? 5000 : 0;

        if (!marketPrice || !purchaseAmount) {
            alert('Please enter both Market Price and Purchase Amount.');
            return;
        }

        // 계산 결과를 setTimeout으로 비동기 처리
        setTimeout(() => {
            const profitPrice = marketPrice * (1 + percentage / 100);
            const lossPrice = marketPrice * (1 - percentage / 100);

            const profitAmount = purchaseAmount * (1 + percentage / 100) - fee;
            const lossAmount = purchaseAmount * (1 - percentage / 100) - fee;

            updateResults(profitPrice, lossPrice, profitAmount, lossAmount, purchaseAmount);
        }, 0);
    } catch (e) {
        console.error('Calculation error:', e);
    }
}

// 결과 업데이트 함수 분리
function updateResults(profitPrice, lossPrice, profitAmount, lossAmount, purchaseAmount) {
    try {
        document.getElementById('profitPrice').textContent =
            `₩${formatNumber(Math.round(profitPrice))}`;
        document.getElementById('lossPrice').textContent =
            `₩${formatNumber(Math.round(lossPrice))}`;
        document.getElementById('profitAmount').textContent =
            `+₩${formatNumber(Math.round(profitAmount - purchaseAmount))}`;
        document.getElementById('lossAmount').textContent =
            `-₩${formatNumber(Math.round(Math.abs(lossAmount - purchaseAmount)))}`;
        document.getElementById('profitTotal').textContent =
            `Total: ₩${formatNumber(Math.round(profitAmount))}`;
        document.getElementById('lossTotal').textContent =
            `Total: ₩${formatNumber(Math.round(lossAmount))}`;
    } catch (e) {
        console.error('Update results error:', e);
    }
}

function reset() {
    lastPercentage = null; // 리셋 시 마지막 퍼센테이지도 초기화
    const inputs = ['marketPrice', 'purchaseAmount'];
    const outputs = ['profitPrice', 'lossPrice', 'profitAmount', 'lossAmount', 'profitTotal', 'lossTotal'];

    inputs.forEach(id => {
        document.getElementById(id).value = '';
    });

    outputs.forEach(id => {
        document.getElementById(id).textContent = '-';
    });

    document.getElementById('feeCheck').checked = false;
} 
