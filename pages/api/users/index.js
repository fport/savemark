import connectDB from '../../../common/lib/db'
import User from '../../../models/userModels'

connectDB().catch(err => console.log('ERROR: ', err))

export default async function users(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const data = await User.find()
                res.status(200).json(data)
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, error });
            }
            break;
        case "POST":
            const create = new User({
                name: 'Osman Abi',
                email: 'osman@gmail.com',
                password: '123123',
                bookmarks: []
            })
            create.save().then(() => {
                res.status(200).json(create)
            })
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}