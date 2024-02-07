import './ExpenseItem.css'
function ExpenseItem(){
    return(
        <div className = "expense-item">
            <div>Jan 28th 2024</div>
            <div classNmae = "expense-item_description">
                <h2>Car Insurance</h2>
                <div className="expense-item_price">$249.5</div>
            </div>
        </div>
    );
}
export default ExpenseItem;