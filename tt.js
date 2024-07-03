
const body = {
    items: [{
        batch: null,
        central_type: "TAXABLE",
        conversion_box: null,
        conversion_case: null,
        cost_per_pcs: null,
        createdAt: "2024-04-29T10:04:58.868Z",
        decimal: null,
        discount_less: null,
        discount_type: "NO_SCHEME",
        f6_rate: false,
        free_scheme: "",
        id: 11,
        isActive: true,
        item_code: "",
        item_discount: null,
        item_type: "NORMAL",
        local_type: "TAXABLE",
        maximum_discount: null,
        maximum_quantity: null,
        minimum_margin: null,
        minimum_quantity: null,
        name: "20Pads",
        narcotic: false,
        packing: null,
        premiumPrice: null,
        price: 150,
        purchase_discount: null,
        purchase_rate: null,
        quantity: 150,
        rate_a: null,
        rate_b: null,
        rate_c: null,
        reorder_quantity: null,
        salt: "",
        schedule_h: false,
        schedule_h1: false,
        selectedQuantity: 10,
        special_discount: null,
        special_discount_quantity: null,
        status: "CONTINUE",
        strikePrice: 170,
        type: "NORMAL",
        unit: "PCS",
        updatedAt: "202405-25T0:0:27.751Z",
        valid_from: "FULLSCHEME",
        valid_to: null,
        volume_discount: null,
    }],
    bill_date: "23-06-2024",
    order_date: "23-06-2024",
    party: 11,
    payment_type: "CASH",
}

for (const it of body.items) {

    // const variant_price =
    //     it.price * it.quantity +
    //     addTax(it.price * it.quantity, it.sgst + it.cgst) -
    //     addTax(it.unit_price * it.quantity, it.discount || 0);
    // console.log(variant_price);
    const purchase_order_item = await strapi.db
        .query("api::purchase-order-item.purchase-order-item")
        .create(
            {
                data: {
                    product_variant: it.id,
                    amount: it.price,
                    quantity: it.quantity,
                    discount: it.item_discount,
                    unit_price: it.price,
                    unit: it.unit,
                    batch: it.batch,
                    purchase_rate: it.purchase_rate,
                    rate_a: it.rate_a,
                    rate_b: it.rate_b,
                },
            },
            { transaction: t }
        );

    order_items_ids.push(purchase_order_item.id);

    total_amount += it.price;
}

const purchase_order = await strapi.db
    .query("api::purchase-order.purchase-order")
    .create(
        {
            data: {
                marketer: body.marketer,
                order_id: generateOrderUid(),
                description: "",
                image: body.image,
                total_amount: total_amount,
                purchase_order_items: order_items_ids,
                seller: id,
                party: body.party,
                payment_type: body.payment_type,
                bill_date: body.bill_date,
                order_date: body.order_date,
                bill_number: generateBillNumber(),
            },
        },
        { transaction: t }
    );
