import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props)=> {
  const expenseItems = [];
  for (let i = 0; i < props.items.length; i++) {
    const expenseItem = (
      <ExpenseItem
        id={props.items[i].id}
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i].date}
      />
    );

    expenseItems.push(expenseItem);
  }

  return (
    <Card className='expenses'>
      {expenseItems}
    </Card>
  );
}

export default Expenses;
