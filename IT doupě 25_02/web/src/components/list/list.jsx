export const List = ({isOrdered, items}) => {
    const renderItems = () => {
        return <>
            {items.map((item, key) => {
                return <li key={key}>{item}</li>
            })}
        </>
    }
    
    return isOrdered ? <ol>{renderItems()}</ol> : <ul>{renderItems()}</ul>
}