import { clientEnv, clientSchema } from './schema'

const _clientEnv = clientSchema.safeParse(clientEnv)

export const formatErrors = (
  errors: { [s: string]: unknown } | ArrayLike<unknown>
) =>
  Object.entries(errors)
    .map(([name, value]: any) => {
      if (value && '_errors' in value)
        return `${name}: ${value._errors.join(', ')}\n`
    })
    .filter(Boolean)

if (!_clientEnv.success) {
  console.error(
    'Invalid environment variables:\n',
    ...formatErrors(_clientEnv.error.format())
  )

  throw new Error('Invalid environment variables')
}

for (const key of Object.keys(_clientEnv.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.warn(
      `Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`
    )

    throw new Error('Invalid public environment variable name')
  }
}

export const env = _clientEnv.data
