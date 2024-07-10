const request = require('supertest');
const app = require('../src/app');

describe('Auth Endpoints', () => {
  it('should register user successfully with default organisation', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'Password123',
        phone: '1234567890',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data.user).toHaveProperty('firstName', 'John');
    expect(res.body.data.user).toHaveProperty('lastName', 'Doe');
    expect(res.body.data.user).toHaveProperty('email', 'john@example.com');
  });

  it('should fail if required fields are missing', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'Password123',
      });

    expect(res.statusCode).toEqual(422);
    expect(res.body.errors[0]).toHaveProperty('field', 'firstName');
  });

});
