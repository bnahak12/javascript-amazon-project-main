import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
export const deliveryOptions =
    [
        {
            id: '1',
            deliverDays: 7,
            priceCents: 0
        },
        {
            id: '2',
            deliverDays: 3,
            priceCents: 499
        },
        {
            id: '3',
            deliverDays: 1,
            priceCents: 999
        }
    ];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });
    return deliveryOption;
}

export function getDeliveryDate(deliveryOption) {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliverDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    return dateString;
}