import { getServerSession } from 'next-auth'

import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function getSesssion() {
	return await getServerSession(authOptions)
}
