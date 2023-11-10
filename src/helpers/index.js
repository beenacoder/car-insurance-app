export const getYearsDifference = (year) => {
    return new Date().getFullYear() - year;
}

export const calculateBrand = (brand) => {
    let increase;

    switch (brand) {
        case "1":
            increase = 1.05;
            break;
        case "2":
            increase = 1.15;
            break;
        case "3":
            increase = 1.30;
            break;
        default:
        break; 
    }
    return increase;
}

export const calculatePlan = (plan) => {
    return plan === "1" ? 1.20 : 1.50;
}

export const formatMoney = (quantity) => {
    return quantity.toLocaleString("es-AR", {
        style:"currency",
        currency: "ARS"
    });
}