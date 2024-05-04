const stripe = Stripe('pk_test_51P2seUP37jUfZlT3dmirOdr2JfZ9xcsYpXi443aHyNNse13odaSQjbLqFSQzjNz7IvAmK7Ta21uDyb2NP3V4kJb600pcQnWRa4');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });