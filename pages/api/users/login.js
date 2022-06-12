import connectDB from '../../../common/lib/db'
import User from '../../../models/userModels'

connectDB().catch(err => console.log('ERROR: ', err))

export default async function users(req, res) {
    const { method } = req;

    switch (method) {
        case "POST":
            const data = await User.findOne({
                email: 'osman@gmail.com',
                password: '123456'
            })

            if (data.email) {
                res.status(200).json(data)
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}