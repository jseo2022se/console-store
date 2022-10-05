const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

// About page on store management route

class About extends React.Component {

    render() {

        return (
            <DefaultLayout title='About' group='Home'>
                <h1 className='title'>About Us</h1>

                <div className='show-details'>
                    <p> We sell used and unused video game consoles.</p>
                </div>

            </DefaultLayout>
        )
    }
}

module.exports = About