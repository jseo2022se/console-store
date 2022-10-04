const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Edit extends React.Component {
    render() {
      
        let { vgconsole } = this.props

        return (
            <DefaultLayout title='edit a console' group='Home'>
               
                <h1 className='title'>Edit Console Page</h1>
                <form action={`/products/${vgconsole._id}?_method=PUT`} method='POST'>

                    <div className='show-details'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' defaultValue={ vgconsole.name }></input>

                        <label htmlFor='quantity'>Quantity:</label>
                        <input type='number' min='0' id='quantity' name='quantity' defaultValue={ vgconsole.quantity }></input>

                        <label htmlFor='imgUrl'>Console image:</label>
                        <input type='text' id='imgUrl' name='imgUrl' defaultValue={ vgconsole.imgUrl}></input>

                        <label htmlFor='isUsed'>Console is used:</label>
                        <input type='checkbox' id='isUsed' name='isUsed' defaultChecked={ vgconsole.isUsed }></input>

                        <label htmlFor='price'>Price:</label>
                        <input type='number' step='0.01' min='0' id='price' name='price' defaultValue={ vgconsole.price }></input>

                        <label htmlFor='details'>Details:</label>
                        <input type='textarea' id='details' name='details' defaultValue={ vgconsole.details }></input>

                        <input type='submit' value='Edit console entry'></input>
                    </div>
            
                </form>
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit