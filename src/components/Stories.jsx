import Story from "./Stories/Stories"

const storiesArray = [
    {img: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8', name: 'one branch'},
    {img: 'https://storage.ws.pho.to/s2/ba21277bb3001634986a787bfd0620184fa83b71_m.jpg', name: 'marathon'}, 
    {img: 'https://media.marketrealist.com/brand-img/Ik1D_rqGf/0x0/newprofile-pic-1-1652281674003.jpg', name: 'young talent'}, 
    {img: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/11/14/asset/82ea240a9e12/sub-buzz-2936-1652279997-1.jpg?downsize=900:*&output-format=auto&output-quality=auto', name: 'mexico'}
]

export default function Stories() {
    function generateUnique() {
        return Math.random().toString(16).slice(2)+(new Date()).getTime()+Math.random().toString(16).slice(2)
    }

    const stories = storiesArray.map(story => <Story key={generateUnique()} img={story.img} name={story.name} />)
    return (
        <div className="story-container">
            {stories}
        </div>
    )
}