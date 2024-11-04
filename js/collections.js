const minControl = document.querySelector('.price-range__control--min');
const maxControl = document.querySelector('.price-range__control--max');
const barActive = document.querySelector('.filter-range__bar-active');
const minInput = document.getElementById('CCPriceRangeMin');
const maxInput = document.getElementById('CCPriceRangeMax');
const minValue = 0;
const maxValue = 135;
const minControlLimit = 10; // Ограничение на минимальное значение

function updateBar() {
    const minVal = parseFloat(minControl.style.left) || 0;
    const maxVal = parseFloat(maxControl.style.left) || 100;
    barActive.style.left = minVal + '%';
    const width = Math.max(0, Math.min(100, maxVal - minVal));
    barActive.style.width = width + '%';
}

minControl.addEventListener('mousedown', (e) => {
    const onMouseMove = (event) => {
        const rect = barActive.parentElement.getBoundingClientRect();
        let newLeft = ((event.clientX - rect.left) / rect.width) * 100;
        newLeft = Math.max(minControlLimit, Math.min(100, newLeft));
        
        if (newLeft < parseFloat(maxControl.style.left) || isNaN(parseFloat(maxControl.style.left))) {
            minControl.style.left = newLeft + '%';
            // Если новый левый предел меньше 10%, устанавливаем значение в 0
            minInput.value = newLeft === 10 ? 0 : Math.round((newLeft / 100) * maxValue);
            updateBar();
        }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});

maxControl.addEventListener('mousedown', (e) => {
    const onMouseMove = (event) => {
        const rect = barActive.parentElement.getBoundingClientRect();
        let newLeft = ((event.clientX - rect.left) / rect.width) * 100;
        newLeft = Math.max(minValue, Math.min(100, newLeft));

        if (newLeft > parseFloat(minControl.style.left) || isNaN(parseFloat(minControl.style.left))) {
            maxControl.style.left = newLeft + '%';
            maxInput.value = Math.round((newLeft / 100) * maxValue);
            updateBar();
        }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});
minControl.style.left = '10%';
maxControl.style.left = '100%';
minInput.value = 0; // Здесь 0, так как мы хотим, чтобы отображалось 0
maxInput.value = maxValue;
updateBar();

function updateControlsFromInputs() {
    const minVal = parseFloat(minInput.value) || minValue;
    const maxVal = parseFloat(maxInput.value) || maxValue;

    if (minVal > maxVal) {
        maxInput.value = minVal;
    }
    const minPercent = Math.max(minControlLimit, Math.min(maxValue, (minVal / maxValue) * 100));
    const maxPercent = Math.max(minValue, Math.min(maxValue, (maxVal / maxValue) * 100));
    minControl.style.left = minPercent + '%';
    maxControl.style.left = maxPercent + '%';

    updateBar();
}
minInput.addEventListener('input', updateControlsFromInputs);
maxInput.addEventListener('input', updateControlsFromInputs);
updateControlsFromInputs();


const filterItem = document.querySelectorAll('.collections__filters-item');
const filterBlock = document.querySelectorAll('.collections__filters-block');

filterBlock.forEach(block => {
    block.addEventListener('click', function() {
        filterItem.forEach(item => {
            item.classList.remove('active');
        });
        const closestItem = block.closest('.collections__filters-item');
        if (closestItem) {
            closestItem.classList.toggle('active');
        }
    });
});

document.addEventListener('click', function(event) {
    if (![...filterItem].some(item => item.contains(event.target))) {
        filterItem.forEach(item => {
            item.classList.remove('active');
        });
    }
});
