const { Project, Sprint, Task} = require('../models/Tasker')
const taskerRouter = require('express').Router()

//Get all projects
taskerRouter.get('/projects', async (req, res) => {
  const projects = await Project.findAll()
  const sprints = await Sprint.findAll({include: Task})
  let reply = projects.map((project) => ({
      ...project.dataValues,
      sprints: sprints.filter(s => s.projectid === project.id)
    }));

  res.json(reply)
})

//Create a project
taskerRouter.put('/projects', async (req, res) => {
  let newProject = Project.build(req.body)
  await newProject.save();
  const projects = await Project.findAll({include: Task})
  const sprints = await Sprint.findAll({include: Task})
  let reply = projects.map((project) => ({
      ...project.dataValues,
      sprints: sprints.filter(s => s.projectid === project.id)
    }));

  res.json(reply);
})

//Delete project by id
taskerRouter.delete('/project/:id', async (req, res) => {
  let reply = "";
  await Project.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).end()
})
//Create a task
taskerRouter.put('/tasks', async (req, res) => {
  let newTask = Task.build(req.body)
  await newTask.save();1
  const projects = await Project.findAll()
  const sprints = await Sprint.findAll({include: Task})
  let reply = projects.map((project) => ({
      ...project.dataValues,
      sprints: sprints.filter(s => s.projectid === project.id)
    }));

  res.json(reply);
})
//Delete task
taskerRouter.delete('/task/:id', async (req, res) => {
  await Task.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).end()
})

//Update a task
taskerRouter.put('/tasks/:id', async (req, res) => {
  let cid = req.params.id
  let newTask = req.body
  await Task.update(
    newTask,
    {where: {id: cid}}
  )
  const projects = await Project.findAll()
  const sprints = await Sprint.findAll({include: Task})
  let reply = projects.map((project) => ({
      ...project.dataValues,
      sprints: sprints.filter(s => s.projectid === project.id)
    }));

  res.json(reply);
})


module.exports = taskerRouter
