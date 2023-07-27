import express from "express";
import { addProject, addTimeline, addYoutube, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, myProfile, updateUser } from "../controller/UserController.js";
import { isAuthenticated } from "../middleware/auth.js";


export const userRouter = express.Router()

userRouter.post('/login', login)
userRouter.get('/logout', logout)
userRouter.get('/user', getUser)
userRouter.get('/me', isAuthenticated, myProfile)
userRouter.put('/admin/update', isAuthenticated, updateUser)
// Contact
userRouter.post('/contact', contact)

// ADD ROUTES
userRouter.post('/admin/timeline/add', isAuthenticated, addTimeline)

userRouter.post('/admin/youtube/add', isAuthenticated, addYoutube)

userRouter.post('/admin/project/add', isAuthenticated, addProject)

// DELETE ROUTES

userRouter.delete('/admin/timeline/:id', isAuthenticated, deleteTimeline)

userRouter.delete('/admin/youtube/:id', isAuthenticated, deleteYoutube)

userRouter.delete('/admin/project/:id', isAuthenticated, deleteProject)

