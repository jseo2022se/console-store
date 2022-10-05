const React = require('react')
const DefaultLayout2 = require('../views/layouts/DefaultLayout2')

// Contact Page for on customer route
// Exactly the same as the one on store route

class Contact2 extends React.Component {

    render() {

        return (
            <DefaultLayout2 title='Contact' group='Home'>
                <h1 className='title'>Contact Us</h1>

                <div className='show-details'>
                    <p>Phone: 1-800-OH-NO-IGGY-LOOK-OUT</p>
                </div>

            </DefaultLayout2>
        )
    }
}

module.exports = Contact2