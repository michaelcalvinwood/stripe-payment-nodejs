require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.makePurchase = async (productDescription, quantity, costInCents, successURL, cancelURL, currency='usd') => {
   try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: [
                'card'
            ],
            mode: 'subscription', // 'subscription' would be for recurring charges, 'paymnet' for single time purchase
            success_url: successURL,
            cancel_url: cancelURL,
            line_items: [
                {
                    price_data: {
                        currency,
                        product_data: {
                            name: productDescription,
                        },
                        unit_amount: costInCents
                    },
                    quantity
                }
            ]
        })

        return session.url
   } catch (err) {
        console.log(err);
        return false
   }

}