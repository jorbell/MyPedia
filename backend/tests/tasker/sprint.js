const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const helper = require('../taskerhelper')

const sprintTester = async (api) => {
  //Test adding sprint
  beforeEach(async () => {
    //Destroy all projects from database
    await helper.destroyDb();
    //Populate database with test objects
    await helper.populateDb();
  })
  //Sprints are returned as json
  //GET /api/tasker/sprints
  test('Sprints are returned as json', async () => {
    let sprints = await helper.sprintsInDb()
    let result = await api
      .get('/api/tasker/sprints')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(result.length, sprints.length)
  })
  //Adding sprints
  //POST /api/tasker/sprints
  test('Sprint can be added', async () => {
    let projects = await helper.projectsInDb()
    let sprintsBefore = await helper.sprintsInDb()
    let newSprint = {
      title: "Adding sprint", 
      description: "Sprint description",
      projectid: parseInt(projects[0].id)
    }
    let result = await api
      .post('/api/tasker/sprints')
      .send(newSprint)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    let sprintsAfter = await helper.sprintsInDb()
    assert.strictEqual(sprintsBefore.length, sprintsAfter.length - 1)
    let savedSprint = sprintsAfter.find(p => p.id === result._body.id)
    assert.strictEqual(savedSprint.title, newSprint.title)
    assert.strictEqual(savedSprint.description, newSprint.description)
  })
  //Project can be updated by id
  //PUT /api/tasker/sprints/:id
  test('Sprint can be updated', async () => {
    let testSprint = await helper.testSprint()
    let alteredSprint = {
      ...testSprint,
      title: "updated title"
    }
    let result = await api
      .put(`/api/tasker/sprints/${alteredSprint.id}`)
      .send(alteredSprint)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    let sprintsAfter = await helper.sprintsInDb()
    let updatedSprint = sprintsAfter.find(s => s.id === alteredSprint.id)
    assert.strictEqual(updatedSprint.title, alteredSprint.title)
  })
  //Sprints can be deleted by id
  //DELETE /api/tasker/sprints/:id
  test('Sprints can be deleted by id', async () => {
    let sprintsBefore = await helper.sprintsInDb()
    let testSprint = await helper.testSprint()
    await api
      .delete(`/api/tasker/sprints/${testSprint.id}`)
      .expect(204)
    //Get projects after deletion
    let sprintsAfter = await helper.sprintsInDb()
    //Try to find the deleted sprint in sprints
    let deletedSprint = sprintsAfter.find(sprint => sprint.id === testSprint.id)
    //Check if number of sprints is one less than before deletion
    assert.strictEqual(sprintsBefore.length - 1, sprintsAfter.length)
    //Check that sprint with deleted id is not found
    assert.strictEqual(deletedSprint, undefined)
  })

  //Sprint can be found by id and returned as json
  //GET /api/tasker/sprints/:id
  test('Sprints are found by id', async () => {
    let testSprint = await helper.testSprint()
    let result = await api
      .get(`/api/tasker/sprints/${testSprint.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(testSprint.id, result.id)
    assert.strictEqual(testSprint.title, result.title)
    assert.strictEqual(testSprint.description, result.description)
    assert.strictEqual(testSprint.projectid, result.projectid)
  })

  //Sprints tasks can be found by sprint id
  //GET /sprints/:id/tasks
  test('Sprints tasks are returned as json', async () => {
    let sprint = await helper.testSprint()
    let tasks = await helper.tasksInDb()
    tasks = tasks.filter(t => t.sprintid === sprint.id)
    let result = await api
      .get(`/api/tasker/sprints/${sprint.id}/tasks`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(tasks.length, result.length)
  })



}
module.exports = sprintTester
