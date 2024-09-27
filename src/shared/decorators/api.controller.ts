import { applyDecorators, Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';

export function ApiController(path: string, tag: string = path) {
  return applyDecorators(
    Controller(`api/${path}`),
    ApiTags(tag),
  )
}