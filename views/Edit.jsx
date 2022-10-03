const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Edit extends React.Component {
    render() {
      
        let { vgconsole } = this.props

        return (
            <DefaultLayout title='edit a console' group='products'>
               
                <h1>Edit Console Page</h1>
                <form action={`/products/${vgconsole._id}?_method=PUT`} method='POST'>
                    
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' defaultValue={ vgconsole.name }></input>

                    <label htmlFor='details'>Details:</label>
                    <input type='text' id='details' name='details' defaultValue={ vgconsole.details }></input>

                    <label htmlFor='quantity'>Quantity:</label>
                    <input type='number' id='quantity' name='quantity' defaultValue={ vgconsole.quantity }></input>

                    <label htmlFor='imgUrl'>Console image:</label>
                    <input type='text' id='imgUrl' name='imgUrl' defaultValue={ vgconsole.imgUrl}></input>

                    <label htmlFor='isUsed'>Console is used:</label>
                    <input type='checkbox' id='isUsed' name='isUsed' defaultChecked={ vgconsole.isUsed }></input>

                    <input type='submit' value='Edit console entry'></input>
                </form>
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit