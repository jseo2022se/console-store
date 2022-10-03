const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='new console' group='products'>

                <h1>New Console Page</h1>
                <form action='/products' method='POST'>
                    {/* replace property names with ones mentioned in models/consoles.js */}
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='title' name='name'></input>

                    <label htmlFor='details'>Details:</label>
                    <input type='text' id='details' name='details'></input>

                    <label htmlFor='quantity'>Quantity:</label>
                    <input type='number' id='quantity' name='quantity'></input>

                    <label htmlFor='isUsed'>Console is used:</label>
                    <input type='checkbox' id='isUsed' name='isUsed'></input>

                    <input type='submit' value='Add a new console'></input>

                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New