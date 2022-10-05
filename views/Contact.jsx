const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

// Contact Page on store management route

class Contact extends React.Component {

    render() {

        return (
            <DefaultLayout title='Contact' group='Home'>
                <h1 className='title'>Contact Us</h1>

                <div className='show-details'>
                    <p>Phone: 1-800-OH-NO-IGGY-LOOK-OUT</p>
                </div>

            </DefaultLayout>
        )
    }
}

module.exports = Contact