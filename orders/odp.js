function order(orderId) {
    console.info('Order Id is order record id ', orderId);
    /** get order information */
    fetch(orderId)
    .then(result)
    .catch(error)
    .finally()

}