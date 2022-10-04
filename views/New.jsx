const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='new console' group='Home'>

                <h1 className='title'>New Console Page</h1>
                <form action='/products' method='POST'>

                    <div className='show-details'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='title' name='name'></input>

                        <label htmlFor='quantity'>Quantity:</label>
                        <input type='number' min='0' id='quantity' name='quantity'></input>

                        <label htmlFor='isUsed'>Console is used:</label>
                        <input type='checkbox' id='isUsed' name='isUsed'></input>

                        <label htmlFor='price'>Price:</label>
                        <input type='number' step='0.01' min='0' id='price' name='price'></input>

                        <label htmlFor='imgUrl'>Console image:</label>
                        <input type='text' id='imgUrl' name='imgUrl'></input>

                        <label htmlFor='details'>Details:</label>
                        <input type='textarea' id='details' name='details'></input>

                        <input type='submit' value='Add a new console'></input>
                    </div>

                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New