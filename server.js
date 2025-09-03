const express = require('express');
const path = require('path');
const calculatrice = require('./src/calculatrice');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// fonction pour gérer les additions (peut-être appelé dans le server.test comme ça)
const handleAddition = (req, res) => {
    const { nombre1, nombre2 } = req.body;
    
    if (nombre1 === undefined || nombre2 === undefined) {
        return res.status(400).json({ 
            erreur: 'Veuillez fournir deux nombres' 
        });
    }
    
    try {
        const resultat = calculatrice.addition(nombre1, nombre2);
        res.status(200).json({ resultat });
    } catch (error) {
        res.status(400).json({ 
            erreur: error.message 
        });
    }
};

// Route API pour l'addition
app.post('/api/addition', handleAddition);

// Démarrage du serveur
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
}

module.exports = { app, handleAddition };
