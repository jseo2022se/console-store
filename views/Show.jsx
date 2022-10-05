const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')


class Show extends React.Component {


    render() {

        const { name, details, isUsed, quantity, price, _id, imgUrl} = this.props.vgconsole 

        return (
            <DefaultLayout title={`${name} details`} group='Home'>
            
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

                    <nav>
                        <a id='edit' href={`/products/${_id}/edit`}>Edit Details</a>
                    </nav>

                    <br></br>

                    <form action={`/products/${_id}/buy?_method=PUT`} method='POST' hidden={ quantity == 0 ? true : false }>
                        <input type='submit' value='Buy Item'></input>
                    </form>

                    <form action={`/products/${_id}?_method=DELETE`} method='POST'>
                        <input type='submit' value='Delete'></input>
                    </form>
                </div>
            
            </DefaultLayout>
        )
    }
}

module.exports = Show