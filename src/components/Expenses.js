import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log(props);
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
    <div className='expenses'>
      {expenseItems}
    </div>
  );
}

export default Expenses;
