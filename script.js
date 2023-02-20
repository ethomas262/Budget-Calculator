const addBill = () =>{
    let parentForm = document.getElementById('bill-adder')


    let bill = []

    bill.push(document.getElementById('bill-name').value)

   

    let new_bill = document.createElement('li')
    new_bill.id = bill[1]
    new_bill.InnerHTML = `${bill[1]} : ${bill[0]} : $${bill[2]}` 

    let parentNode = document.getElementById('bill_display')

    parentNode.appendChild(new_bill)



    /*let clear_bill_button = document.createElement('input')
    clear_bill_button.type = 'button'
    clear_bill_button.innerHTML = 'X'
    clear_bill_button.style.backgroundColor = 'red'
    clear_bill_button.style.color = 'white'
    

    const remove_bill = ()=> {
        parentNode.removeChild(new_bill)
    }

    new_bill.innerHTML +=  clear_bill_button*/

    
    
}