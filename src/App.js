import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 95,
      date: new Date(2022, 1, 2),
    },
    {
      id: "e2",
      title: "Toilet papper",
      amount: 295,
      date: new Date(2022, 2, 3),
    },
    {
      id: "e3",
      title: "New computers",
      amount: 1000,
      date: new Date(2022, 3, 4),
    },
    {
      id: "e4",
      title: "Harry potter",
      amount: 200,
      date: new Date(2022, 4, 5),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem id={expenses[3].id} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
