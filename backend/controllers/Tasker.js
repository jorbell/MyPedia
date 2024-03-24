const { Project, Sprint, Task, TaskState} = require('../models/Tasker')
const taskerRouter = require('express').Router()

//Get all projects
taskerRouter.get('/projects', async (req, res) => {
  const projects = await Project.findAll()
  res.status(200).json(projects)
})
//Create a project
taskerRouter.post('/projects', async (req, res) => {
  let newProject = Project.build(req.body)
  let savedProject = await newProject.save()
  if (savedProject){
    res.status(201).json(savedProject)
  }
  res.status(404).end()
})
//Update project
taskerRouter.put('/projects/:id', async (req, res) => {
  let newProject = req.body
  await Project.update(
    newProject,
    {where: {id: req.params.id}}
  )
  res.status(200).json({reply: "Project updated succesfully"});
})
//Delete project
taskerRouter.delete('/project/:id', async (req, res) => {
  await Project.destroy({
    where: { id: req.params.id }
  })
  res.status(204).end()
})
//Get project by id
taskerRouter.get('/projects/:id', async (req, res) => {
  let project = await Project.findByPk(req.params.id)
  if (project === null) {
    return res.status(404).end()
  }
  res.status(200).json(project.dataValues)
})
//Get projects sprints
taskerRouter.get('/projects/:id/sprints', async (req, res) => {
  let result = await Sprint.findAll({
    where: {
      projectid: parseInt(req.params.id)
    }
  })
  if (result === null) {
    return res.status(404).end()
  }
  res.status(200).json(result)
})
//Get projects tasks
taskerRouter.get('/projects/:id/tasks', async (req, res) => {
  let result = await Task.findAll({
    where: {
      projectid: parseInt(req.params.id)
    }
  })
  if (result === null) {
    return res.status(404).end()
  }
  res.status(200).json(result)
})
//Get sprints
taskerRouter.get('/sprints', async (req, res) => {
  const sprints = await Sprint.findAll()
  res.status(200).json(sprints)
})
//Create a Sprint
taskerRouter.post('/sprints', async (req, res) => {
  let newSprint = Sprint.build(req.body)
  let savedSprint = await newSprint.save()
  if (savedSprint){
    res.status(201).json(savedSprint)
  }
  res.status(404).end()
})
//Update sprint
taskerRouter.put('/sprints/:id', async (req, res) => {
  let newSprint = req.body
  await Sprint.update(
    newSprint,
    {where: {id: req.params.id}}
  )
  res.status(200).json({reply: "Sprint updated succesfully"});
})
//Delete sprint
taskerRouter.delete('/sprints/:id', async (req, res) => {
  await Sprint.destroy({
    where: { id: req.params.id }
  })
  res.status(204).end()
})
//Get sprint by id
taskerRouter.get('/sprints/:id', async (req, res) => {
  let sprint = await Sprint.findByPk(req.params.id)
  if (sprint === null) {
    return res.status(404).end()
  }
  res.status(200).json(sprint.dataValues)
})

//Get sprint tasks
taskerRouter.get('/sprints/:id/tasks', async (req, res) => {
  let result = await Task.findAll({
    where: {
      sprintid: parseInt(req.params.id)
    }
  })
  if (result === null) {
    return res.status(404).end()
  }
  res.status(200).json(result)
})


//Get tasks
taskerRouter.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll()
  res.status(200).json(tasks)
})
//Create task
taskerRouter.post('/tasks', async (req, res) => {
  let task = {...req.body, state: 0}
  let newTask = Task.build(task)
  let savedTask = await newTask.save();
  if (savedTask) {
    res.status(201).json(savedTask)
  }
  res.status(404).end()
})
//Update task
taskerRouter.put('/tasks/:id', async (req, res) => {
  let cid = req.params.id
  let newTask = req.body
  let result = await Task.update(
    newTask,
    {where: {id: cid}}
  )
  res.status(200).json(result);
})
//Delete task
taskerRouter.delete('/tasks/:id', async (req, res) => {
  await Task.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).end()
})
//Get task by id
taskerRouter.get('/tasks/:id', async (req, res) => {
  let task = await Task.findByPk(req.params.id)
  if (task === null) {
    return res.status(404).end()
  }
  res.status(200).json(task.dataValues)
})

//Get task by id
taskerRouter.get('/taskstates', async (req, res) => {
  let states = await TaskState.findAll()
  if (states === null) {
    return res.status(404).end()
  }
  res.status(200).json(states)
})


module.exports = taskerRouter
