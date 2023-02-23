



const display_bill = () =>{
    let bill_type = document.getElementById("bill-type")
    let bill_name = document.getElementById("bill-name")
    let bill_amount = document.getElementById("bill-amount")

    let new_element = document.createElement("li")
    


    new_element.innerHTML = ` ${bill_name.value} $${bill_amount.value} : ${bill_type.value} `
    


    document.getElementById("bill_display").appendChild(new_element)

    


}

const calculate = () =>{
    let billStringArr = document.getElementById("bill_display").children

    let data = new Array()

    billStringArr.forEach(element => {data.push(element.innerHTML)})

    res = data.map(element => {
        return bill_object_generator(element)
    })

    organized_res = object_organizer(res)

    let sums = organized_res.map(element => {
        return getSumOfType(element)
    })




    const bill_object_generator = (string) =>{
        let type = string.split(":")[1]
        let amount = string.match(/\d+/)[0]
        let name = string.split("$")[0]


        return{
            type,
            amount,
            name,


        }

    }


    const object_organizer = (arr) =>{
        let res = [[],[],[],[],[]]


        arr.forEach(element => {
            let foo = element.type
            foo = foo.trim()
            foo = foo.toLowerCase()
            if(foo === 'entertainment' ){ res[0].push(element)}
            else if(foo === 'living expense'){res[1].push(element)}
            else if(foo === 'travel/commerce'){res[2].push(element)}
            else if(foo === 'subscription/membership'){res[3].push(element)}
            else{res[4].push(element)}

        })
        return res;
    }


    const getSumOfType = (arr) =>{
        let sum = 0

        for(let i=0; i <arr.length; i++){
            sum+= arr.amount
        }
        return sum;
    }

}