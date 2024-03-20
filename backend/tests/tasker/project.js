const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const helper = require('../taskerhelper')

//This module tests all api calls that start with /project
const projectTester = async (api) => {
  beforeEach(async () => {
    //Destroy all projects from database
    await helper.destroyDb();
    //Populate database with test objects
    await helper.populateDb();
  })
  //Full list of projects are returned as json
  //GET /api/tasker/projects
  test('Projects are returned as json', async () => {
    let projects = await helper.projectsInDb()
    projects = projects.map(p => p.dataValues)
    let result = await api
      .get('/api/tasker/projects')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(result.length, projects.length)
  })
  //Project can be added
  //POST /api/tasker/projects
  test('Projects can be added', async () => {
    let newProject = {
      title: "Addign project", 
      description: "Test description"
    }
    let projectsBefore = await helper.projectsInDb()
    let result = await api
      .post('/api/tasker/projects')
      .send(newProject)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    let projectsAfter = await helper.projectsInDb()
    let savedProject = projectsAfter.find(p => p.id === result._body.id)
    assert.strictEqual(projectsBefore.length, projectsAfter.length - 1)
    assert.strictEqual(savedProject.dataValues.title, newProject.title)
    assert.strictEqual(savedProject.dataValues.description, newProject.description)
  })
  //Project can be updated by id
  //PUT /api/tasker/projects/:id
  test('Project can be updated', async () => {
    let testProject = await helper.testProject()
    let alteredProject = {
      ...testProject,
      title: "updated title"
    }
    let result = await api
      .put(`/api/tasker/projects/${alteredProject.id}`)
      .send(alteredProject)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    let projectsAfter = await helper.projectsInDb()
    let updatedProject = projectsAfter.find(proj => proj.id === alteredProject.id)
    assert.strictEqual(updatedProject.title, alteredProject.title)
  })
  //Project can be deleted by id
  //DELETE /api/tasker/projects/:id
  test('Project can be deleted by id', async () => {
    //Get projects before testing
    let projectsBefore = await helper.projectsInDb()
    //Get id of project to delete
    let testProject = await helper.testProject()
    //Test for correct response
    await api
      .delete(`/api/tasker/project/${testProject.id}`)
      .expect(204)
    //Get projects after deletion
    let projectsAfter = await helper.projectsInDb()
    //Try to find the deleted project in projects
    let deletedProject = projectsAfter.find(proj => proj.id === testProject.id)

    //Check if number of projects is one less than before deletion
    assert.strictEqual(projectsBefore.length - 1, projectsAfter.length)
    //Check that project with deleted id is not found
    assert.strictEqual(deletedProject, undefined)
  })
  //Project is found by id and returned as json
  //GET /api/tasker/projects/:id
  test('Project is found by id and returned as json', async () => {
    let testProject = await helper.testProject()
    let result = await api
      .get(`/api/tasker/projects/${testProject.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(testProject.id, result.id)
    assert.strictEqual(testProject.title, result.title)
    assert.strictEqual(testProject.description, result.description)
  })
  //Sprints are found with project id
  //GET /api/tasker/projects/:id/sprints
  test('Projects sprints are returned as json', async () => {
    let project = await helper.testProject()
    let sprints = await helper.sprintsInDb()
    sprints = sprints.filter(sprint => sprint.projectid === project.id)
    let result = await api
      .get(`/api/tasker/projects/${project.id}/sprints`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(sprints.length, result.length)
  })
  //Tasks are found with project id
  ///GET /api/tasker/projects/:id/tasks
  test('Projects tasks are returned as json', async () => {
    let project = await helper.testProject()
    let tasks = await helper.tasksInDb()
    tasks = tasks.filter(t => t.projectid === project.id)
    let result = await api
      .get(`/api/tasker/projects/${project.id}/tasks`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    result = result._body
    assert.strictEqual(tasks.length, result.length)
    assert.strictEqual(tasks[0].id, result[0].id)
  })
}
module.exports = projectTester
