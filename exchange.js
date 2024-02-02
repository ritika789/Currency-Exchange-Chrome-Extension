document.addEventListener('DOMContentLoaded', function () {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiKey = "OPJGBGFc01n/yf9Ogw7qTw==ozz8HzT2sLjr3GsY"
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;

        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                console.log('rate', rate)
                const resultPrice = amountTotal * rate;
                console.log('result', resultPrice)
                result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;

            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'An error occurred please try again later.'
            })
    });
});