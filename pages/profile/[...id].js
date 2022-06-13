import Layout from "../../components/layout"
import Seo from '@c/seo';

import { useDispatch, useSelector } from "react-redux";
import { addBookmark } from "../../redux/actions/userAction";
import { useState } from 'react';

export default function Profile() {
    const dispatch = useDispatch();
    const [s, setState] = useState({
        data: {
            link: '',
            desc: ''
        }
    })

    const changeFormData = (node, value) => {
        let data = Object.assign({}, s.data)
        data[node] = value
        setState({
            data
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(addBookmark({
            name: 'osman',
            email: 'osman@gmail.com',
        }));
    }

    return (
        <Layout>
            <Seo title="Profile" />
            <span className="flex mt-4">Share your bookmark</span>
            <div className="flex flex-col items-end w-full mt-4">
                <input type="url" value={s?.data?.link || ''} onChange={(e) => { changeFormData('link', e.target.value) }} placeholder="https://example.com" className="input input-bordered input-accent w-full  mb-2" />
                <textarea value={s?.data?.desc || ''} onChange={(e) => { changeFormData('desc', e.target.value) }} className="textarea textarea-accent w-full mb-2" placeholder="Description"></textarea>
                <button onClick={(e) => submit(e)} className="btn btn-warning max-w-xs">Push Mark</button>
            </div>
        </Layout>
    )
}