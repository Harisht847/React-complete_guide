import ExpenseItem from './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const expenseItem = (props) => {
    
return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}> </ExpenseDate>        
        <div className='expense-item__description'><h2>{props.title}</h2></div>
        <div className='expense-item__price'>{props.amount}</div>
        <button>click the title</button>
    </Card>
)
};

export default expenseItem;