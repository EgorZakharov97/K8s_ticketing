import request from 'supertest';
import {app} from '../../app';

it('signs out user', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password123'
        })
        .expect(201);

    const res = await request(app)
        .post('/api/users/signout')
        .send({})
        .expect(200);

    expect(res.get('Set-Cookie')).toBeDefined();
});