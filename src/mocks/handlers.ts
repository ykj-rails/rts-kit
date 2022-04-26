import { rest } from 'msw'

import user from '@/mocks/api/user'

export const handlers = [rest.get('/user', user.get)]
