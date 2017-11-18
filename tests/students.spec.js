const request = require('supertest')
const app = require('../server')

describe('GET /students', () =>{
    it('should return list of students', (done) => {
        request(app).get('/students')
            .expect(200)
            .then((res) => {
                let students = res.body
                expect(students instanceof Array).toBeTruthy()
                let student = students[0]
                expect(student.id).toBeTruthy() //ค่า id ที่ส่งมาต้องเป็นจริง
                expect(student.name).toBeTruthy() //ค่า name ที่ส่งมาต้องเป็นจริง
                expect(student.faculty).toBeTruthy() //ค่า faculty ที่ส่งมาต้องเป็นจริง
                done() //สั่งหยุดเมื่อtestเสร็จแล้ว

            })
    })
})


describe('POST /students', () =>{
    it('should create student', (done) => {
        request(app).post('/students')
            .send({ name: 'กันยา', email: 'kunra@gmail.com', faculty: 'Math' })
            .expect(201)
            .then((res) => {
                let student = res.body
                expect(student).toBeTruthy()
                expect(student.id).toBeTruthy()
                expect(student.name).toEqual('กันยา') //เช็คว่าชื่อที่ส่งไปตรงกันหรือเปล่า
                done()
            })
    })
})