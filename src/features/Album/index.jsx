import React from 'react'
import AlbumList from './components/AlbumList'

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/d/4/8/dd48a59efc05061928fb8705d4375c59.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Anh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/d/4/8/dd48a59efc05061928fb8705d4375c59.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Hoa',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/d/4/8/dd48a59efc05061928fb8705d4375c59.jpg'
        },
    ]

    return (
        <div>
            <h2>Album Feature</h2>
            <AlbumList albumList={albumList} />
        </div>
    )
}

AlbumFeature.propTypes = {}

export default AlbumFeature
