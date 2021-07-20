import request from 'supertest';
import {app} from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);
});

it('returns 400 with an envalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'testtestcom',
            password: 'password123'
        })
        .expect(400);
});

it('returns 400 with without email at all', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            
        })
        .expect(400);
});

it('returns 400 with an invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: ''
        })
        .expect(400);
});

it('disallows duplicate emails', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);

    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(400);
});

it('sets JWT after successful signup', async () => {
    const res = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);

    expect(res.get('Set-Cookie')).toBeDefined();
})
