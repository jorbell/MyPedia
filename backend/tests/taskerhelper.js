const {Project, Sprint, Task} = require('../models/Tasker')

const projectsInDb = async () => {
  const projects = await Project.findAll()
  return projects
}
const sprintsInDb = async () => {
  const sprints = await Sprint.findAll()
  return sprints
}
const tasksInDb = async () => {
  const tasks = await Task.findAll()
  return tasks
}

//Destroys all projects, sprints and tasks from database
const destroyDb = async () => {
  await Project.destroy({
    where: {},
    truncate:false
  })
  await Sprint.destroy({
    where: {},
    truncate:false
  })
  await Task.destroy({
    where: {},
    truncate:false
  })
}

const populateDb = async () => {
  //Create test project
  const testProject = {
    title: "Moro",
    description: "Tere",
  }
  //Insert test project to database
  await Project.build(testProject).save()

  //Get projects currenty in database
  const projects = await Project.findAll()

  //Create test sprint
  const testSprint = {
    title: "testi sprintti",
    description: "Testi sprintti description",
    projectid: projects[0].id
  }
  //Insert test sprint in database
  await Sprint.build(testSprint).save()

  //Get sprints in database
  const sprints = await Sprint.findAll()

  //Create test task
  const testTask = {
    title: "Testi taski",
    description: "Testi",
    state: 0,
    projectid: projects[0].id,
    sprintid: sprints[0].id
  }
  //Insert test task to database
  await Task.build(testTask).save()
}

module.exports = {
  projectsInDb,
  sprintsInDb,
  tasksInDb,
  destroyDb,
  populateDb,
}
