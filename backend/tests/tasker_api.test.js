const supertest = require('supertest')
const app = require('../app')
const api = (supertest(app))
const projectTester = require('./tasker/project')
const sprintTester = require('./tasker/sprint')
const taskTester = require('./tasker/task')
const { describe } = require('node:test')

describe('Tasker tests:', () => {
  describe('Tests for projects', () => {
    projectTester(api)
  })
  describe('Tests for sprints', () => {
    sprintTester(api)
  })
  describe('Tests for tasks', () => {
    taskTester(api)
  })
})
