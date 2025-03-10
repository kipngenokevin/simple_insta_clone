import Feed from './Feed/Feed'

const posts = [
    {profileimg: "https://i.pinimg.com/736x/13/48/cc/1348cc0a654c9a0c95acd55e9600362e.jpg", name: "Charlie Chaplin", feedimg: "https://i.pinimg.com/736x/18/81/3a/18813a0a4bb252cd873f0f69c56e17c0.jpg"}, 
    {profileimg: "https://i.pinimg.com/736x/a6/79/b4/a679b46cec0093fd0ab88ca4cfcdfaea.jpg", name: "Usain Bolt", feedimg: "https://i.pinimg.com/736x/1f/d3/6b/1fd36b9a8f7bbed8218a95b7c5145b73.jpg"}, 
    {profileimg: "https://i.pinimg.com/736x/4c/7f/c0/4c7fc05bd8efeb9b1655e5aa41073f05.jpg", name: "Asafa Powell", feedimg: "https://i.pinimg.com/736x/47/bd/e1/47bde16421f223326721dacf2f5e20a0.jpg"}, 
]

export default function Post() {
    function generateUnique() {
        return Math.random().toString(16).slice(2)+(new Date()).getTime()+Math.random().toString(16).slice(2)
    }

    const postfeed = posts.map(post => <Feed key={generateUnique()} profileimg={post.profileimg} name={post.name} feedimg={post.feedimg}/>)
    
    return (
        <>
        {postfeed}
        </>
    )
}