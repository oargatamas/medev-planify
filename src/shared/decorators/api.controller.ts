import { applyDecorators, Controller } from '@nestjs/common'

export function ApiController(path: string) {
  return applyDecorators(Controller(`api/${path}`))
}