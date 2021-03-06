import connectDB from '../../common/lib/db'
import Bookmark from '../../models/bookmarkModels'
import User from '../../models/userModels'

connectDB().catch(err => console.log('ERROR: ', err))

export default async function users(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const data = await User.find({}).select({ "bookmarks": 1, "_id": 0 })
                    .then((bm) => {
                        res.status(200).json(bm)
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(500).json({ success: false, error });
                    })
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, error });
            }
            break;
        case "POST":
            try {
                let findUser = await User.findOne({ email: 'osman@gmail.com' })
                let newBookmark = {
                    desc: 'furkan portakal websitesi',
                    link: 'www.portakal.dev'
                }
                findUser.bookmarks = [
                    ...findUser.bookmarks,
                    newBookmark
                ]
                findUser.save().then((data) => {
                    res.status(200).json(data)
                })
            } catch (error) {
                console.log(error);
                res.status(500).end().json({ success: false, error });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}