const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const helper = require('.././taskerhelper')


const taskTester = async (api) => {
  beforeEach(async () => {
    //Destroy all projects from database
    await helper.destroyDb();
    //Populate database with test objects
    await helper.populateDb();
  })
  //Tasks are returned as json
  //GET /api/tasker/tasks
  test('Tasks are returned as json', async () => {
    let tasks = await helper.tasksInDb()
    let result = await api
      .get('/api/tasker/tasks')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(result.length, tasks.length)
  })
  //Test adding task
  //POST /api/tasker/tasks
  test('Tasks can be added', async () => {
    let sprints = await helper.sprintsInDb()
    let tasksBefore = await helper.tasksInDb()
    let newTask = {
      title: "Test task", 
      description: "Test task description",
      projectid: sprints[0].projectid,
      sprintid: sprints[0].id,
    }
    let result = await api
      .post('/api/tasker/tasks')
      .send(newTask)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    let tasksAfter = await helper.tasksInDb()
    assert.strictEqual(tasksBefore.length, tasksAfter.length - 1)
    let savedTask = tasksAfter.find(p => p.id === result._body.id)
    assert.strictEqual(savedTask.title, newTask.title)
    assert.strictEqual(savedTask.description, newTask.description)
  })
  //Test deleting task by id
  //DELETE /api/tasker/tasks/:id
  test('Tasks can be deleted by id', async () => {
    let tasksBefore = await helper.tasksInDb()
    let task = await helper.testTask()
    await api
      .delete(`/api/tasker/tasks/${task.id}`)
      .expect(204)
    //Get projects after deletion
    let tasksAfter = await helper.tasksInDb()
    //Try to find the deleted project in projects
    let deletedTask = tasksAfter.find(t => t.id === task.id)
    //Check if number of projects is one less than before deletion
    assert.strictEqual(tasksBefore.length - 1, tasksAfter.length)
    //Check that project with deleted id is not found
    assert.strictEqual(deletedTask, undefined)
  })
  //Test finding task by id
  //GET /api/tasker/tasks/:id
  test('Task is found by id and returned as json', async () => {
    let task = await helper.testTask()
    let result = await api
      .get(`/api/tasker/tasks/${task.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(task.id, result.id)
    assert.strictEqual(task.title, result.title)
    assert.strictEqual(task.description, result.description)
  })

}
module.exports = taskTester
