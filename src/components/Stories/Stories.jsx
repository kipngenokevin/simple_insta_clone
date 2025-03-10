export default function Story(props) {
    return (
        <article className="stories">
            <div className="image-container">
                <img src={props.img} alt="Stories" />
            </div>
            <span>{props.name}</span>
        </article>
    )
}