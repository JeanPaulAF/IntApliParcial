const request = require('supertest');

const app = require('../app');

describe('Probando la ruta raiz', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/inicio');
        expect(response.statusCode).toBe(200);
        // Verifica el contenido del archivo HTML si es necesario
        expect(response.text).toContain('<title>Restaurante las Parrilas</title>');
    });
});
describe('Probando la ruta raiz', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/nosotros');
        expect(response.statusCode).toBe(200);
        // Verifica el contenido del archivo HTML si es necesario
        expect(response.text).toContain('<h1 class="display-3 text-white mb-3 animated slideInDown">Nosotros</h1>');
    });
});
