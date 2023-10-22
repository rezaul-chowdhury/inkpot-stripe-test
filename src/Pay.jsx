import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from "react";
import axios from "axios";
const KEY = 'pk_test_51NcOxyBxh3T4Cnv2VSkPuhV5sV8Rd4RvMtyQNp7wTlEIRvnFs2iwMlfFcjnXiFCvQslPEFQmvouUaY97n4TXWKDa00wFsllnf0'
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token);
    }
    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post('http://localhost:8000/api/checkout/payment', {
                    headers: {
                        'Authorization': 'sk_test_51NcOxyBxh3T4Cnv2xwfihF4OeMLq4nqqGLWDV68ZUYVNgiFxpLZeK03F4zF74GGfYmZxTUJ2WXzWdpAeOMmvxsRd00LX76nRds'
                    }
                });
                console.log(res.data)
            }catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <StripeCheckout
                name='Lama Shop'
                image='https://avatars.githubusercontent.com/u/66203698?v=4'
                billingAddress
                shippingAddress
                description = 'Your total is $20'
                amount = {2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: 'none',
                        width: 120,
                        borderRadius: 5,
                        padding: '20px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}
                >
                    pay
                </button>
            </StripeCheckout>
        </div>
    );
}

export default Pay;
