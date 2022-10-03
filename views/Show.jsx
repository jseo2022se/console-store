const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')


class Show extends React.Component {

    render() {

        const { name, details, isUsed, quantity, _id } = this.props.vgconsole // replace with console properties

        return (
            <DefaultLayout title={`${name} details`} group='products'>
                {/* to be replaced with custom details with models/console.js */}
            
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
                <p>
                    {isUsed ? "The console is used": "The console is not used"}
                </p>

                <button>
                    <a href={`/products/${_id}`}>Buy</a>
                </button>
                <br></br>
                <button>
                    <a href={`/products/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/products/${_id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete'></input>
                </form>

                <nav>
                    <a href='/products'>Back</a>
                </nav>
           
            </DefaultLayout>
        )
    }
}

module.exports = Show