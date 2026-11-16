function order(orderId) {
    console.info('Order Id is order record id ', orderId);
    /** get order information */
    fetch(`/api/orders/${orderId}`)
        .then(response => response.json())
        .then(data => {
            console.info('Order information:', data);
        })
        .catch(error => {
            console.error('Error fetching order information:', error);
        });

}