const stripe = require('./utils/stripe-interface')

const test = async () => {
    const url = await stripe.makePurchase('Test Product', 2, 500, 'https://pymnts.com', 'https://zeta.pymnts.com');
    console.log('url', url)
}

test()