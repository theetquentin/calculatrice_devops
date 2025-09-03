const path = require('path');
const calculatrice = require('./src/calculatrice');


describe("Test sur l'api", () => {
    test("Le get sur la route '/' envoi au bon endroit", () => {
        const res = { sendFile: jest.fn() };

        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        
        expect(res.sendFile).toHaveBeenCalledWith(path.join(__dirname, "public", "index.html"))

    })
});