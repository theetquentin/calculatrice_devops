/**
 * Module de calculatrice pour effectuer des additions
 */

/**
 * Additionne deux nombres
 * @param {number[]} nombres - Nombres
 * @returns {number} La somme des nombres
 * @throws {Error} Si les paramètres ne sont pas des nombres
 */
function addition(nombres) {
    // Conversion en nombres
    const mapNumbers = nombres.map(n => parseFloat(n));

    // Vérification que les paramètres sont des nombres valides
    if (mapNumbers.some(isNaN)) {
        throw new Error('Les paramètres doivent être des nombres valides');
    }
    
    // Calcul et retour du résultat
    return mapNumbers.reduce((acc, n) => acc + n, 0)
}

module.exports = {
    addition
};
