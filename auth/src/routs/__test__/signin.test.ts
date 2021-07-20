import request from 'supertest';
import {app} from '../../app';

it('fails on an email that does not exist', async () => {
    return request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);

    return request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'passasdaword123'
        })
        .expect(400);

    
});

it('returns 201 and sets JWT when given valid credencials', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);

    const res = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);

    expect(res.get('Set-Cookie')).toBeDefined();
});

it('returns 400 with an invalid password', async () => {
    return request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: ''
        })
        .expect(400);
});
