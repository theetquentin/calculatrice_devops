const path = require('path');
const { handleAddition } = require('./server.js');


describe("Test sur l'api", () => {
    test("Le get sur la route '/' envoi au bon endroit", () => {
        const res = { sendFile: jest.fn() };

        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        
        expect(res.sendFile).toHaveBeenCalledWith(path.join(__dirname, "public", "index.html"))

    })

});

describe("POST /api/addition (mock req/res)", () => {

        test("5 + 3 = 8", () => {
        const req = { body: { nombre1: 5, nombre2: 3 } };
        // jest.fn().mockReturnThis() permet de chaîner comme en express
        // pour simuler res.status(200).json
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ resultat: 8 });
    });

    test("2.5 + 3.7 = 6.2", () => {
        const req = { body: { nombre1: 2.5, nombre2: 3.7 } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ resultat: 6.2 });
    });

    test("-5 + -3 = -8", () => {
        const req = { body: { nombre1: -5, nombre2: -3 } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ resultat: -8 });
    });


    test("5 + 3 = 8 avec des chaines", () => {
        const req = { body: { nombre1: "5", nombre2: "3" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ resultat: 8 });
    });

    test("Erreur 400 si un nombre manquant", () => {
        const req = { body: { nombre1: 5} };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ erreur: 'Veuillez fournir deux nombres' });
    });

    test("Erreur 400 si aucun nombre n'est renseigné", () => {
        const req = { body: {} };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ erreur: 'Veuillez fournir deux nombres' });
    });

    test("Erreur 400 si valeur non numérique", () => {
        const req = { body: { nombre1: "test", nombre2: "oui"} };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ erreur: 'Les paramètres doivent être des nombres valides' });
    });

    test("Erreur 400 si une ou plusieurs valeurs nulles", () => {
        const req = { body: { nombre1: NaN, nombre2: NaN} };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        handleAddition(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ erreur: 'Les paramètres doivent être des nombres valides' });
    });

});