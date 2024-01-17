async function addExpense() {
  const amount = document.getElementById('amount').value
  const category = document.getElementById('category').value

  try {
    await fetch('/api/expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, category }),
    })

    // Fetch and display updated expense list
    fetchExpenses()
  } catch (error) {
    console.error('Error adding expense:', error)
  }
}

async function fetchExpenses() {
  const expenseList = document.getElementById('expenseList')

  try {
    const response = await fetch('/api/expenses')
    const expenses = await response.json()

    // Clear previous list
    expenseList.innerHTML = ''

    // Populate the expense list
    expenses.forEach((expense) => {
      const li = document.createElement('li')
      li.textContent = `Amount: $${expense.amount} | Category: ${expense.category}`
      expenseList.appendChild(li)
    })
  } catch (error) {
    console.error('Error fetching expenses:', error)
  }
}

// Initial fetch to populate expenses on page load
fetchExpenses()
