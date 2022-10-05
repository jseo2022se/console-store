const React = require('react')
const DefaultLayout2 = require('../views/layouts/DefaultLayout2')

// About Page on customer route

class About2 extends React.Component {

    render() {

        return (
            <DefaultLayout2 title='About' group='Home'>
                <h1 className='title'>About Us</h1>

                <div className='show-details'>
                    <p> We sell used and unused video game consoles.</p>
                </div>

            </DefaultLayout2>
        )
    }
}

module.exports = About2