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
});