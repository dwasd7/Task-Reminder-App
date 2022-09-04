import Button from './Button'

const Button_Layout = ({ onAdd, showAdd}) => {
    return (
        <header className='Button_Layout'>
            <Button color={showAdd? 'rgb(100, 3, 3)': 'rgb(248, 0, 0)'} text={showAdd? 'Go Back' : 'Add Task'} onClick= {onAdd}/>
        </header>
    )
}

export default Button_Layout

