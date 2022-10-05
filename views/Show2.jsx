const React = require('react')
const DefaultLayout2 = require('../views/layouts/DefaultLayout2')

// Show page for customers
// Similar to show page for store staff, except Edit and Delete options are hidden, also DefaultLayout2
class Show extends React.Component {


    render() {

        const { name, details, isUsed, quantity, price, _id, imgUrl} = this.props.vgconsole 

        return (
            <DefaultLayout2 title={`${name} details`} group='Home'>
            
                <h1 className='title'>Console Details</h1>
                <div className='show-details'>
                    <div>
                        <img src={`${imgUrl}`}></img>
                    </div>
                    <p>
                        Console name: { name }
                    </p>
                    <p>
                        Details: { details }
                    </p>
                    <p>
                        Quantity: { quantity == 0 ? "OUT OF STOCK": quantity}
                    </p>
                    <p hidden={ quantity == 0 ? true : false}>
                        {isUsed ? "The console is used": "The console is not used"}
                    </p>
                    <p>
                        Price: { `$${ price }` }
                    </p>

                    <br></br>

                    <form action={`/products/customer/${_id}/buy?_method=PUT`} method='POST' hidden={ quantity == 0 ? true : false }>
                        <input type='submit' value='Buy Item'></input>
                    </form>

                </div>
            
            </DefaultLayout2>
        )
    }
}

module.exports = Show