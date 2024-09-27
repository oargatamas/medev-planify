import { applyDecorators, Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';

export function ApiController(path: string, tag: string = path) {
  return applyDecorators(
    Controller(`api/${path}`),
    ApiTags(capitalizeFirstLetter(tag)),
  )
}

function capitalizeFirstLetter(string: string): string {
  return string.split('').map((char, index) =>
    index === 0 ? char.toUpperCase() : char).join('')
}