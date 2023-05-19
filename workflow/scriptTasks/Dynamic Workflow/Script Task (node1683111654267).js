const {
    brand,
    model,
} = context.webhookdata.pathParams

context.data = {
    brand,
    model,
}
