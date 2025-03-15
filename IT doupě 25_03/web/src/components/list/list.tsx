export interface IListProps<T> {
    isOrdered: boolean,
    items: T[]
}

export const List = <T,>(props: IListProps<T>) => {
    const {isOrdered, items} = props;
    
    const renderItems = () => {
        return (
            <>
                {items.map((item, key) => {
                    return <li key={key}>{`${item}`}</li>
                })}
            </>
        );
    }
    
    return isOrdered ? <ol>{renderItems()}</ol> : <ul>{renderItems()}</ul>
}