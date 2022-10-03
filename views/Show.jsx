const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')


class Show extends React.Component {

    

    handleClick = (amount) => {
        amount--;
    }

    render() {

        const { name, details, isUsed, quantity, _id, imgUrl} = this.props.vgconsole 

        return (
            <DefaultLayout title={`${name} details`} group='products'>
            
                <h1>Console Details</h1>
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

                <div>
                    <img src={`${imgUrl}`}></img>
                </div>

                <button hidden={ quantity == 0 ? true : false} onClick={this.handleClick(quantity)}>
                    <a href={`/products/${_id}`}>Buy</a>
                </button>

                <br></br>
                
                <button>
                    <a href={`/products/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/products/${_id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete'></input>
                </form>
           
            </DefaultLayout>
        )
    }
}

module.exports = Show