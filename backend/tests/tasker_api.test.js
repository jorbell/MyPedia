const { test, after, beforeEach, describe } = require('node:test')
const {Project, Sprint, Task} = require('../models/Tasker')

const helper = require('./taskerhelper')
const supertest = require('supertest')
const app = require('../app')
const api = (supertest(app))

describe('Tasker tests' , () => {
  describe('Tests for project' , () => {
    beforeEach(async () => {
      //Destroy all projects from database
      await helper.destroyDb();
      //Populate database with test objects
      await helper.populateDb();
    })
    test('Projects are returned as json', async () => {
      await api
        .get('/api/tasker/projects')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
    test('Project can be deleted by id', async () => {
      let projects = await helper.projectsInDb()
      let projectid = projects[0].id
      await api
        .delete(`/api/tasker/project/${projectid}`)
        .expect(204)
    })
    describe('Tests for sprints' , () => {
      
    })
    describe('Tests for tasks' , () => {
      
    })
  })
})
after(async () => {
  app.close(done)
})
