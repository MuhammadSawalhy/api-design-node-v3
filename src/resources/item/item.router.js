import controller from './item.controllers'
import { Router } from 'express'

const router = Router()

router.route('/')
  .get(controller.getMany)
  .post(controller.createOne)

router.route('/:id')
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.removeOne)

export default router
