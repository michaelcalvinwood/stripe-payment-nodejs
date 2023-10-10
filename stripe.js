const stripe = require('./utils/stripe-interface')

const test = async () => {
    const url = await stripe.makePurchase('Oussama and Woodney\' Greatest Hits', 2, 1500, 'https://pymnts.com', 'https://zeta.pymnts.com');
    console.log('url', url)
}

test()