const {Project, Sprint, Task} = require('../models/Tasker')

const projectsInDb = async () => {
  const projects = await Project.findAll()
  return projects
}
const sprintsInDb = async () => {
  const sprints = await Sprint.findAll()
  return sprints.map(s => s.dataValues)
}
const tasksInDb = async () => {
  const tasks = await Task.findAll()
  return tasks.map(t => t.dataValues)
}
const testProject = async () => {
  const project = await Project.findOne()
  return project.dataValues
}
const testSprint = async () => {
  const sprint = await Sprint.findOne()
  return sprint.dataValues
}
const testTask = async () => {
  const task = await Task.findOne()
  return task.dataValues
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
  for (let i = 0; i < 4; i++) {
    const testProject = {
      title: `${i} initial test project`,
      description: `${i}Initial test project description`,
    }
    await Project.build(testProject).save()
  }

  //Get projects currenty in database
  let projects = await Project.findAll()
  projects = projects.map(p => p.dataValues)
  
  //Create test sprint
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < 5; j++) {
      const testSprint = {
        title: `${i}:${j}Initial test sprint`,
        description: "Initial test sprint description",
        projectid: projects[i].id
      }
      //Insert test sprint in database
      await Sprint.build(testSprint).save()
    }
  }
  //Get sprints in database
  let sprints = await Sprint.findAll()
  sprints = sprints.map(s => s.dataValues)


  //Create test task
  for (let i = 0; i < sprints.length; i++) {
    for (let j = 0; j < 5; j++) {
      const testTask = {
        title: "Initial test task",
        description: "Initial test task description",
        state: 0,
        projectid: sprints[i].projectid,
        sprintid: sprints[i].id
      }
      //Insert test task to database
      await Task.build(testTask).save()
    }
  }
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < 5; j++) {
      const testTask = {
        title: `${i}:${j}Initial test task`,
        description: "Initial test task description",
        state: 0,
        projectid: projects[i].id,
      }
      //Insert test task to database
      await Task.build(testTask).save()
    }
  }

}

module.exports = {
  projectsInDb,
  sprintsInDb,
  tasksInDb,
  destroyDb,
  populateDb,
  testProject,
  testSprint,
  testTask
}
