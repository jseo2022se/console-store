const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')


class Show extends React.Component {

    render() {

        const { name, details, isUsed } = this.props.vgconsole // replace with console properties

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
                    {isUsed ? "The console is used": "The console is not used"}
                </p>

                <nav>
                    <a href='/products'>Back</a>
                </nav>
           
            </DefaultLayout>
        )
    }
}

module.exports = Show