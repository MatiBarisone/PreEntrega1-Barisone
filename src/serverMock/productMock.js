const products = [

    //=============================== T-Shirt =================================
    {
        id: 1,
        name: "Remera Under Armor",
        stock: 20,
        category: "Remera",
        subcategory: "Ropa",
        price: "1000",
        descrption: "Remera under Armor",
        img: require("../serverMock/assets/tshirts/remera1.svg").default
    },
    {
        id: 2,
        name: "Remera Black",
        stock: 30,
        category: "Remera",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Remera All Black",
        img: require("../serverMock/assets/tshirts/remera2.svg").default
    },
    {
        id: 3,
        name: "Remera Marron",
        stock: 15,
        category: "Remera",
        subcategory: "Ropa",
        price: "999",
        descrption: "Remera Marron Claro",
        img: require("../serverMock/assets/tshirts/remera3.svg").default
    },
    {
        id: 4,
        name: "Remera Amarilla",
        stock: 25,
        category: "Remera",
        subcategory: "Ropa",
        price: "1200",
        descrption: "Remera Amarilla",
        img: require("../serverMock/assets/tshirts/remera4.svg").default
    },
    {
        id: 5,
        name: "Remera Miami",
        stock: 15,
        category: "Remera",
        subcategory: "Ropa",
        price: "500",
        descrption: "Remera Miami Negra",
        img: require("../serverMock/assets/tshirts/remera5.svg").default
    },
    {
        id: 6,
        name: "Remera Tiger Boss",
        stock: 25,
        category: "Remera",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Remera Tiger Boss Ultiamte edition",
        img: require("../serverMock/assets/tshirts/remera6.svg").default
    },
    {
        id: 7,
        name: "Remera Nirvana",
        stock: 20,
        category: "Remera",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Remera Nirvana Picmentada",
        img: require("../serverMock/assets/tshirts/remera7.svg").default
    },
    {
        id: 8,
        name: "Remera Pink Star",
        stock: 30,
        category: "Remera",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Remera Pink Star Utimate edition",
        img: require("../serverMock/assets/tshirts/remera8.svg").default
    },
    {
        id: 9,
        name: "Remera Stones",
        stock: 15,
        category: "Remera",
        subcategory: "Ropa",
        price: "1200",
        descrption: "Remera Stones",
        img: require("../serverMock/assets/tshirts/remera9.svg").default
    },

    //=============================== Hoodies =================================

    {
        id: 10,
        name: "Sweater Rosa Pastel",
        stock: 20,
        category: "Buzo",
        subcategory: "Ropa",
        price: "1200",
        descrption: "Sweater Rosa Pastel",
        img: require("../serverMock/assets/hoodies/buzo1.svg").default
    },
    {
        id: 11,
        name: "Bucito Rosa Crema",
        stock: 35,
        category: "Buzo",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Bucito Rosa Crema para el fresco",
        img: require("../serverMock/assets/hoodies/buzo2.svg").default
    },
    {
        id: 12,
        name: "Buzo Corazón",
        stock: 10,
        category: "Buzo",
        subcategory: "Ropa",
        price: "2000",
        descrption: "Buzo Corazón Ultimate Edition",
        img: require("../serverMock/assets/hoodies/buzo3.svg").default
    },
    {
        id: 13,
        name: "Buzo Largo",
        stock: 45,
        category: "Buzo",
        subcategory: "Ropa",
        price: "900",
        descrption: "Buzo Largo",
        img: require("../serverMock/assets/hoodies/buzo4.svg").default
    },
    {
        id: 14,
        name: "Buzo Oversize Black",
        stock: 30,
        category: "Buzo",
        subcategory: "Ropa",
        price: "1300",
        descrption: "Buzo Oversize Black",
        img: require("../serverMock/assets/hoodies/buzo5.svg").default
    },
    {
        id: 15,
        name: "Sweater Negro",
        stock: 30,
        category: "Buzo",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Sweater Negro con cuello ancho",
        img: require("../serverMock/assets/hoodies/buzo6.svg").default
    },
    {
        id: 16,
        name: "Buzo Verde Pastel",
        stock: 25,
        category: "Buzo",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Buzo Verde Pastel",
        img: require("../serverMock/assets/hoodies/buzo7.svg").default
    },
    {
        id: 17,
        name: "Buzo Azul Oversize",
        stock: 40,
        category: "Buzo",
        subcategory: "Ropa",
        price: "1900",
        descrption: "Buzo Azul Oversize",
        img: require("../serverMock/assets/hoodies/buzo8.svg").default
    },

    //=============================== Jackets =================================

    {
        id: 18,
        name: "Campera de Jean",
        stock: 40,
        category: "Campera",
        subcategory: "Ropa",
        price: "2000",
        descrption: "Campera de Jean",
        img: require("../serverMock/assets/jackets/campera1.svg").default
    },
    {
        id: 19,
        name: "Campera de Montaña",
        stock: 15,
        category: "Campera",
        subcategory: "Ropa",
        price: "1900",
        descrption: "Campera de Montaña",
        img: require("../serverMock/assets/jackets/campera2.svg").default
    },
    {
        id: 20,
        name: "Campera de Cuero",
        stock: 25,
        category: "Campera",
        subcategory: "Ropa",
        price: "3500",
        descrption: "Campera de Cuero",
        img: require("../serverMock/assets/jackets/campera3.svg").default
    },
    {
        id: 21,
        name: "Campera Amarilla",
        stock: 10,
        category: "Campera",
        subcategory: "Ropa",
        price: "1200",
        descrption: "Campera Amarilla",
        img: require("../serverMock/assets/jackets/campera4.svg").default
    },
    {
        id: 22,
        name: "Campera Blanca",
        stock: 35,
        category: "Campera",
        subcategory: "Ropa",
        price: "2400",
        descrption: "Campera Blanca para la nieve",
        img: require("../serverMock/assets/jackets/campera5.svg").default
    },
    {
        id: 23,
        name: "Campera Azul",
        stock: 15,
        category: "Campera",
        subcategory: "Ropa",
        price: "1900",
        descrption: "Campera Azul estilo acampanado",
        img: require("../serverMock/assets/jackets/campera6.svg").default
    },
    {
        id: 24,
        name: "Campera de Cuero",
        stock: 40,
        category: "Campera",
        subcategory: "Ropa",
        price: "3600",
        descrption: "Campera de Cuero Rosa",
        img: require("../serverMock/assets/jackets/campera7.svg").default
    },
    {
        id: 25,
        name: "Campera Corta",
        stock: 40,
        category: "Campera",
        subcategory: "Ropa",
        price: "1500",
        descrption: "Campera corta verde",
        img: require("../serverMock/assets/jackets/campera8.svg").default
    },
    {
        id: 26,
        name: "Campera Saco Largo",
        stock: 25,
        category: "Campera",
        subcategory: "Ropa",
        price: "4000",
        descrption: "Campera Saco Largo",
        img: require("../serverMock/assets/jackets/campera9.svg").default
    },
    {
        id: 27,
        name: "Campera Rosa",
        stock: 50,
        category: "Campera",
        subcategory: "Ropa",
        price: "1200",
        descrption: "Campera Rosa",
        img: require("../serverMock/assets/jackets/campera10.svg").default
    },

    //=============================== Mochilas =================================

    //Coming soon

];

//============ EndPoints ===================

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject(new Error("El array esta vacio!"));
        }
        else {
            setTimeout(() => {
                resolve(products);
            }, 3000);
        }
    });
}

export const getProductByID = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID));
        }, 3000);
    });
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory));
        }, 3000);
    });
}

export const getProductBySubcategory = (productSubcategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.subcategory === productSubcategory));
        }, 3000);
    });
}