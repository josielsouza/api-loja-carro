import { testServer } from "../jest.setup"

describe(" Car -  create", () => {
    it(" create car", async () => {
        const resPost = await testServer
            .post("/createCar")
            .send({
                name_car: "Uno",
                brand: "Fiat",
                year_of_manufacture: "2015",
                description: "Carro de passeio",
                name: "Josiel Souza",
                email: "josielsouza.dj@gmail.com",
                phone: "(11) 9 5088-6634",
            });

        expect(resPost.statusCode).toEqual(201);
    });
   
});
describe(" Car - update", () => {
    it(" create car", async () => {
        const resPost = await testServer
            .patch("/changeCar/:id_car")
            .send({
                name_car: "Uno",
                brand: "Fiat",
                year_of_manufacture: "2015",
                description: "Carro de passeio",
                name: "Josiel Souza",
                email: "josielsouza.dj@gmail.com",
                phone: "(11) 9 5088-6634",
            });

        expect(resPost.statusCode).toEqual(400);
    });
    it(" change car", async () => {
        const resPut = await testServer
            .put("/changeCar")
            .send({
                name_caroo: "Uno Mile",

            });

        expect(resPut.statusCode).toEqual(404);
    });
});


