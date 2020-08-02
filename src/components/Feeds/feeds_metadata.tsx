export interface IFeedsData {
    id: string | number,
    pic: string,
    username: string,
    content: any,
    views: string,
    description: string,
    likes: string | number,
    comments: Array<ICommnets>
}

export interface ICommnets {
    pic: string,
    text: string,
    userID: string | number
}

const FEEDS_DATA = [
    {
        id: 1,
        pic: "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/95171127_2580690715582727_4871067932475523072_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=hp8k0rSa_AIAX8fffYi&oh=8bd61869e5fc9fe9410a6c47281a4bdb&oe=5F51681B",
        username: 'shraddhakapoor',
        content: {
            type: 'image',
            images: [
                'https://scontent-maa2-1.cdninstagram.com/v/t51.2885-15/e35/116807119_918581188643485_773950250987971930_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=NLmfEAzLnJwAX-mmFMF&oh=6f8dd3a6f89a7699bf864ac0301891a4&oe=5F4EC93C',
            ]
        },
        views: "1,00,000",
        description: "Best Band Ever",
        likes: "2,000",
        comments: [
            {
                pic: "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/67642022_738267743299072_7454043070808457216_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=xvcyjK1BhNAAX8-rYlE&oh=86d46be9041988abe752290f5064d956&oe=5F4E24FF",
                text: "Very Awesome!",
                userID: 1
            }
        ]
    },
    {
        id: 2,
        pic: "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/67642022_738267743299072_7454043070808457216_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=xvcyjK1BhNAAX8-rYlE&oh=86d46be9041988abe752290f5064d956&oe=5F4E24FF",
        username: 'hrithikroshan',
        content: {
            type: 'image',
            images: [
                'https://scontent-maa2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/98731641_948150708983234_2898193959676205285_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hzsWu9EhZZkAX-KZlmI&oh=eac2b641f8980bfe4967495076f6cbd7&oe=5F51537C'
            ]
        },
        views: "1,20,000",
        description: "HRX is LOVE!!!!",
        likes: "5,000",
        comments: [
            {
                pic: "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/95171127_2580690715582727_4871067932475523072_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=hp8k0rSa_AIAX8fffYi&oh=8bd61869e5fc9fe9410a6c47281a4bdb&oe=5F51681B",
                text: "Very Coool!!!",
                userID: 1
            }
        ]
    }
];



export {
    FEEDS_DATA
}